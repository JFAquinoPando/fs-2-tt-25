import { guardarPublicaciones, obtenerPublicaciones } from "./almacenamiento.js"

const $ = (selector) => {
    return document.querySelector(selector);
}


const url = "https://www.idt.com.py/wp-json/wp/v2/posts"

let publicaciones = obtenerPublicaciones("datos_idt")
if (publicaciones === null) {
    fetch(url).then(
        (respuesta) => {
            return respuesta.json()
        }
    ).then(
        function (datos) {
            guardarPublicaciones("datos_idt", JSON.stringify(datos))
            publicaciones = obtenerPublicaciones("datos_idt", datos)
        }
    )
}

const $contenedorPublicaciones  = document.querySelector("#publicaciones")
publicaciones = JSON.parse(publicaciones)
const listado = publicaciones.map(
    (articulo) => {
        return `<article class="rounded-md border bg-gray-800 p-4">
        <figure>
            <img src="${articulo?.yoast_head_json?.og_image[0]?.url}" alt="${articulo.title.rendered}">
        </figure>
        <h3 class="py-2 font-bold text-xl">${articulo.title.rendered}</h3>
        <p  class="py-2">${articulo.excerpt.rendered}</p>
        </article>`
    }
)

$contenedorPublicaciones.insertAdjacentHTML("afterbegin", listado.join(""));
