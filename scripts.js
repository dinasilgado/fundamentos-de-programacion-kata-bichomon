const firstCard = document.querySelector('.infocard')
console.log("primer elemento con clase infocard", firstCard)

//cambiar el titulo//

const cambioNombre = document.getElementById("gen-1");
cambioNombre.textContent ="Generasión 1 Pokimon";

//cambiar el color de fondo /primera generacion de pokimon//

 const pokimonlist = document.querySelector(".infocard-list");
 if(pokimonlist){
   pokimonlist.style.backgroundColor =" pink"
 };
 //imprime por consola la ur de la pagina//

 let url="file:///C:/Users/Dinas/Desktop/fundamentos-de-programacion-kata-bichomon/index.html#gen-1"
 console.log(url);

 // Imprime por consola el dominio de la página//
//es un archico local , no esta en un servidor web//

//todos los nodos de la imagen//
let NodosImg = document.querySelectorAll("img");
console.log(NodosImg);

//sustitucion de las imagenes//
const imagenes= document.querySelectorAll("img");
imagenes.forEach(imagen => {
    imagen.src ="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    console.log("imagen nueva",imagen);
}
)

//cambiar fondo de todos los pokimon//






