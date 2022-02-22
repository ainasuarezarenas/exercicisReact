import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [color, setColor] = useState("red");
  const estaPremut = color !== "red";

  const toggle = () => {
    if (color === "red") setColor("lightgreen");
    else setColor("red");
  };

  return (
    <>
      <div className="mig">
        <button style={{ background: color }} onClick={toggle}>
          Toggle Me
        </button>
        <br />
        {estaPremut ? <p>Està premut</p> : <p>No està premut</p>}
      </div>
    </>
  );
}
