import { useState } from "react";
import "./Acordio.css";

function Acordio() {
  const text = [
    <p>contingut 1</p>,
    <p>contingut 2</p>,
    <p>contingut 3</p>,
    <p>contingut 4</p>,
    <p>contingut 5</p>,
  ];

  const titol = [
    <h1 className="titolss">Títol 1</h1>,
    <h1 className="titolss">Títol 2</h1>,
    <h1 className="titolss">Títol 3</h1>,
    <h1 className="titolss">Títol 4</h1>,
    <h1 className="titolss">Títol 5</h1>,
  ];

  const [desplegar, setDesplegar] = useState("plegat");
  const [titolclicat, setTitolclicat] = useState(0);

  const show = (titolclic) => {
    setTitolclicat(titolclic);

    if (desplegar === "plegat") {
      setDesplegar("desplegat");
    } else {
      setDesplegar("plegat");
    }
  };

  return (
    <>
      <h2>Acordió</h2>
      <div className="caixaAcordio">
        <div onClick={() => show(0)}>{titol[0]}</div>

        <div className={titolclicat === 0 ? desplegar : "plegat"}>
          {text[0]}
        </div>

        <div onClick={() => show(1)}>{titol[1]}</div>

        <div className={titolclicat === 1 ? desplegar : "plegat"}>
          {text[1]}
        </div>

        <div onClick={() => show(2)}>{titol[2]}</div>

        <div className={titolclicat === 2 ? desplegar : "plegat"}>
          {text[2]}
        </div>

        <div onClick={() => show(3)}>{titol[3]}</div>

        <div className={titolclicat === 3 ? desplegar : "plegat"}>
          {text[3]}
        </div>

        <div onClick={() => show(4)}>{titol[4]}</div>

        <div className={titolclicat === 4 ? desplegar : "plegat"}>
          {text[4]}
        </div>
        <br />
      </div>
    </>
  );
}

export default Acordio;
