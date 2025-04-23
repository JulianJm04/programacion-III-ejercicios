function repetirPalabraONumero(numero, palabra) {
    if (palabra !== undefined) {
        for (let i = 0; i < numero; i++) {
        console.log(palabra);
        }
    } else {
        console.log(-numero);
    }
}
    
repetirPalabraONumero(3, "Hola");  
repetirPalabraONumero(7);          
    