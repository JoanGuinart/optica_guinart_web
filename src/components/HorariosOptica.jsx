/* eslint-disable @next/next/no-img-element */
import React from "react";
import telephone from "../img/telephone.png";
import mail from "../img/mail.png";
import Image from "next/image";
import mapaOpticaImage from "../img/mapa-optica-image.png";

const HorariosOptica = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full mt-10 lg:px-20 px-5 pb-10">
      <div className="w-full flex flex-col justify-start shadow-sm border-[1px] pb-2">
        <header className="bg-[#2b2b2b] text-white text-center w-100 p-3">
          - Optica Guinart -
        </header>
        <div className="flex justify-start px-5 flex-col font-medium">
          <span className="py-5">
            C/ Gran de Sant Andreu 308
            <br />
            Sant Andreu, 08030 Barcelona
          </span>
          <span className="mt-4 font-extrabold text-xl py-3">Horarios:</span>
          <section className="flex flex-row w-100 px-2 mb-1 items-center">
            <div className="w-1/2 p-3 text-center bg-gray-200">LUN - VIE</div>
            <div className="w-1/2 text-center">
              9:30h - 13:30h
              <br />
              17:00h – 20:30h
            </div>
          </section>
          {/*  */}
          <section className="flex flex-row w-100 px-2 mb-1">
            <div className="w-1/2 p-3 text-center bg-gray-200">SAB</div>
            <div className="w-1/2 p-3 text-center">10:00h – 13:30h</div>
          </section>
          {/*  */}
          <section className="flex flex-row w-100 px-2">
            <div className="w-1/2 p-3 text-center bg-gray-200">DOM</div>
            <div className="w-1/2 p-3 text-center">Cerrado</div>
          </section>
          <span className="mt-5 px-2">
            <a
              href="mailto:opticaguinartsantandreu@gmail.com"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <Image className="w-4 h-4" src={mail} alt="email-icono" />
              <span>opticaguinartsantandreu@gmail.com</span>
            </a>
          </span>
          <span className="mt-3 px-2">
            <a
              href="tel:+34682502960"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <Image className="w-4 h-4" src={telephone} alt="telefono-icono" />
              <span>+34 682502960</span>
            </a>
          </span>
        </div>
      </div>
      {/* segon recuadre */}
      <div className="w-full flex justify-center items-center">
        <a
          href="https://www.google.com/maps/dir//C%2F+Gran+de+Sant+Andreu,+308,+Sant+Andreu,+08030+Barcelona/@41.4370855,2.1072775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!2m2!1d2.1896783!2d41.4371149?entry=ttu"
          target="_blank"
        >
          <Image
            src={mapaOpticaImage}
            alt="mapa-optica"
            className="w-full rounded-xl"
          />
        </a>
      </div>
    </div>
  );
};

export default HorariosOptica;
