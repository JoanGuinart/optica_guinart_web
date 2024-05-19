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
    title: "Gafas Graduadas",
    description:
      "Encuentra una amplia selección de gafas graduadas de las mejores marcas.",
    href: "/gafas",
  },
  {
    image: chicoGafasSol,
    alt: "Gafas de Sol",
    title: "Gafas de Sol",
    description:
      "Protege tus ojos del sol con nuestras gafas de sol de última moda.",
    href: "/gafas",
  },
  {
    image: filtroLuzAzul,
    alt: "Gafas con Filtro de Luz Azul",
    title: "Gafas con Filtro de Luz Azul",
    description:
      "Reduce la fatiga visual con nuestras gafas que filtran la luz azul.",
    href: "/gafas",
  },
  {
    image: lentillas,
    alt: "Lentillas",
    title: "Lentillas",
    description:
      "Descubre nuestras lentillas de calidad para una visión cómoda y nítida.",
    href: "/lentillas",
  },
  {
    image: lentillasCosmeticas,
    alt: "Lentillas Cosméticas",
    title: "Lentillas Cosméticas",
    description:
      "Agrega un toque de color a tus ojos con nuestras lentillas cosméticas.",
    href: "/lentillas",
  },
  {
    image: audifonos,
    alt: "Audífonos",
    title: "Audífonos",
    description:
      "Mejora tu audición con nuestros audífonos de alta tecnología.",
    href: "/audifonos",
  },
  {
    image: testAuditivo,
    alt: "Test Auditivo",
    title: "Test Auditivo",
    description: "Realiza un examen auditivo completo con nuestros expertos.",
    href: "/servicios",
  },
  {
    image: examenVisual,
    alt: "Test Ocular",
    title: "Test Ocular",
    description:
      "Obtén un diagnóstico preciso de tu visión con nuestros test oculares de última generación.",
    href: "/servicios",
  },
  {
    image: presionOcular,
    alt: "Test de Presión Ocular",
    title: "Test de Presión Ocular",
    description:
      "Mide la presión intraocular para prevenir enfermedades oculares.",
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
