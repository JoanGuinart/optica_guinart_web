import React from "react";
import Lentillas from "../img/lentillas-oferta-3.jpg";
import Image from "next/image";

const OfertaLentillas = () => {
  return (
    <div className="bg-[#aae1e8] h-80 w-full flex flex-row justify-around items-center relative">
      <div className="flex flex-col gap-10 lg:text-2xl text-lg justify-center items-center text-center uppercase pl-20 text-teal-700 z-10">
        <div className="flex flex-col justify-center lg:w-full font-semibold">
          <span className="hidden lg:flex text-start">Sense compromisos</span>
          <span className="lg:static lg:left-0 text-start absolute top-8 left-3">
            primer mes de lentilles
          </span>
        </div>
        <div>
          <span className="p-3 w-fit text-center lg:text-8xl text-6xl font-extrabold rounded-md lg:mt-3 lg:static absolute top-14 left-3">
            gratis
          </span>
        </div>
        <span className="lg:text-base text-xs lg:static right-1/2 absolute bottom-0">
          Lentilles diaries desde menys de 1€ al dia
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src={Lentillas}
          alt="antireflejante"
          className="lg:h-80 h-full w-full lg:static absolute left-0 lg:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default OfertaLentillas;
