function sumarDigitos(num) {
    return num.toString().split("").reduce((acc, val) => acc + Number(val), 0);
    }
    
    function factorizar(num) {
    let factores = [];
    let divisor = 2;

    while (num > 1) {
        while (num % divisor === 0) {
        factores.push(divisor);
        num = num / divisor;
        }
        divisor++;
    }
    return factores;
}


function esNumeroDeSmith(num) {
    if (factorizar(num).length === 1) {
        console.log(`${num} es primo, por lo tanto no es un numero de Smith.`);
        return;
    }

    const sumaOriginal = sumarDigitos(num);
    const factores = factorizar(num);
    const sumaFactores = factores.reduce((acc, f) => acc + sumarDigitos(f), 0);

    console.log(`Número: ${num}`);
    console.log(`Suma digitos: ${sumaOriginal}`);
    console.log(`Factores primos: ${factores.join(" × ")}`);
    console.log(`Suma digitos de factores: ${sumaFactores}`);

    if (sumaOriginal === sumaFactores) {
        console.log("Es un numero de Smith");
    } else {
        console.log("No es un numero de Smith");
    }
}

esNumeroDeSmith(378); 
esNumeroDeSmith(22);   
esNumeroDeSmith(13);  
