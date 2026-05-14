"use client";

import React, { useState, useEffect } from "react";
import styles from "./PharmacyAnimation.module.css";

type Step = "idle" | "enter" | "greeting" | "recommendation" | "noFlyer" | "conclusion";

export const PharmacyAnimation: React.FC = () => {
  const [step, setStep] = useState<Step>("idle");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 0 && progress < 20) setStep("enter");
    else if (progress >= 20 && progress < 50) setStep("greeting");
    else if (progress >= 50 && progress < 80) setStep("noFlyer");
    else if (progress >= 80 && progress < 100) setStep("conclusion");
    else setStep("idle");
  }, [progress]);

  const handlePlay = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setProgress(0);
    setIsPlaying(false);
    setStep("idle");
  };

  return (
    <div className={styles.container}>
      <div className={styles.animationBox}>
        {/* Pharmacy Background */}
        <div className={styles.pharmacy}>
          <div className={styles.counter}>
            <span className={styles.counterText}>Balcão da Farmácia</span>
          </div>

          {/* Pharmacist */}
          <div className={styles.pharmacist}>
            <div className={styles.pharmacistHead} />
            <div className={styles.pharmacistBody} />
            <div className={styles.pharmacistArms} />
          </div>

          {/* Customer */}
          <div
            className={`${styles.customer} ${
              step === "enter" ? styles.entering : step === "idle" ? styles.hidden : styles.present
            }`}
          >
            <div className={styles.customerHead} />
            <div className={styles.customerBody} />
          </div>

          {/* Speech Bubbles */}
          {step === "greeting" && (
            <div className={styles.speechBubble + " " + styles.pharmacistSpeech}>
              <p>Olá! Qual é o seu problema?</p>
            </div>
          )}

          {step === "recommendation" && (
            <div className={styles.speechBubble + " " + styles.customerSpeech}>
              <p>Tenho dor de cabeça...</p>
            </div>
          )}

          {step === "noFlyer" && (
            <>
              <div className={styles.speechBubble + " " + styles.pharmacistSpeech}>
                <p>Recomendo este medicamento. Toma 1 comprimido a cada 6 horas.</p>
              </div>
              <div className={styles.xMark}>❌</div>
              <div className={styles.warningText}>Nenhum folheto entregue</div>
            </>
          )}

          {step === "conclusion" && (
            <div className={styles.conclusionBox}>
              <p className={styles.conclusionTitle}>Não cumpriu o protocolo</p>
              <p className={styles.conclusionText}>
                A colaboradora ofereceu medicamento e explicou o modo de uso, <strong>MAS NÃO entregou folheto de promoções</strong>.
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className={styles.timeLabel}>{Math.floor(progress / 10)}s</span>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className={styles.button}
        >
          ▶️ Reproduzir Animação
        </button>
        <button
          onClick={handleReset}
          className={styles.button}
        >
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
};
