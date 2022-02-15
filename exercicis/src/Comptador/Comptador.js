import { useState } from "react";
import "./Comptador.css";

function Comptador() {
  const [display, setDisplay] = useState(0);

  const increment = () => {
    if (display + 1 > 10) {
      alert("No pots!");
    } else {
      setDisplay((n) => n + 1);
    }
  };

  const decrement = () => {
    if (display - 1 < 0) {
      alert("No pots!");
    } else {
      setDisplay((n) => n - 1);
    }
  };

  const increment5 = () => {
    if (display + 5 > 10) {
      alert("No pots!");
    } else {
      setDisplay((n) => n + 5);
    }
  };

  const clear = () => setDisplay(0);

  return (
    <div className="caixeta">
      <div className="display">{display}</div>
      <div className="botons">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increment5}>+5</button>
      </div>
      <div className="clear">
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default Comptador;
