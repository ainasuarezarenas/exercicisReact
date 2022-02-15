import { useState } from "react";
import "./Galeria.css";
import * as React from "react";

function Galeria() {
  const galeria = [
    "https://www.ansalatina.com/webimages/al_news_476x/2021/4/19/1798786acbfa9f90c8d92266fddbda42.jpg",
    "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2019/01/21093537/nutrias-valencia.jpg",
    "http://via.placeholder.com/600x500/",
    "http://via.placeholder.com/600x800/",
  ];

  return (
    <div>
      <img src={galeria[0]} />
      <img src={galeria[1]} />
      <img src={galeria[2]} />
      <img src={galeria[3]} />
    </div>
  );
}

export default Galeria;
