function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par,`);
    } else {
        console.log(`El número ${numero} es impar,`);
    }

    console.log(`siendo ${numero} el numero recibido como parametro.`);
}

verificarParidad(5);
