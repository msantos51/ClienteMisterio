/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/dashboard/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import ProgressBar from "@/app/components/ui/ProgressBar";

type UserProfile = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  birthDate: string;
  gender: string;
  profileCompleted: boolean;
  isAdmin: boolean;
  hasCourseAccess: boolean;
};

type CourseProgressData = {
  modules: Array<{ moduleId: number; completed: boolean; quizScore: number | null }>;
  totalModules: number;
  completedCount: number;
  progressPercent: number;
};

type UserPreferences = {
  receiveNewsletter: boolean;
  allowNotifications: boolean;
};

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

type DashboardSection = "account" | "security" | "preferences";

type ProfileResponse = {
  user?: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    birthDate: string | null;
    gender: string | null;
    profileCompleted: boolean;
    isAdmin: boolean;
    hasCourseAccess: boolean;
  };
  message?: string;
};

type UpdateResponse = {
  message: string;
};

const preferencesStorageKey = "vp_preferences";

const normalizeBirthDateForInput = (birthDate: string | null) => {
  // Garante formato YYYY-MM-DD no input date.
  return birthDate ? birthDate.slice(0, 10) : "";
};

const dashboardSectionIds: DashboardSection[] = ["account", "security", "preferences"];

const isDashboardSection = (value: string | null): value is DashboardSection =>
  dashboardSectionIds.includes(value as DashboardSection);

export default function DashboardPage() {
  // useSearchParams exige um limite de Suspense — sem isto, o build estático
  // falha com "should be wrapped in a suspense boundary".
  return (
    <Suspense fallback={null}>
      <DashboardPageContent />
    </Suspense>
  );
}

function DashboardPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const d = t.dashboard;

  const dashboardSections: Array<{ id: DashboardSection; label: string; description: string }> = [
    { id: "account", label: d.account, description: d.accountDescription },
    { id: "security", label: d.security, description: d.securityDescription },
    { id: "preferences", label: d.preferences, description: d.preferencesDescription },
  ];
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const tabFromUrl = searchParams.get("tab");
  const [activeSection, setActiveSection] = useState<DashboardSection>(
    isDashboardSection(tabFromUrl) ? tabFromUrl : "account"
  );

  const changeSection = (section: DashboardSection) => {
    setActiveSection(section);
    const params = new URLSearchParams(searchParams.toString());
    if (section === "account") {
      params.delete("tab");
    } else {
      params.set("tab", section);
    }
    const query = params.toString();
    router.replace(query ? `/dashboard?${query}` : "/dashboard", { scroll: false });
  };
  const [preferences, setPreferences] = useState<UserPreferences>({
    receiveNewsletter: true,
    allowNotifications: true,
  });
  const [passwordForm, setPasswordForm] = useState<PasswordForm>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [profileFeedback, setProfileFeedback] = useState<string | null>(null);
  const [firstAccessFeedback, setFirstAccessFeedback] = useState<string | null>(null);
  const [passwordFeedback, setPasswordFeedback] = useState<string | null>(null);
  const [deleteAccountPassword, setDeleteAccountPassword] = useState("");
  const [deleteAccountFeedback, setDeleteAccountFeedback] = useState<string | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgressData | null>(null);
  const [profileLoadError, setProfileLoadError] = useState<string | null>(null);
  const [profileLoadAttempt, setProfileLoadAttempt] = useState(0);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isCompletingFirstAccess, setIsCompletingFirstAccess] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const mustCompleteProfile = useMemo(() => {
    if (!profile) {
      return false;
    }

    return !profile.profileCompleted;
  }, [profile]);

  useEffect(() => {
    // A autenticação vive só no cookie httpOnly (ver lib/session.ts) — o
    // servidor é a única fonte de verdade, sem estado de sessão em
    // localStorage (evita divergência e exposição a XSS).
    const loadProfile = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      try {
        const response = await fetch("/api/user", { credentials: "include", signal: controller.signal });
        clearTimeout(timeoutId);

        // 401 é a única resposta que significa "sem sessão" — qualquer outra
        // falha (500, timeout, rede) é um erro recuperável, não motivo para
        // expulsar quem já tinha sessão válida de volta para o login.
        if (response.status === 401) {
          router.push("/entrar");
          return;
        }

        const data = (await response.json()) as ProfileResponse;

        if (!response.ok || !data.user) {
          setProfileLoadError(data.message || t.common.error);
          return;
        }

        const normalizedProfile: UserProfile = {
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          fullName: data.user.fullName,
          email: data.user.email,
          birthDate: normalizeBirthDateForInput(data.user.birthDate),
          gender: data.user.gender ?? "",
          profileCompleted: data.user.profileCompleted,
          isAdmin: data.user.isAdmin,
          hasCourseAccess: data.user.hasCourseAccess,
        };

        setProfileLoadError(null);
        setProfile(normalizedProfile);
      } catch {
        clearTimeout(timeoutId);
        setProfileLoadError(t.common.error);
      }
    };

    loadProfile();

    const loadCourseProgress = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      try {
        const response = await fetch("/api/course/progress", { credentials: "include", signal: controller.signal });
        clearTimeout(timeoutId);
        if (response.ok) {
          const data = (await response.json()) as CourseProgressData;
          setCourseProgress(data);
        }
      } catch {
        clearTimeout(timeoutId);
        // Progresso do curso não disponível.
      }
    };

    loadCourseProgress();

    const storedPreferences = localStorage.getItem(preferencesStorageKey);
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences) as UserPreferences);
    }
  }, [router, profileLoadAttempt, t]);

  const handleProfileChange = (field: keyof UserProfile, value: string | boolean) => {
    if (!profile) {
      return;
    }

    setProfile({ ...profile, [field]: value } as UserProfile);
  };

  const handlePreferenceChange = (field: keyof UserPreferences) => {
    setPreferences((previous) => ({ ...previous, [field]: !previous[field] }));
  };

  const handlePasswordFieldChange = (field: keyof PasswordForm, value: string) => {
    setPasswordForm((previous) => ({ ...previous, [field]: value }));
  };


  const saveProfile = async (isFirstAccessCompletion: boolean) => {
    if (!profile) {
      return;
    }

    const setSavingState = isFirstAccessCompletion
      ? setIsCompletingFirstAccess
      : setIsSavingProfile;
    const setFeedbackState = isFirstAccessCompletion
      ? setFirstAccessFeedback
      : setProfileFeedback;

    setSavingState(true);
    setFeedbackState(null);

    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile.email,
          firstName: profile.firstName,
          lastName: profile.lastName,
          birthDate: profile.birthDate,
          gender: profile.gender,
        }),
      });

      const data = (await response.json()) as UpdateResponse;

      if (!response.ok) {
        setFeedbackState(data.message);
        return;
      }

      const refreshedProfile: UserProfile = {
        ...profile,
        fullName: `${profile.firstName} ${profile.lastName}`.trim(),
        profileCompleted: true,
        isAdmin: profile.isAdmin,
      };

      // Mantém as preferências sincronizadas após guardar alterações.
      localStorage.setItem(preferencesStorageKey, JSON.stringify(preferences));

      setProfile(refreshedProfile);
      setFeedbackState(data.message);
    } catch {
      setFeedbackState(t.common.error);
    } finally {
      setSavingState(false);
    }
  };

  const handleCompleteFirstAccess = async () => {
    if (!profile || isCompletingFirstAccess) {
      return;
    }

    setFirstAccessFeedback(null);

    if (!profile.birthDate) {
      setFirstAccessFeedback(d.birthDateRequired);
      return;
    }

    await saveProfile(true);
  };

  const handleSaveProfile = async () => {
    if (!profile || isSavingProfile) {
      return;
    }

    setProfileFeedback(null);

    if (!profile.birthDate) {
      setProfileFeedback(d.birthDateRequired);
      return;
    }

    await saveProfile(false);
  };

  const handleChangePassword = async () => {
    if (!profile || isSavingPassword) {
      return;
    }

    setPasswordFeedback(null);

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmNewPassword) {
      setPasswordFeedback(d.passwordFieldsRequired);
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      setPasswordFeedback(d.passwordMismatch);
      return;
    }

    setIsSavingPassword(true);

    try {
      const response = await fetch("/api/user/password", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
          confirmNewPassword: passwordForm.confirmNewPassword,
        }),
      });

      const data = (await response.json()) as UpdateResponse;

      if (!response.ok) {
        setPasswordFeedback(data.message);
        return;
      }

      setPasswordFeedback(data.message);
      setPasswordForm({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
    } catch {
      setPasswordFeedback(t.common.error);
    } finally {
      setIsSavingPassword(false);
    }
  };

  const handleLogout = async () => {
    // Termina a sessão no servidor (limpa o cookie httpOnly).
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    router.push("/entrar");
  };

  const handleDeleteAccount = async () => {
    if (!profile || isDeletingAccount) {
      return;
    }

    setDeleteAccountFeedback(null);

    if (!deleteAccountPassword) {
      setDeleteAccountFeedback(d.deletePasswordRequired);
      return;
    }

    const shouldDeleteAccount = window.confirm(d.deleteConfirmation);

    if (!shouldDeleteAccount) {
      return;
    }

    setIsDeletingAccount(true);

    try {
      const response = await fetch("/api/user", {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: deleteAccountPassword }),
      });

      const data = (await response.json()) as UpdateResponse;

      if (!response.ok) {
        setDeleteAccountFeedback(data.message);
        return;
      }

      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
      localStorage.removeItem(preferencesStorageKey);
      router.push("/entrar?deleted=1");
    } catch {
      setDeleteAccountFeedback(t.common.error);
    } finally {
      setIsDeletingAccount(false);
    }
  };

  if (!profile && profileLoadError) {
    return (
      <section className="full-section full-section-scroll w-full px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4 text-center">
          <p role="alert" className="text-sm text-[color:var(--muted)]">{profileLoadError}</p>
          <button
            type="button"
            className="submit"
            onClick={() => {
              setProfileLoadError(null);
              setProfileLoadAttempt((n) => n + 1);
            }}
          >
            {t.common.tryAgain}
          </button>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section
        className="full-section full-section-scroll w-full space-y-6 px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10"
        aria-busy="true"
        aria-label={d.loading}
      >
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="dashboard-top-banner h-24 animate-pulse" />
          <div className="grid gap-6 md:grid-cols-[1fr_320px]">
            <div className="dashboard-top-banner h-40 animate-pulse" />
            <div className="dashboard-sidebar h-56 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="full-section full-section-scroll w-full space-y-8 px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      {mustCompleteProfile && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4">
          <div className="login-form w-full max-w-2xl">
            <h2 className="section-title">{d.completeProfile}</h2>
            <p className="mt-2 text-sm text-justify">
              {d.profileNote}
            </p>
            <p className="mt-3 text-sm font-semibold">
              {d.fillRequired}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="input-group">
                <input
                  type="date"
                  value={profile.birthDate}
                  onChange={(event) => handleProfileChange("birthDate", event.target.value)}
                />
                <span className="label">{d.birthDate}</span>
              </div>

              <div className="input-group">
                <select
                  value={profile.gender}
                  onChange={(event) => handleProfileChange("gender", event.target.value)}
                >
                  <option value="">{d.select}</option>
                  <option value="male">{d.male}</option>
                  <option value="female">{d.female}</option>
                  <option value="unspecified">{d.genderUnspecified}</option>
                </select>
                <span className="label">{d.gender}</span>
              </div>
            </div>

            <div role="status" aria-live="polite">
              {firstAccessFeedback && <p className="form-feedback mt-2">{firstAccessFeedback}</p>}
            </div>

            <div className="mt-4">
              <button className="submit" type="button" onClick={handleCompleteFirstAccess}>
                {isCompletingFirstAccess ? d.completing : d.completeAccess}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl space-y-6">
        <header className="dashboard-top-banner">
          <h1 className="page-title !text-[color:var(--ink)]">{d.hello}, {profile.firstName}</h1>
          <p className="mt-2 text-sm !text-[color:var(--ink)]">{d.manageAccount}</p>
        </header>

        {/* Secção do curso com barra de progresso apenas para contas com pagamento confirmado. */}
        {profile.hasCourseAccess ? (
          <div
            className="dashboard-top-banner cursor-pointer transition-all hover:shadow-lg"
            onClick={() => router.push("/curso")}
            role="link"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                router.push("/curso");
              }
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold !text-[color:var(--ink)]">{d.courseTitle}</h2>
                <p className="text-xs !text-[color:var(--muted)] mt-0.5">
                  {courseProgress
                    ? courseProgress.completedCount === courseProgress.totalModules
                      ? d.courseCompleted
                      : `${courseProgress.completedCount} ${d.modulesCompleted.replace("{{total}}", String(courseProgress.totalModules))}`
                    : d.startTraining}
                </p>
              </div>
              <span className="text-2xl font-extrabold" style={{ color: "var(--brand)" }}>
                {courseProgress?.progressPercent ?? 0}%
              </span>
            </div>
            <ProgressBar
              value={courseProgress?.progressPercent ?? 0}
              label={`Progresso do curso: ${courseProgress?.progressPercent ?? 0}%`}
              trackClassName="h-3 w-full rounded-full bg-[color:var(--surface-muted)] overflow-hidden"
              fillClassName="h-full rounded-full transition-all duration-700"
              fillStyle={{ background: "linear-gradient(90deg, var(--brand), var(--brand-500))" }}
            />
            <p className="mt-2 text-xs !text-[color:var(--muted)] text-right">{d.continueButton}</p>
          </div>
        ) : (
          <div className="dashboard-top-banner">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold !text-[color:var(--ink)]">{d.courseTitle}</h2>
                <p className="text-xs !text-[color:var(--muted)] mt-0.5">
                  {d.paymentMessage}
                </p>
              </div>
              <button className="submit max-w-[180px]" type="button" onClick={() => router.push("/checkout")}>
                {d.paymentButton}
              </button>
            </div>
          </div>
        )}

        <div className="dashboard-layout-shell">
          <aside className="dashboard-sidebar">
            <h2 className="dashboard-sidebar-title">{d.settings}</h2>
            <nav className="dashboard-menu" role="tablist" aria-label={d.navigation}>
              {dashboardSections.map((menuSection) => (
                <button
                  key={menuSection.id}
                  type="button"
                  role="tab"
                  id={`dashboard-tab-${menuSection.id}`}
                  aria-selected={activeSection === menuSection.id}
                  aria-controls={`dashboard-panel-${menuSection.id}`}
                  tabIndex={activeSection === menuSection.id ? 0 : -1}
                  className={`dashboard-menu-item ${
                    activeSection === menuSection.id ? "is-active" : ""
                  }`}
                  onClick={() => changeSection(menuSection.id)}
                >
                  <span>{menuSection.label}</span>
                  <small>{menuSection.description}</small>
                </button>
              ))}
            </nav>
          </aside>

          <article className="login-form dashboard-form max-w-none">
            {activeSection === "account" && (
              <div role="tabpanel" id="dashboard-panel-account" aria-labelledby="dashboard-tab-account">
                <h2 className="section-title">{d.accountInfo}</h2>
                <p className="mt-2 text-sm">{d.updatePersonal}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="input-group">
                    <input
                      value={profile.firstName}
                      onChange={(event) => handleProfileChange("firstName", event.target.value)}
                    />
                    <span className="label">{d.firstName}</span>
                  </div>

                  <div className="input-group">
                    <input
                      value={profile.lastName}
                      onChange={(event) => handleProfileChange("lastName", event.target.value)}
                    />
                    <span className="label">{d.lastName}</span>
                  </div>

                  <div className="input-group md:col-span-2">
                    <input
                      value={profile.email}
                      onChange={(event) => handleProfileChange("email", event.target.value)}
                    />
                    <span className="label">{d.email}</span>
                  </div>

                  <div className="input-group">
                    <input
                      type="date"
                      value={profile.birthDate}
                      onChange={(event) => handleProfileChange("birthDate", event.target.value)}
                    />
                    <span className="label">{d.birthDate}</span>
                  </div>

                  <div className="input-group">
                    <select
                      value={profile.gender}
                      onChange={(event) => handleProfileChange("gender", event.target.value)}
                    >
                      <option value="">{d.select}</option>
                      <option value="male">{d.male}</option>
                      <option value="female">{d.female}</option>
                      <option value="unspecified">{d.genderUnspecified}</option>
                    </select>
                    <span className="label">{d.gender}</span>
                  </div>
                </div>

                <div role="status" aria-live="polite">
                  {profileFeedback && <p className="form-feedback mt-2">{profileFeedback}</p>}
                </div>

                <div className="mt-4">
                  <button className="submit" type="button" onClick={handleSaveProfile}>
                    {isSavingProfile ? d.saving : d.saveProfile}
                  </button>
                </div>
              </div>
            )}

            {activeSection === "security" && (
              <div role="tabpanel" id="dashboard-panel-security" aria-labelledby="dashboard-tab-security">
                <h2 className="section-title">{d.securityTitle}</h2>
                <p className="mt-2 text-sm">{d.securePassword}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="input-group md:col-span-2">
                    <input
                      placeholder={d.currentPassword}
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(event) =>
                        handlePasswordFieldChange("currentPassword", event.target.value)
                      }
                    />
                    <span className="label">{d.currentPassword}</span>
                  </div>
                  <div className="input-group">
                    <input
                      placeholder={d.newPassword}
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(event) => handlePasswordFieldChange("newPassword", event.target.value)}
                    />
                    <span className="label">{d.newPassword}</span>
                  </div>
                  <div className="input-group">
                    <input
                      placeholder={d.confirmPassword}
                      type="password"
                      value={passwordForm.confirmNewPassword}
                      onChange={(event) =>
                        handlePasswordFieldChange("confirmNewPassword", event.target.value)
                      }
                    />
                    <span className="label">{d.confirmPassword}</span>
                  </div>
                </div>

                <div role="status" aria-live="polite">
                  {passwordFeedback && <p className="form-feedback mt-2">{passwordFeedback}</p>}
                </div>

                <button className="submit mt-4" type="button" onClick={handleChangePassword}>
                  {isSavingPassword ? d.updating : d.updatePassword}
                </button>

                <div className="mt-8 rounded-[var(--radius-lg)] border border-[color:var(--color-primary-red)]/35 bg-[color:var(--color-primary-red)]/8 p-4">
                  <h3 className="text-base font-semibold text-[color:var(--color-red-ink)]">{d.dangerZone}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-red-ink)]">
                    {d.deleteWarning}
                  </p>

                  <div className="input-group mt-4">
                    <input
                      placeholder={d.currentPassword}
                      type="password"
                      value={deleteAccountPassword}
                      onChange={(event) => setDeleteAccountPassword(event.target.value)}
                    />
                    <span className="label">{d.deleteAccountPassword}</span>
                  </div>

                  <div role="status" aria-live="polite">
                    {deleteAccountFeedback && (
                      <p className="form-feedback mt-2">{deleteAccountFeedback}</p>
                    )}
                  </div>

                  <button
                    className="submit is-danger mt-4 max-w-[240px]"
                    type="button"
                    onClick={handleDeleteAccount}
                  >
                    {isDeletingAccount ? d.deleting : d.deleteAccount}
                  </button>
                </div>
              </div>
            )}

            {activeSection === "preferences" && (
              <div role="tabpanel" id="dashboard-panel-preferences" aria-labelledby="dashboard-tab-preferences">
                <h2 className="section-title">{d.preferencesTitle}</h2>
                <p className="mt-2 text-sm">{d.chooseUpdates}</p>

                <div className="mt-5 space-y-3 rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[color:var(--surface-raised)] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="receive-newsletter">{d.newsletter}</label>
                    <label className="checkbox-container" htmlFor="receive-newsletter">
                      <input
                        id="receive-newsletter"
                        className="custom-checkbox"
                        type="checkbox"
                        checked={preferences.receiveNewsletter}
                        onChange={() => handlePreferenceChange("receiveNewsletter")}
                      />
                      <span className="checkmark" aria-hidden="true" />
                    </label>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="allow-notifications">{d.notifications}</label>
                    <label className="checkbox-container" htmlFor="allow-notifications">
                      <input
                        id="allow-notifications"
                        className="custom-checkbox"
                        type="checkbox"
                        checked={preferences.allowNotifications}
                        onChange={() => handlePreferenceChange("allowNotifications")}
                      />
                      <span className="checkmark" aria-hidden="true" />
                    </label>
                  </div>
                </div>

                <button className="submit mt-8" type="button" onClick={handleLogout}>
                  {d.logout}
                </button>
              </div>
            )}
          </article>

          <aside className="dashboard-right-highlight">
            <p className="dashboard-right-highlight-icon" aria-hidden="true">
              ✧
            </p>
            <h3 className="card-title">{d.secureAccount}</h3>
            <p className="mt-3 text-sm text-center">
              {d.accountTip}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
