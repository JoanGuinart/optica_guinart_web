import Image from "next/image";
import chicoGafasSol from "../img/chico-gafas-sol-hipster.jpg";
import chicaGafasGraduadas from "../img/mujer-gafas-graduadas.jpg";
import filtroLuzAzul from "../img/gafas-filtro-luz.webp";
import lentillas from "../img/lentillas-oferta-2.jpg";
import lentillasCosmeticas from "../img/lentillas-cosmeticas.jpeg";
import audifonos from "../img/audifonos.jpg";
import testAuditivo from "../img/test-auditivo.jpg";
import examenVisual from "../img/examen-visual.jpg";
import presionOcular from "../img/presion-ocular.webp";
import Link from "next/link";

const categories = [
  {
    image: chicaGafasGraduadas,
    alt: "Gafas Graduadas",
    title: "Ulleres graduades",
    description:
      `Troba una àmplia selecció d'ulleres graduades de les millors marques.`,
    href: "/gafas",
  },
  {
    image: chicoGafasSol,
    alt: "Gafas de Sol",
    title: "Ulleres de Sol",
    description:
      `Protegeix els teus ulls del sol amb les nostres ulleres de sol d'última moda.`,
    href: "/gafas",
  },
  {
    image: filtroLuzAzul,
    alt: "Gafas con Filtro de Luz Azul",
    title: "Ulleres amb filtre blau",
    description:
      "Redueix la fatiga visual amb les nostres ulleres que filtren la llum blava.",
    href: "/gafas",
  },
  {
    image: lentillas,
    alt: "Lentillas",
    title: "Lentilles",
    description:
      "Descobreix les nostres lents de contacte de qualitat per a una visió còmoda i nítida.",
    href: "/lentillas",
  },
  {
    image: lentillasCosmeticas,
    alt: "Lentillas Cosméticas",
    title: "Lentilles Cosmètiques",
    description:
      "Afegeix un toc de color als teus ulls amb les nostres lents de contacte cosmètiques.",
    href: "/lentillas",
  },
  {
    image: audifonos,
    alt: "Audífonos",
    title: "Audiòfons",
    description:
      `Millora la teva audició amb els nostres audiòfons d'alta tecnologia.`,
    href: "/audifonos",
  },
  {
    image: testAuditivo,
    alt: "Test Auditivo",
    title: "Test Auditiu",
    description: "Realitza un examen auditiu complet amb els nostres experts.",
    href: "/servicios",
  },
  {
    image: examenVisual,
    alt: "Test Ocular",
    title: "Test Ocular",
    description:
      `Obtingues un diagnòstic precís de la teva visió amb els nostres test oculars d'última generació.`,
    href: "/servicios",
  },
  {
    image: presionOcular,
    alt: "Test de Presión Ocular",
    title: "Test de Presió Ocular",
    description:
      "Mesura la pressió intraocular per prevenir malalties oculars.",
    href: "/servicios",
  },
];

const OpticaGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
      {categories.map((category, index) => (
        <Link href={category.href} key={index}>
          <div className="max-w-xs">
            <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
              <Image
                className="h-full w-full rounded-md object-cover"
                src={category.image}
                alt={category.alt}
              />
            </div>
            <h3 className="text-xl font-bold mt-4">{category.title}</h3>
            <p className="mt-2 text-gray-700">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OpticaGrid;
