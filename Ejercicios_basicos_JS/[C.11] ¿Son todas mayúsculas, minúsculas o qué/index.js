function analizarTexto(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena esta en mayusculas.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena esta en minusculas.");
    } else {
        console.log("La cadena contiene una mezcla de mayusculas y minusculas.");
    }
}

analizarTexto("HOLA");
analizarTexto("hola");
analizarTexto("Hola");
