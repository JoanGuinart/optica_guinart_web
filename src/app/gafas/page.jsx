import GafasSolComponentSection from "@/components/GafasSolComponentSection";
import GafasGraduadasComponentSection from "@/components/GafasGraduadasComponentSection";
import OpinionesGoogle from "@/components/OpinionesGoogle";
import dynamic from "next/dynamic";
import GafasLuzAzulComponentSection from "@/components/GafasLuzAzulComponentSection";

const MarcasSection = dynamic(() => import("@/components/MarcasSection"), {
  ssr: false,
});

const Ulleres = () => {
  return (
    <div className="flex flex-col py-20 bg-[#f1fffc] text-black">
      <GafasSolComponentSection />
      <GafasGraduadasComponentSection />
      <MarcasSection />
      <GafasLuzAzulComponentSection />
      <OpinionesGoogle />
    </div>
  );
};

export default Ulleres;
