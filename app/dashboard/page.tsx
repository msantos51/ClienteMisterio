/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/dashboard/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type UserProfile = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  birthDate: string;
  city: string;
  gender: string;
  educationLevel: string;
  nationalId: string;
  hasNationalId: boolean;
  profileCompleted: boolean;
  isAdmin: boolean;
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

type StoredUserProfile = Pick<UserProfile, "email" | "nationalId" | "birthDate">;

type DashboardSection = "account" | "security" | "preferences";

type ProfileResponse = {
  user?: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    birthDate: string | null;
    city: string | null;
    gender: string | null;
    educationLevel: string | null;
    hasNationalId: boolean;
    profileCompleted: boolean;
    isAdmin: boolean;
  };
  message?: string;
};

type UpdateResponse = {
  message: string;
};

const userStorageKey = "vp_user";
const sessionStorageKey = "vp_session";
const preferencesStorageKey = "vp_preferences";

const educationOptions = [
  { value: "6th_grade", label: "6º Ano" },
  { value: "9th_grade", label: "9º Ano" },
  { value: "12th_grade", label: "12º Ano" },
  { value: "bachelor", label: "Licenciatura" },
  { value: "master", label: "Mestrado" },
  { value: "doctorate", label: "Doutoramento" },
];

const dashboardSections: Array<{ id: DashboardSection; label: string; description: string }> = [
  { id: "account", label: "Conta", description: "Dados pessoais e perfil" },
  { id: "security", label: "Segurança", description: "Palavra-passe e acesso" },
  { id: "preferences", label: "Preferências", description: "Comunicações e notificações" },
];

const getStoredNationalId = (email: string) => {
  // Reutiliza o NIF previamente guardado no browser para o mesmo e-mail.
  const storedUserRaw = localStorage.getItem(userStorageKey);

  if (!storedUserRaw) {
    return "";
  }

  try {
    const storedUser = JSON.parse(storedUserRaw) as StoredUserProfile;

    if (storedUser.email === email) {
      return storedUser.nationalId ?? "";
    }
  } catch {
    return "";
  }

  return "";
};

const normalizeBirthDateForInput = (birthDate: string | null, email: string) => {
  // Garante formato YYYY-MM-DD no input date e usa fallback local quando necessário.
  if (birthDate) {
    return birthDate.slice(0, 10);
  }

  const storedUserRaw = localStorage.getItem(userStorageKey);

  if (!storedUserRaw) {
    return "";
  }

  try {
    const storedUser = JSON.parse(storedUserRaw) as StoredUserProfile;

    if (storedUser.email === email) {
      return (storedUser.birthDate ?? "").slice(0, 10);
    }
  } catch {
    return "";
  }

  return "";
};

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<DashboardSection>("account");
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
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isCompletingFirstAccess, setIsCompletingFirstAccess] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  const mustCompleteProfile = useMemo(() => {
    if (!profile) {
      return false;
    }

    return !profile.profileCompleted || !profile.hasNationalId;
  }, [profile]);

  useEffect(() => {
    // Garante que apenas utilizadores autenticados acedem ao dashboard.
    const storedSession = localStorage.getItem(sessionStorageKey);

    if (!storedSession) {
      router.push("/login");
      return;
    }

    setSessionEmail(storedSession);

    const loadProfile = async () => {
      try {
        const response = await fetch("/api/user");
        const data = (await response.json()) as ProfileResponse;

        if (!response.ok || !data.user) {
          router.push("/login");
          return;
        }

        const normalizedProfile: UserProfile = {
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          fullName: data.user.fullName,
          email: data.user.email,
          birthDate: normalizeBirthDateForInput(data.user.birthDate, data.user.email),
          city: data.user.city ?? "",
          gender: data.user.gender ?? "",
          educationLevel: data.user.educationLevel ?? "",
          nationalId: getStoredNationalId(data.user.email),
          hasNationalId: data.user.hasNationalId,
          profileCompleted: data.user.profileCompleted,
          isAdmin: data.user.isAdmin,
        };

        setProfile(normalizedProfile);
        localStorage.setItem(userStorageKey, JSON.stringify(normalizedProfile));
      } catch {
        router.push("/login");
      }
    };

    loadProfile();

    const storedPreferences = localStorage.getItem(preferencesStorageKey);
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences) as UserPreferences);
    }
  }, [router]);

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

  const hasNationalIdValue = (nationalId: string, hasNationalId: boolean) => {
    return hasNationalId || nationalId.trim().length > 0;
  };

  const saveProfile = async (isFirstAccessCompletion: boolean) => {
    if (!profile || !sessionEmail) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile.email,
          firstName: profile.firstName,
          lastName: profile.lastName,
          birthDate: profile.birthDate,
          city: profile.city,
          gender: profile.gender,
          educationLevel: profile.educationLevel,
          nationalId: profile.nationalId,
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
        hasNationalId: hasNationalIdValue(profile.nationalId, profile.hasNationalId),
        isAdmin: profile.isAdmin,
      };

      // Mantém sessão, preferências e perfil sincronizados após guardar alterações.
      localStorage.setItem(preferencesStorageKey, JSON.stringify(preferences));
      localStorage.setItem(sessionStorageKey, profile.email);
      localStorage.setItem(userStorageKey, JSON.stringify(refreshedProfile));

      setSessionEmail(profile.email);
      setProfile(refreshedProfile);
      setFeedbackState(data.message);
    } catch {
      setFeedbackState("Não foi possível guardar as alterações. Tente novamente.");
    } finally {
      setSavingState(false);
    }
  };

  const handleCompleteFirstAccess = async () => {
    if (!profile || isCompletingFirstAccess) {
      return;
    }

    setFirstAccessFeedback(null);

    if (
      !profile.birthDate ||
      !profile.city ||
      !profile.gender ||
      !profile.educationLevel ||
      !hasNationalIdValue(profile.nationalId, profile.hasNationalId)
    ) {
      setFirstAccessFeedback(
        "Preencha NIF, data de nascimento, cidade, género e habilitações literárias para concluir o primeiro acesso."
      );
      return;
    }

    await saveProfile(true);
  };

  const handleSaveProfile = async () => {
    if (!profile || isSavingProfile) {
      return;
    }

    setProfileFeedback(null);

    if (
      !profile.birthDate ||
      !profile.city ||
      !profile.gender ||
      !profile.educationLevel ||
      !hasNationalIdValue(profile.nationalId, profile.hasNationalId)
    ) {
      setProfileFeedback(
        "NIF, data de nascimento, cidade, género e habilitações literárias são obrigatórios."
      );
      return;
    }

    await saveProfile(false);
  };

  const handleChangePassword = async () => {
    if (!sessionEmail || isSavingPassword) {
      return;
    }

    setPasswordFeedback(null);

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmNewPassword) {
      setPasswordFeedback("Preencha a senha atual e a nova senha com confirmação.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      setPasswordFeedback("A confirmação da nova senha deve ser igual à nova senha.");
      return;
    }

    setIsSavingPassword(true);

    try {
      const response = await fetch("/api/user/password", {
        method: "PUT",
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
      setPasswordFeedback("Não foi possível atualizar a senha. Tente novamente.");
    } finally {
      setIsSavingPassword(false);
    }
  };

  const handleLogout = async () => {
    // Termina a sessão no servidor e remove os dados locais antes do redirecionamento.
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem(sessionStorageKey);
    localStorage.removeItem(userStorageKey);
    router.push("/login");
  };

  if (!profile) {
    return <p className="text-sm text-slate-500">A carregar perfil...</p>;
  }

  return (
    <section className="space-y-8">
      {mustCompleteProfile && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="login-form w-full max-w-2xl">
            <h2 className="section-title">Complete o seu perfil</h2>
            <p className="mt-2 text-sm text-justify">
              Os dados seguintes nunca serão partilhados e servem apenas para fins estatísticos. Este preenchimento é obrigatório para concluir o primeiro acesso.
            </p>
            <p className="mt-3 text-sm font-semibold">
              Preencha: NIF, data de nascimento, cidade, género e habilitações literárias.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="input-group">
                <input
                  inputMode="numeric"
                  maxLength={9}
                  placeholder={
                    profile.hasNationalId
                      ? "NIF já guardado. Digite apenas para atualizar"
                      : "Digite o seu NIF (9 dígitos)"
                  }
                  value={profile.nationalId}
                  onChange={(event) => handleProfileChange("nationalId", event.target.value)}
                />
                <span className="label">NIF</span>
              </div>

              <div className="input-group">
                <input
                  type="date"
                  value={profile.birthDate}
                  onChange={(event) => handleProfileChange("birthDate", event.target.value)}
                />
                <span className="label">Data de nascimento</span>
              </div>

              <div className="input-group">
                <input
                  value={profile.city}
                  onChange={(event) => handleProfileChange("city", event.target.value)}
                />
                <span className="label">Cidade</span>
              </div>

              <div className="input-group">
                <select
                  value={profile.gender}
                  onChange={(event) => handleProfileChange("gender", event.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
                <span className="label">Género</span>
              </div>

              <div className="input-group">
                <select
                  value={profile.educationLevel}
                  onChange={(event) => handleProfileChange("educationLevel", event.target.value)}
                >
                  <option value="">Selecione</option>
                  {educationOptions.map((educationOption) => (
                    <option key={educationOption.value} value={educationOption.value}>
                      {educationOption.label}
                    </option>
                  ))}
                </select>
                <span className="label">Habilitações literárias</span>
              </div>
            </div>

            {firstAccessFeedback && <p className="form-feedback mt-2">{firstAccessFeedback}</p>}

            <div className="mt-4">
              <button className="submit" type="button" onClick={handleCompleteFirstAccess}>
                {isCompletingFirstAccess ? "A concluir..." : "Concluir primeiro acesso"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl space-y-6">
        <header className="dashboard-top-banner">
          <h1 className="page-title !text-black">Olá, {profile.firstName}</h1>
          <p className="mt-2 text-sm !text-black">Faça a gestão da sua conta e segurança.</p>
        </header>

        <div className="dashboard-layout-shell">
          <aside className="dashboard-sidebar">
            <h2 className="dashboard-sidebar-title">Definições</h2>
            <nav className="dashboard-menu" aria-label="Navegação do dashboard">
              {dashboardSections.map((menuSection) => (
                <button
                  key={menuSection.id}
                  type="button"
                  className={`dashboard-menu-item ${
                    activeSection === menuSection.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveSection(menuSection.id)}
                >
                  <span>{menuSection.label}</span>
                  <small>{menuSection.description}</small>
                </button>
              ))}
            </nav>
          </aside>

          <article className="login-form dashboard-form max-w-none">
            {activeSection === "account" && (
              <>
                <h2 className="section-title">Informação da conta</h2>
                <p className="mt-2 text-sm">Atualize os seus dados pessoais e guarde as alterações.</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="input-group">
                    <input
                      value={profile.firstName}
                      onChange={(event) => handleProfileChange("firstName", event.target.value)}
                    />
                    <span className="label">Primeiro nome</span>
                  </div>

                  <div className="input-group">
                    <input
                      value={profile.lastName}
                      onChange={(event) => handleProfileChange("lastName", event.target.value)}
                    />
                    <span className="label">Último nome</span>
                  </div>

                  <div className="input-group md:col-span-2">
                    <input
                      value={profile.email}
                      onChange={(event) => handleProfileChange("email", event.target.value)}
                    />
                    <span className="label">E-mail</span>
                  </div>

                  <div className="input-group">
                    <input
                      inputMode="numeric"
                      maxLength={9}
                      placeholder={
                        profile.hasNationalId
                          ? "NIF já guardado. Digite apenas para atualizar"
                          : "Digite o seu NIF (9 dígitos)"
                      }
                      value={profile.nationalId}
                      onChange={(event) => handleProfileChange("nationalId", event.target.value)}
                    />
                    <span className="label">NIF</span>
                  </div>

                  <div className="input-group">
                    <input
                      type="date"
                      value={profile.birthDate}
                      onChange={(event) => handleProfileChange("birthDate", event.target.value)}
                    />
                    <span className="label">Data de nascimento</span>
                  </div>

                  <div className="input-group">
                    <input
                      value={profile.city}
                      onChange={(event) => handleProfileChange("city", event.target.value)}
                    />
                    <span className="label">Cidade</span>
                  </div>

                  <div className="input-group">
                    <select
                      value={profile.gender}
                      onChange={(event) => handleProfileChange("gender", event.target.value)}
                    >
                      <option value="">Selecione</option>
                      <option value="male">Masculino</option>
                      <option value="female">Feminino</option>
                    </select>
                    <span className="label">Género</span>
                  </div>

                  <div className="input-group">
                    <select
                      value={profile.educationLevel}
                      onChange={(event) => handleProfileChange("educationLevel", event.target.value)}
                    >
                      <option value="">Selecione</option>
                      {educationOptions.map((educationOption) => (
                        <option key={educationOption.value} value={educationOption.value}>
                          {educationOption.label}
                        </option>
                      ))}
                    </select>
                    <span className="label">Habilitações literárias</span>
                  </div>
                </div>

                {profileFeedback && <p className="form-feedback mt-2">{profileFeedback}</p>}

                <div className="mt-4">
                  <button className="submit" type="button" onClick={handleSaveProfile}>
                    {isSavingProfile ? "A guardar..." : "Guardar perfil"}
                  </button>
                </div>
              </>
            )}

            {activeSection === "security" && (
              <>
                <h2 className="section-title">Segurança da conta</h2>
                <p className="mt-2 text-sm">Defina uma palavra-passe forte para proteger o seu acesso.</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="input-group md:col-span-2">
                    <input
                      placeholder="Senha atual"
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(event) =>
                        handlePasswordFieldChange("currentPassword", event.target.value)
                      }
                    />
                    <span className="label">Senha atual</span>
                  </div>
                  <div className="input-group">
                    <input
                      placeholder="Nova senha"
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(event) => handlePasswordFieldChange("newPassword", event.target.value)}
                    />
                    <span className="label">Nova senha</span>
                  </div>
                  <div className="input-group">
                    <input
                      placeholder="Confirmar nova senha"
                      type="password"
                      value={passwordForm.confirmNewPassword}
                      onChange={(event) =>
                        handlePasswordFieldChange("confirmNewPassword", event.target.value)
                      }
                    />
                    <span className="label">Confirmar nova senha</span>
                  </div>
                </div>

                {passwordFeedback && <p className="form-feedback mt-2">{passwordFeedback}</p>}

                <button className="submit mt-4" type="button" onClick={handleChangePassword}>
                  {isSavingPassword ? "A atualizar..." : "Atualizar senha"}
                </button>
              </>
            )}

            {activeSection === "preferences" && (
              <>
                <h2 className="section-title">Preferências</h2>
                <p className="mt-2 text-sm">Escolha como pretende receber atualizações da plataforma.</p>

                <div className="mt-5 space-y-3 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="receive-newsletter">Receber newsletter</label>
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
                    <label htmlFor="allow-notifications">Notificações da comunidade</label>
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
                  Terminar sessão
                </button>
              </>
            )}
          </article>

          <aside className="dashboard-right-highlight">
            <p className="dashboard-right-highlight-icon" aria-hidden="true">
              ✧
            </p>
            <h3 className="card-title">Conta segura</h3>
            <p className="mt-3 text-sm text-center">
              Use o menu lateral para navegar entre perfil, segurança e preferências sem perder o foco.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
