"use client";
import Image from "next/image";
import React from "react";
import image from "../img/gafas-graduadas-hombre.jpg";
import { RevealWrapper } from "next-reveal";

const GafasSolComponentSection = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-5">
      <div className="lg:w-2/6 w-100 p-5 text-justify order-2 lg:order-1">
        <h2 className="text-2xl font-bold text-center">Gafas graduadas!</h2>
        <br />
        <p className="lg:text-2xl text-xl font-light">
          ¡Vive con claridad y estilo en Optica Guinart!
          <br />
          <br />
          Descubre nuestras gafas graduadas, donde la moda se une con la visión
          perfecta. Con las últimas tendencias y la mejor calidad, encontrarás
          el par ideal que refleje tu estilo único
          <br />
          <br />
          ¡Ve más allá de la visión con nosotros hoy mismo!
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
