import React from "react";
import mujerHorizontal from "../img/lentillas-solas.webp";
import mujerVertical from "../img/mujer-v-left.webp";
import whatsapp from "../img/whatsapp.svg";
import Image from "next/image";
import "../app/globals.css";

export const LentillasHeader = () => {
  return (
    <div className="flex justify-center w-full h-[800px] bg-slate-200">
      <div className="lg:w-2/6 w-full flex flex-col">
        <Image
          className="w-full h-full object-cover object-left customMask"
          src={mujerVertical}
          alt="ojos-azules"
        />
        <div className="w-full h-52 bg-[#cbd9c7] lg:hidden block">
          <div className="w-full flex flex-col justify-center px-3 pt-5 text-balance">
            <h2 className="text-xl text-center">
              Descobreix la nostra gran oferta en lents de contacte!
            </h2>
            <span className="w-full flex text-center justify-center">
              A Òptica Guinart, t&apos;oferim lents de contacte de la millor qualitat
              a preus incomparables.
            </span>

            <div className="flex flex-col lg:flex-row justify-center items-center my-3 px-2">
              <a
                href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
                target="_blank"
                className="inline-flex items-center justify-center p-2 lg:bg-[#A2DED0] bg-green-400 rounded-md hover:bg-green-500 transition duration-300"
              >
                <Image
                  className="hover:invert-50 transition duration-300"
                  src={whatsapp}
                  alt="Whatsapp-icon"
                  width={20}
                  height={20}
                />
              </a>
              <p className="text-center text-black lg:ml-3">
                Contacta amb nosaltres!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/6 lg:block hidden h-full">
        <div className="h-4/6 w-full">
          <Image
            className="w-full h-full object-cover customMaskTwo"
            src={mujerHorizontal}
            alt="ojos-azules"
          />
        </div>
        <div className="h-2/6 w-full flex flex-col justify-center px-3 pt-5 text-balance">
          <h2 className="text-xl">
            Descobreix la nostra gran oferta en lents de contacte!
          </h2>
          <span className="w-full flex justify-center">
            A Òptica Guinart, estem emocionats d&apos;oferir-te una àmplia gamma
            de lents de contacte de la millor qualitat a preus incomparables.
            <br />
            Busques lents de contacte graduades per corregir la teva visió?
            <br />O potser prefereixes lentilles progressives per a una visió
            clara a totes les distàncies?
            <br />
            Sigui quina sigui la teva necessitat, tenim el que busques!!
          </span>

          <div className="flex flex-col lg:flex-row justify-center items-center my-3 px-2">
            <a
              href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
              target="_blank"
              className="inline-flex items-center justify-center p-2 bg-[#A2DED0] rounded-md hover:bg-green-500 transition duration-300"
            >
              <Image
                className="hover:invert-50 transition duration-300"
                src={whatsapp}
                alt="Whatsapp-icon"
                width={24}
                height={24}
              />
            </a>
            <p className="text-center text-black lg:ml-3">
              ¡Contacta amb nosaltres!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
