import { useState } from "react";
import "./Carrusel.css";

function Carrusel() {
  const carrusel = [
    "https://www.ansalatina.com/webimages/al_news_476x/2021/4/19/1798786acbfa9f90c8d92266fddbda42.jpg",
    "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2019/01/21093537/nutrias-valencia.jpg",
    "https://t2.ev.ltmcdn.com/es/posts/2/7/0/las_nutrias_son_animales_domesticos_3072_0_600.jpg",
    "https://cdn.ondavasca.com/nutria.jpg",
  ];

  const [imatgeclicada, setImatgeclicada] = useState(0);

  const passar = (canvi) => {
    if (imatgeclicada === 3) {
      setImatgeclicada(0);
    }
    if (imatgeclicada === 0) {
      setImatgeclicada(3);
    } else {
      setImatgeclicada(imatgeclicada + canvi);
    }
  };

  return (
    <>
      <h1>Carrusel</h1>
      <div className="caixa">
        <button onClick={() => passar(0 - 1)}> ← </button>

        <img
          className={imatgeclicada === 0 ? "mostra" : "amaga"}
          src={carrusel[0]}
          alt="imatge 1"
        />
        <img
          className={imatgeclicada === 1 ? "mostra" : "amaga"}
          src={carrusel[1]}
          alt="imatge 2"
        />
        <img
          className={imatgeclicada === 2 ? "mostra" : "amaga"}
          src={carrusel[2]}
          alt="imatge 3"
        />
        <img
          className={imatgeclicada === 3 ? "mostra" : "amaga"}
          src={carrusel[3]}
          alt="imatge 4"
        />
        <button onClick={() => passar(0 + 1)}> → </button>
      </div>
      <div>
        <button type="circle" onClick={() => carrusel[0]}>
          ●
        </button>
        <button type="circle">●</button>
        <button type="circle">○</button>
        <button type="circle">●</button>
      </div>
    </>
  );
}

export default Carrusel;
