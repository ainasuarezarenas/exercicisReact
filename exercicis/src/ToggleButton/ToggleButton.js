import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [color, setColor] = useState("red");
  const estaPremut = color !== "red";

  const toggle = () => {
    if (color === "red") setColor("cyan");
    else setColor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>
      {estaPremut ? <p>Està premut</p> : <p>No està premut</p>}
    </>
  );
}
