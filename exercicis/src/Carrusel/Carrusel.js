import { useState } from "react";
import "./Carrusel.css";
const carrusel = [
  "https://www.ansalatina.com/webimages/al_news_476x/2021/4/19/1798786acbfa9f90c8d92266fddbda42.jpg",
  "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2019/01/21093537/nutrias-valencia.jpg",
  "https://t2.ev.ltmcdn.com/es/posts/2/7/0/las_nutrias_son_animales_domesticos_3072_0_600.jpg",
  "https://cdn.ondavasca.com/nutria.jpg",
];

function Carrusel() {
  const [imatgeclicada, setImatgeclicada] = useState(0);

  const passar = (canvi) => {
    let n = imatgeclicada + canvi;
    let l = carrusel.length;
    n = (n + l) % l;
    setImatgeclicada(n);
  };

  return (
    <>
      <h1>Carrusel {imatgeclicada}</h1>
      <div className="caixa">
        <button onClick={() => passar(0 - 1)}> ← </button>

        <img alt="carrussel" src={carrusel[imatgeclicada]}></img>
        <br />

        <button onClick={() => passar(0 + 1)}> → </button>
      </div>

      {carrusel.map((url, index) => (
        <button key={url} onClick={() => setImatgeclicada(index)}>
          {imatgeclicada === index ? "○" : "●"}
        </button>
      ))}
    </>
  );
}

export default Carrusel;
