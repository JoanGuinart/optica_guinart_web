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
import Whatsapp from "../img/whatsapp.svg";

const MarcasSection = () => {
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
  return (
    <div className="py-5">
     <div className="flex flex-col lg:flex-row justify-center items-center my-3 px-2">
      <a
        href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
        target="_blank"
        className="inline-flex items-center justify-center p-2 bg-[#A2DED0] rounded-md hover:bg-green-500 transition duration-300"
      >
        <Image
          className="hover:invert-50 transition duration-300"
          src={Whatsapp}
          alt="Whatsapp-icon"
          width={24}
          height={24}
        />
      </a>
      <p className="text-center text-lg text-black lg:ml-3">
        Demanens la marca, model i color que vulguis!
      </p>
    </div>
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
    </div>
  );
};

export default MarcasSection;
