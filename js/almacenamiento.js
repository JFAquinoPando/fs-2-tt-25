export function guardarPublicaciones(clave, valor) {
    localStorage.setItem(clave, valor)
}

export const obtenerPublicaciones = (clave) => {
    return localStorage.getItem(clave)
}
