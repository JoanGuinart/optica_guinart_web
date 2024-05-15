import React from "react";
import Dona from "../img/gafas-redondas-rosa.jpg";
import Image from "next/image";

const OfertaAntireflejante = () => {
  return (
    <div className="bg-[#fab9c1] h-80 w-full flex justify-between items-center">
      <div className="flex flex-col gap-10 lg:text-3xl text-xl justify-center items-center text-center uppercase pl-20 text-[#411418] z-10">
        <div className="flex lg:w-full font-extrabold md:static absolute right-1 top-5">
          <span>Montura <br /><span className="text-5xl">+</span><br /> Lentes <br className="md:hidden"/> antirreflejantes</span>
        </div>
        <div>
          <span className="p-3 w-fit text-center md:text-8xl text-6xl font-extrabold rounded-md md:mt-3 md:static absolute right-3">
            75€
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          src={Dona}
          alt="antireflejante"
          className="md:h-80 h-full w-full md:static absolute left-0 md:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default OfertaAntireflejante;
