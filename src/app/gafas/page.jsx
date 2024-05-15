import GafasSolComponentSection from "@/components/GafasSolComponentSection";
import GafasGraduadasComponentSection from "@/components/GafasGraduadasComponentSection";
import OpinionesGoogle from "@/components/OpinionesGoogle";

const Ulleres = () => {
  return (
    <div className="flex min-h-screen flex-col py-20 bg-[#f1fffc] text-black">
      <GafasSolComponentSection />
      <GafasGraduadasComponentSection />
      <OpinionesGoogle/>
    </div>
  );
};

export default Ulleres;
