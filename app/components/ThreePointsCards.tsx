/*
 * DESCRIÇÃO DO FICHEIRO: Componente que exibe os 3 pontos principais em cards animados.
 */

export default function ThreePointsCards() {
  const points = [
    "Sem horários",
    "Escolhes as marcas",
    "Rendimento extra"
  ];

  return (
    <div className="flex w-full justify-center gap-6 flex-wrap sm:flex-nowrap">
      {points.map((point, index) => (
        <div key={index} className="card">
          <div className="blob"></div>
          <div className="bg">
            <p className="text-center font-bold text-sm sm:text-base">
              {point}
            </p>
          </div>
        </div>
      ))}

      <style jsx>{`
        /* From Uiverse.io by dylanharriscameron */
        .card {
          position: relative;
          width: 200px;
          height: 250px;
          border-radius: 14px;
          z-index: 1111;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
        }

        .bg {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 190px;
          height: 240px;
          z-index: 2;
          background: rgba(255, 255, 255, .95);
          backdrop-filter: blur(24px);
          border-radius: 10px;
          overflow: hidden;
          outline: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .blob {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #8f0403;
          opacity: 1;
          filter: blur(12px);
          animation: blob-bounce 5s infinite ease;
        }

        @keyframes blob-bounce {
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .card {
            width: 160px;
            height: 200px;
          }

          .bg {
            width: 150px;
            height: 190px;
            top: 5px;
            left: 5px;
          }

          .blob {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}
