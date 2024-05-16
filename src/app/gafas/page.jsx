import GafasSolComponentSection from "@/components/GafasSolComponentSection";
import GafasGraduadasComponentSection from "@/components/GafasGraduadasComponentSection";
import OpinionesGoogle from "@/components/OpinionesGoogle";
import dynamic from "next/dynamic";

const MarcasSection = dynamic(() => import("@/components/MarcasSection"), { ssr: false });

const Ulleres = () => {
  return (
    <div className="flex min-h-screen flex-col py-20 bg-[#f1fffc] text-black">
      <GafasSolComponentSection />
      <GafasGraduadasComponentSection />
      <MarcasSection />
      <OpinionesGoogle />
    </div>
  );
};

export default Ulleres;
