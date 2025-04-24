function esPalindromo(texto) {
    // normalizar
    const normalizado = texto
        .toLowerCase()
      .normalize("NFD") // elimina acentos
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    const invertido = normalizado.split("").reverse().join("");

    if (normalizado === invertido) {
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}

esPalindromo("La ruta nos aporto otro paso natural"); 
esPalindromo("Hola");
