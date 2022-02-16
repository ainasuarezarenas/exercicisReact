import { useState } from "react";
import "./Galeria.css";
import * as React from "react";

function Galeria() {
  const galeria = [
    "https://www.ansalatina.com/webimages/al_news_476x/2021/4/19/1798786acbfa9f90c8d92266fddbda42.jpg",
    "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2019/01/21093537/nutrias-valencia.jpg",
    "https://t2.ev.ltmcdn.com/es/posts/2/7/0/las_nutrias_son_animales_domesticos_3072_0_600.jpg",
    "https://cdn.ondavasca.com/nutria.jpg",
  ];

  const [tamany, setTamany] = useState("imgPetita");
  const [imatgeclicada, setImatgeclicada] = useState(0);

  const ampliar = (imatgeclic) => {
    setImatgeclicada(imatgeclic);

    if (tamany === "imgPetita") {
      setTamany("imgGran");
    } else {
      setTamany("imgPetita");
    }
  };

  return (
    <>
      <h1>Galeria de nutries</h1>
      <div className="grid">
        <img
          className={imatgeclicada === 0 ? tamany : "imgPetita"}
          src={galeria[0]}
          alt="imatge 1"
          onClick={() => ampliar(0)}
        />
        <img
          className={imatgeclicada === 1 ? tamany : "imgPetita"}
          src={galeria[1]}
          alt="imatge 2"
          onClick={() => ampliar(1)}
        />
        <img
          className={imatgeclicada === 2 ? tamany : "imgPetita"}
          src={galeria[2]}
          alt="imatge 3"
          onClick={() => ampliar(2)}
        />
        <img
          className={imatgeclicada === 3 ? tamany : "imgPetita"}
          src={galeria[3]}
          alt="imatge 4"
          onClick={() => ampliar(3)}
        />
      </div>
    </>
  );
}

export default Galeria;
