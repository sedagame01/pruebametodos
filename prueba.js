//funcion pedir un dato 
function pedirDatos(){
    let palabra=  prompt(`introduce una palabra`)
    return palabra
} 
//funcion contar espacios en blanco 
function contarPalabras(compuesto){
    let contador=0;
  for (let i =0;i<=compuesto.length;i++){

    if (compuesto.charAt(i)==" "){ 
        contador++;
        }
    }
        return contador;
}

//funcion busqueda de una letra
function busquedaLetra(frase,buscado){
    let contador
    for(let i =0;i<frase.length;i++){
        if (buscado==frase.charAt(i)){
            contador++;
        }
    }
    return contador;
}



for (let i =0;i<=palabraModf.length;i++){

    if(i%2==0){
       /*  vacio.push(palabraModf.charAt(i)); */
        console.log(palabraModf.charAt(i))
        console.log(" ");
    }else{
        
        console.log(palabraModf.charAt(i));
        console.log(" ");
    }

    vacio=+i;
}
//letras
let vacio;
let palabra = pedirDatos();
let palabraModf=palabra.toUpperCase();
console.log(palabraModf)




// numero de espacios
let nombre=pedirDatos();
contador=contarPalabras(nombre);
console.log(contador)

//repeticion de un caracter
let frase = prompt("ingrese la frase ")
let buscado = prompt(`que letra estamos buscando? `);
console.log(busquedaLetra(frase, buscado));