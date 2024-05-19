import GafasGrid from "@/components/OpticaGrid";
import OfertaAntireflejante from "@/components/OfertaAntireflejante";
import OfertaLentillas from "@/components/OfertaLentillas";
import OfertaProgresivos from "@/components/OfertaProgresivos";
import OpinionesGoogleWidget from "@/components/OpinionesGoogle";
import Carousel from "@/helpers/Carousel";
import HorariosOptica from "@/components/HorariosOptica";

export default function Home() {
  const items = [
    <OfertaAntireflejante key="0" />,
    <OfertaLentillas key="1" />,
    <OfertaProgresivos key="2" />,
  ];

  return (
    <main className="flex flex-col min-h-screen pt-20 pb-10 bg-white">
      <Carousel items={items} />
      <GafasGrid />
      <HorariosOptica/>
      <OpinionesGoogleWidget />
    </main>
  );
}
