"use client";
import Image from "next/image";
import React from "react";
import image from "../img/gafas-graduadas-hombre.jpg";
import { RevealWrapper } from "next-reveal";

const GafasSolComponentSection = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-5">
      <div className="lg:w-2/6 w-100 p-5 text-justify order-2 lg:order-1">
        <h2 className="text-2xl font-bold text-center">Ulleres graduades</h2>
        <br />
        <p className="lg:text-2xl text-xl font-light">
          ¡Viu amb claredat i estil a Optica Guinart!
          <br />
          <br />
          Descobreix les nostres ulleres graduades, on la moda s'uneix amb la visió perfecte
          Amb les últimes tendències i la millor qualitat!
          <br />
          <br />
          ¡Ves més enllà de la visió amb nosaltres avui mateix!
        </p>
      </div>
      <div className="lg:w-4/6 w-100 order-1 lg:order-2">
        <RevealWrapper origin="bottom" distance="500px">
          <Image
            src={image}
            alt="image"
            className="max-h-[450px] object-cover lg:rounded-lg"
          />
        </RevealWrapper>
      </div>
    </div>
  );
};

export default GafasSolComponentSection;
