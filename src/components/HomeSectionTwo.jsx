/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Noia1 from "../img/noia_1.png";
import Noia2 from "../img/noia_2.png";
import Noia3 from "../img/noia_3.png";

export default function HomeSectionTwo() {
  return (
    <div className="w-full mx-auto bottom-20">
      <div className="bg-[#217022] w-2/3 p-8 rounded-lg text-white absolute text-4xl z-10">
        Les ulleres estarán llestes en tan sols 3 pasos
      </div>
      <div className="w-full flex justify-between items-center mt-[-30px] relative">
        <h1 className="w-3/5 text-4xl">
          Fem la prova ocular per a saber les dioptries
        </h1>
        <Image
          className="w-9/10 static float-right z-0"
          src={Noia1}
          alt="imatgeNoia-1"
        />
      </div>
      <div className="w-full flex justify-between items-center mt-[-30px] relative">
        <Image
          className="w-9/10 static float-left"
          src={Noia2}
          alt="imatgeNoia-2"
        />
        <h1 className="w-3/5 text-4xl">
          Escull la muntura que més t'agradi i s'adapti al teu estil de vida
        </h1>
      </div>
      <div className="w-full flex justify-between items-center mt-[-30px] relative">
        <h1 className="w-3/5 font-bold text-4xl">
          Vine a buscar-les a la botiga una vegada ja estiguin muntades
        </h1>
        <Image
          className="w-9/10 static float-right"
          src={Noia3}
          alt="imatgeNoia-3"
        />
      </div>
    </div>
  );
}
