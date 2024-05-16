"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import LogoOptica from "../img/Logo_Optica.svg";
import Instagram from "../img/instagram.svg";
import Whatsapp from "../img/whatsapp.svg";
import GoogleMapsIcon from "../img/google-maps-icon.svg";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const children = document.querySelector(".children");
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      children.classList.remove("blur-none");
      children.classList.add("blur-sm");
      document.addEventListener("click", handleClickOutsideMenu);
    } else {
      document.body.style.overflow = "auto";
      children.classList.remove("blur-sm");
      children.classList.add("blur-none");
      document.removeEventListener("click", handleClickOutsideMenu);
    }
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed z-10 w-full flex justify-between items-center py-4 px-6 bg-[#A2DED0] text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={LogoOptica}
            alt="OpticaGuinart_logo"
            className="mr-2 hover:fill-slate-400 transition duration-100 w-40"
          />
        </Link>
      </div>

      {/* Enlaces */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/gafas">
            <span className="hover:text-gray-400 transition duration-300 text-xl">
              Gafas
            </span>
          </Link>
        </li>
        <li>
          <Link href="/lentillas">
            <span className="hover:text-gray-400 transition duration-300 text-xl">
              Lentillas
            </span>
          </Link>
        </li>
        <li>
          <Link href="/audifonos">
            <span className="hover:text-gray-400 transition duration-300 text-xl">
              Audífonos
            </span>
          </Link>
        </li>
        <li>
          <Link href="/servicios">
            <span className="hover:text-gray-400 transition duration-300 text-xl">
              Servcios
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <span className="hover:text-gray-400 transition duration-300 text-xl">
              Contacto
            </span>
          </Link>
        </li>
      </ul>

      {/* Iconos */}
      <div className="hidden md:flex space-x-4">
        <a
          href="https://www.google.com/maps/dir//C%2F+Gran+de+Sant+Andreu,+308,+Sant+Andreu,+08030+Barcelona/@41.4370855,2.1072775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!2m2!1d2.1896783!2d41.4371149?entry=ttu"
          target="_blank"
          className="text-white hover:text-blue-500"
        >
          <Image
            className="hover:invert-[42%] transition duration-300 pt-[1px]"
            src={GoogleMapsIcon}
            alt="LocationDot-icon"
            width={12}
            height={12}
          />
        </a>
        <a
          href="https://www.instagram.com/optica_guinart/"
          target="_blank"
          className="text-white hover:text-blue-500"
        >
          <Image
            className="hover:invert-[42%] transition duration-300"
            src={Instagram}
            alt="Instagram-icon"
            width={15}
            height={15}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
          target="_blank"
          className="text-white hover:text-blue-500"
        >
          <Image
            className="hover:invert-[42%] transition duration-300"
            src={Whatsapp}
            alt="Whatsapp-icon"
            width={15}
            height={15}
          />
        </a>
      </div>

      {/* Burger Icon for Mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "top-full border-t-2" : "top-[-290%] -z-20"
        } md:hidden border-[#9ad3c6] absolute z-[-1] left-0 w-full bg-[#A2DED0] text-white transition-all duration-300`}
      >
        <ul
          className={`${
            isMenuOpen ? "opacity-100 duration-700" : "opacity-0 duration-100"
          } flex flex-col items-center space-y-6 pt-4 pb-6 transition-all`}
        >
          <li>
            <Link href="/gafas" onClick={toggleMenu}>
              <span className="text-[#405752] active:text-[#5f736f] text-2xl tracking-widest font-semibold">
                Gafas
              </span>
            </Link>
          </li>
          <li>
            <Link href="/lentillas" onClick={toggleMenu}>
              <span className="text-[#405752] active:text-[#5f736f] text-2xl tracking-widest font-semibold">
                Lentillas
              </span>
            </Link>
          </li>
          <li>
            <Link href="/gafas" onClick={toggleMenu}>
              <span className="text-[#405752] active:text-[#5f736f] text-2xl tracking-widest font-semibold">
                Audífonos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/servicios" onClick={toggleMenu}>
              <span className="text-[#405752] active:text-[#5f736f] text-2xl tracking-widest font-semibold">
                Servicios
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contacto" onClick={toggleMenu}>
              <span className="text-[#405752] active:text-[#5f736f] text-2xl tracking-widest font-semibold">
                Contacto
              </span>
            </Link>
          </li>
          {/* Iconos */}
          <div
            className={`${isMenuOpen ? "flex md:hidden space-x-6" : "hidden"}`}
          >
            <a
              href="https://www.google.com/maps/dir//C%2F+Gran+de+Sant+Andreu,+308,+Sant+Andreu,+08030+Barcelona/@41.4370855,2.1072775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!2m2!1d2.1896783!2d41.4371149?entry=ttu"
              target="_blank"
              className="text-white hover:text-blue-500"
            >
              <Image
                className="hover:invert-[42%] transition duration-300 pt-[1px]"
                src={GoogleMapsIcon}
                alt="LocationDot-icon"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://www.instagram.com/optica_guinart/"
              target="_blank"
              className="text-white hover:text-blue-500"
            >
              <Image
                className="hover:invert-[42%] transition duration-300"
                src={Instagram}
                alt="Instagram-icon"
                width={21}
                height={21}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
              target="_blank"
              className="text-white hover:text-blue-500"
            >
              <Image
                className="hover:invert-[42%] transition duration-300"
                src={Whatsapp}
                alt="Whatsapp-icon"
                width={21}
                height={21}
              />
            </a>
          </div>
        </ul>
        <div
          className="bg-[#A2DED0] h-6 w-full absolute -bottom-4 left-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
          }}
        ></div>
      </div>
    </nav>
  );
}
