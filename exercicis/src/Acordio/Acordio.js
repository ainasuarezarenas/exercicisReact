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
    <h1>Títol 1</h1>,
    <h1>Títol 2</h1>,
    <h1>Títol 3</h1>,
    <h1>Títol 4</h1>,
    <h1>Títol 5</h1>,
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
      <div className="caixa">
        <h1 onClick={() => show(0)}>{titol[0]}</h1>
        <p className={titolclicat === 0 ? desplegar : "plegat"}>{text[0]}</p>
      </div>
    </>
  );
}

export default Acordio;
