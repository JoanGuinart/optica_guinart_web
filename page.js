import GafasGrid from "./src/components/OpticaGrid";
import OfertaAntireflejante from "./src/components/OfertaAntireflejante";
import OfertaLentillas from "./src/components/OfertaLentillas";
import OfertaProgresivos from "./src/components/OfertaProgresivos";
import OpinionesGoogleWidget from "./src/components/OpinionesGoogle";
import Carousel from "./src/helpers/Carousel";

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
      <OpinionesGoogleWidget />
    </main>
  );
}
