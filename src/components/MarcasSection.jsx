import React from "react";
import "../app/carousel_infinito.css";
import Image from "next/image";
import silhouette from "../img/silhouette.svg";
import rayban from "../img/ray-ban.svg";
import poloRalphLauren from "../img/polo-ralph-lauren.svg";
import lacoste from "../img/lacoste-logo.svg";
import moschinno from "../img/moschino-occhiali.png";
import tous from "../img/tous.svg";
import furla from "../img/furla-logo.svg";
import police from "../img/police.svg";
import vogue from "../img/vogue.svg";
import carolinaHerrera from "../img/carolina-herrera.svg";

const marcas = [
  { nombre: "Silhouette", imagen: silhouette },
  { nombre: "Ray-Ban", imagen: rayban },
  { nombre: "Polo Ralph Lauren", imagen: poloRalphLauren },
  { nombre: "Lacoste", imagen: lacoste },
  { nombre: "Tous", imagen: tous },
  { nombre: "Police", imagen: police },
  { nombre: "Furla", imagen: furla },
  { nombre: "Vogue", imagen: vogue },
  { nombre: "Carolina Herrera", imagen: carolinaHerrera },
  { nombre: "Moschino Ochitali", imagen: moschinno },
  /* Repetimos para hacer efecto infinito */
  { nombre: "Silhouette", imagen: silhouette },
  { nombre: "Ray-Ban", imagen: rayban },
  { nombre: "Polo Ralph Lauren", imagen: poloRalphLauren },
  { nombre: "Lacoste", imagen: lacoste },
  { nombre: "Tous", imagen: tous },
  { nombre: "Police", imagen: police },
  { nombre: "Furla", imagen: furla },
  { nombre: "Vogue", imagen: vogue },
  { nombre: "Carolina Herrera", imagen: carolinaHerrera },
  { nombre: "Moschino Ochitali", imagen: moschinno },
];

const MarcasSection = () => {
  return (
    <div className="slider">
      <div
        className="slide-track"
        style={{ animation: `scroll 25s linear infinite` }}
      >
        {marcas.map((marca, index) => (
          <div className="slide flex" key={index}>
            <Image
              src={marca.imagen}
              alt={marca.nombre}
              className="w-full flex justify-center items-center px-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarcasSection;
