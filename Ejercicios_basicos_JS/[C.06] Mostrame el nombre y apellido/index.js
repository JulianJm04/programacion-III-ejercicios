function mostrarNombreApellido(nombre, apellido) {
    let nombreFormateado =
        nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    let apellidoMayuscula = apellido.toUpperCase();
    
    console.log(`${apellidoMayuscula}, ${nombreFormateado}`);
    }
    
let nombre = "julian";
let apellido = "maldonado";

mostrarNombreApellido(nombre, apellido);
