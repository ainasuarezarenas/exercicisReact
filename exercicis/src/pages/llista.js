import Comptador from "../Comptador/Comptador";
import Galeria from "../Galeria/Galeria";
import Acordio from "../Acordio/Acordio";
import ToggleButton from "../ToggleButton/ToggleButton";
import Carrusel from "../Carrusel/Carrusel";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "galeria", titol: "Galeria de fotos", element: <Galeria /> },
  { path: "acordio", titol: "Acordió", element: <Acordio /> },
  { path: "carrusel", titol: "Carrusel", element: <Carrusel /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
];

export default llista;
