import React from "react";
import MujerAmarillo from "../img/mujer-amarillo.jpg";
import Image from "next/image";

const OfertaProgresivos = () => {
  return (
    <div className="bg-[#fbdb5d] h-80 w-full flex flex-row justify-around items-center relative">
      <div className="flex items-center">
        <Image
          src={MujerAmarillo}
          alt="antireflejante"
          className="sm:h-80 h-full w-full sm::static absolute left-0 sm:w-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 text-2xl justify-center items-center text-center uppercase pl-20 text-yellow-950 z-10">
        <div className="flex flex-col w-full font-extrabold">
          <span className="md:block hidden">¡Duplica tu estilo, sin costo adicional! </span>
          <span className="md:static absolute top-20 right-3">progresivos de <br className="sm:hidden"/> alta gama</span>
        </div>
        <div>
          <span className="p-3 w-fit text-center lg:text-8xl text-6xl font-extrabold rounded-md lg:mt-3 lg:static absolute bottom-10 right-5">
            2x1
          </span>
        </div>
      </div>
    </div>
  );
};
/* 
 <div className="bg-[#aae1e8] h-80 w-full flex flex-row justify-around items-center relative">
      <div className="flex flex-col gap-10 lg:text-2xl text-lg justify-center items-center text-center uppercase pl-20 text-teal-600 z-10">
        <div className="flex lg:w-full font-semibold">
          <span className="hidden lg:block">Sin compromisos</span>
          <span className="lg:static absolute top-5 left-3">
            un mes de lentillas
          </span>
        </div>
        <div>
          <span className="p-3 w-fit text-center lg:text-8xl text-6xl font-extrabold rounded-md lg:mt-3 lg:static absolute top-10 left-3">
            gratis
          </span>
        </div>
        <span className="lg:text-base text-xs lg:static right-1/2 absolute bottom-0">
          Lentillas diarias desde menos de 1€ al día
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
*/

export default OfertaProgresivos;
