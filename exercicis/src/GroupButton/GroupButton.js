import "./GroupButton.css";
import { useState } from "react";

export default function GroupButton() {
  const [display, setDisplay] = useState("cap");
  return (
    <>
      <button> A </button>
      <button> B </button>
      <button> C </button>
      <div className="display">{display}</div>
    </>
  );
}
