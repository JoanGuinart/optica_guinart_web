"use client";
import Image from "next/image";
import React from "react";
import image from "../img/gafas-sol-mujer.jpg";
import { RevealWrapper } from "next-reveal";

const GafasSolComponentSection = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-4/6 w-100">
        <RevealWrapper origin="left" distance="500px">
          <Image
            src={image}
            alt="image"
            className="max-h-[450px] object-cover lg:rounded-br-xl"
          />
        </RevealWrapper>
      </div>
      <div className="lg:w-2/6 w-100 p-5 text-justify">
        <h2 className="text-2xl font-bold text-center">Ulleres de sol</h2>
        <br />
        <p className="lg:text-2xl text-xl font-light">
          ¡Descobreix el paradís de les ulleres de sol a Optica Guinart!
          <br />
          <br />
          Amb les millors marques, últimes tendéncies i els millors preus
          garantits!
          <br />
          <br />
          ¡Fes una declaració de moda i protegeix els teus ulls amb nosaltres
          avui mateix!
        </p>
      </div>
    </div>
  );
};

export default GafasSolComponentSection;
