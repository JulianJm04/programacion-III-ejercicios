function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
        return cadena.slice(0, longitud - 1) + "…";
    } else {
        return cadena;
    }
}

console.log(truncate("Hola, esto es un mensaje muy largo", 20));

console.log(truncate("Corto", 10));
