import Image from "next/image";
import chicoGafasSol from "../img/chico-gafas-sol-hipster.jpg";
import chicaGafasGraduadas from "../img/mujer-gafas-graduadas.jpg";
import filtroLuzAzul from "../img/gafas-filtro-luz.webp";
import lentillas from "../img/lentillas-oferta-2.jpg";
import lentillasCosmeticas from "../img/lentillas-cosmeticas.jpeg";
import audifonos from "../img/audifonos.jpg";
import testAuditivo from "../img/test-auditivo.jpg"
import examenVisual from "../img/examen-visual.jpg"
import presionOcular from "../img/presion-ocular.webp";

const categories = [
  {
    image: chicaGafasGraduadas,
    alt: "Gafas Graduadas",
    title: "Gafas Graduadas",
    description:
      "Encuentra una amplia selección de gafas graduadas de las mejores marcas.",
  },
  {
    image: chicoGafasSol,
    alt: "Gafas de Sol",
    title: "Gafas de Sol",
    description:
      "Protege tus ojos del sol con nuestras gafas de sol de última moda.",
  },
  {
    image: filtroLuzAzul,
    alt: "Gafas con Filtro de Luz Azul",
    title: "Gafas con Filtro de Luz Azul",
    description:
      "Reduce la fatiga visual con nuestras gafas que filtran la luz azul.",
  },
  {
    image: lentillas,
    alt: "Lentillas",
    title: "Lentillas",
    description:
      "Descubre nuestras lentillas de calidad para una visión cómoda y nítida.",
  },
  {
    image: lentillasCosmeticas,
    alt: "Lentillas Cosméticas",
    title: "Lentillas Cosméticas",
    description:
      "Agrega un toque de color a tus ojos con nuestras lentillas cosméticas.",
  },
  {
    image: audifonos,
    alt: "Audífonos",
    title: "Audífonos",
    description:
      "Mejora tu audición con nuestros audífonos de alta tecnología.",
  },
  {
    image: testAuditivo,
    alt: "Test Auditivo",
    title: "Test Auditivo",
    description: "Realiza un examen auditivo completo con nuestros expertos.",
  },
  {
    image: examenVisual,
    alt: "Test Ocular",
    title: "Test Ocular",
    description:
      "Obtén un diagnóstico preciso de tu visión con nuestros test oculares de última generación.",
  },
  {
    image: presionOcular,
    alt: "Test de Presión Ocular",
    title: "Test de Presión Ocular",
    description:
      "Mide la presión intraocular para prevenir enfermedades oculares.",
  },
];

const OpticaGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {categories.map((category, index) => (
        <div className="max-w-xs" key={index}>
          <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
            <Image
              className="h-full w-full rounded-md"
              src={category.image}
              alt={category.alt}
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-bold mt-4">{category.title}</h3>
          <p className="mt-2 text-gray-700">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OpticaGrid;
