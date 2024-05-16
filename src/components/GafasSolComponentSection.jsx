"use client";
import Image from "next/image";
import React from "react";
import image from "../img/gafas-sol-mujer.jpg";
import { RevealWrapper } from "next-reveal";

const GafasSolComponentSection = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-4/6 w-100">
        <RevealWrapper
/*           mobile={false}
 */          origin="left"
          distance="500px"
          reset={true}
        >
          <Image
            src={image}
            alt="image"
            className="max-h-[450px] object-cover lg:rounded-br-xl"
          />
        </RevealWrapper>
      </div>
      <div className="lg:w-2/6 w-100 p-5 text-justify">
        <h2 className="text-2xl font-bold text-center">Gafas de sol</h2>
        <br />
        <p className="lg:text-2xl text-xl font-light">
          ¡Descubre el paraíso de las gafas de sol en Optica Guinart!
          <br />
          <br />
          Con las mejores marcas, últimas tendencias y los precios más bajos
          garantizados!
          <br />
          <br />
          Encontrarás el estilo perfecto para destacar. ¡Haz una declaración de
          moda y protege tus ojos con nosotros hoy mismo!
        </p>
      </div>
    </div>
  );
};

export default GafasSolComponentSection;
