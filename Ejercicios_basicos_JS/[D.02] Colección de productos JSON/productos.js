const productos = [
    {
    codigoBarra: "7790580567903",
    nombre: "Tomate Perita ARCOR Lata 400 Gr",
    precio: 819,
    fechaVencimiento: "2026-12-31"
    },
    {
    codigoBarra: "7622300835620",
    nombre: "Alfajor Triple MILKA Oreo 61g",
    precio: 1630,
    fechaVencimiento: "2025-06-15"
    },
    {
    codigoBarra: "456789123456",
    nombre: "Nescafé® Espresso X 100gr",
    precio: 15640,
    fechaVencimiento: "2025-10-10"
    },
    {
        codigoBarra: "1234567891011",
        nombre: "Galletitas OREO Rellenas Con Crema Sabor Original 182,5g",
        precio: 2662,
        fechaVencimiento: "2025-04-28"
    }
];

console.log("Colección de productos:");
productos.forEach(producto => console.log(producto));
