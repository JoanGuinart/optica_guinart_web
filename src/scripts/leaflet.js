import L from "leaflet";
import "leaflet/dist/leaflet.css";

const mapa = document.querySelector("#map");

console.log(mapa);

const map = L.map(mapa).setView([41.4371109, 2.1896885], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

L.marker([41.4371109, 2.1896885])
  .addTo(map)
  .bindPopup(
    `<a href="https://www.google.es/maps/place/%C3%93ptica+Guinart/@41.4371189,2.1871034,16z/data=!3m1!4b1!4m6!3m5!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!8m2!3d41.4371149!4d2.1896783!16s%2Fg%2F11xd4ppr_?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="link-google-optica">Óptica Guinart</a>`
  )
  .openPopup();
