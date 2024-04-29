
const usuario = {
    nombre : 'luciano',
    edad : 40,
   pais: "Peru"
}

switch (usuario.pais) {

    case 'argentina' :
        console.log("El usuario es de Argentina")
        break;

    case 'chile' :
        console.log("El usuario es de Chile")
        break;
    
    case 'colombia' :
        console.log("El usuario es de Colombia")
        break;

    default : 
    console.log ("El usuario es de otro pais")
}

