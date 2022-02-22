l'arxiu s'ha de dir App.js

import Galeria from "./Galeria/Galeria";
import Comptador from "./Comptador/Comptador";
import "./App.css";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";

function App() {
  return (
<div className="App">
  {/* < Galeria /> /*}
      {/* <Comptador /> */}
  {/* <Acordio /> */}
  <Carrusel />
</div>;
  );
}

export default App;
