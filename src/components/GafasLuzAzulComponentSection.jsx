"use client";
import React from "react";
import Image from "next/image";
import image from "../img/gafas-filtro-luz.webp";
import { RevealWrapper } from "next-reveal";

const GafasLuzAzulComponentSection = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-4/6 w-100">
        <RevealWrapper origin="left" distance="500px">
          <Image
            src={image}
            alt="image"
            className="max-h-[450px] object-cover lg:rounded-r-xl"
          />
        </RevealWrapper>
      </div>
      <div className="lg:w-2/6 w-100 p-5 text-justify">
        <h2 className="text-2xl font-bold text-center">
          Ulleres amb filtre de llum blava
        </h2>
        <br />
        <br />
        <p className="lg:text-2xl text-xl font-light">
          Troba les teves desde 20€
          <br />
          <br />
          Pots demanar vidres amb filtre de llum blava fins i tot a les ulleres
          graduades del dia a dia
          <br />
          <br />
          ¡Destaca amb les nostres ulleres avui mateix!
        </p>
      </div>
    </div>
  );
};

export default GafasLuzAzulComponentSection;
