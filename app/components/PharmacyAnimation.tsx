"use client";

import React from "react";
import styles from "./PharmacyAnimation.module.css";

export const PharmacyAnimation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/JiFAyHPaMe0"
          title="Exemplo real de atendimento em farmácia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
      <p className={styles.videoCaption}>
        Vídeo real de atendimento em farmácia — analisa o cumprimento de protocolo e a qualidade do serviço.
      </p>
    </div>
  );
};
