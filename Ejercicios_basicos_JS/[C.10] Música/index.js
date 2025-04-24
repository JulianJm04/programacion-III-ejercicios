let estilos = ["Jazz", "Blues"];
console.log(estilos); // ["Jazz", "Blues"]

// 1. Agregar "Rock-n-Roll" al final
estilos.push("Rock-n-Roll");
console.log(estilos); 

// 2. Reemplazar el valor del medio por "Heavy Metal"
let medio = Math.floor(estilos.length / 2);
estilos[medio] = "Heavy Metal";
console.log(estilos); 

// 3. Quitar el primer elemento
estilos.shift();
console.log(estilos); 

// 4. Agregar "Rap" y "Reggae" al inicio
estilos.unshift("Rap", "Reggae");
console.log(estilos);
