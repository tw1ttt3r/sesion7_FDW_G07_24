console.log(window, 'window'); // navegador
console.log(document, 'document'); // navegador

// getElementById -> elemento  "navegacion_header" 
// getElementsByClassName -> elementos "li_nav" "footer_nav" "navegacion_header" HTMLCollection
// getElementsByTagName -> elementos "navegacion_header"

// querySelector -> nodo "#navegacion_header" ".li_nav"
// querySelectorAll -> nodos "#navegacion_header" nodelist

// # id
// . class
// nombre de la etiqueta tagname
// [name=]
// [type=]
// #talid > div

// document
// elemento o nodo

const navEl = document.getElementsByTagName("header")[0].querySelector("#navegacion_header");

console.log(document.getElementById("navegacion_header"))
console.log(document.getElementsByTagName("header")[0].querySelector("#navegacion_header"))
console.log(document.getElementsByTagName("header")[0].children.namedItem("navegacion_header"))
console.log(document.querySelectorAll("header"))


// obtener los elementos de la lista de la nav
const lis = navEl.getElementsByClassName("li_nav header_nav"); //

const lisNodes = navEl.querySelectorAll(".li_nav");

const liss = document.getElementsByClassName("li_nav"); //

// agregar nuevos list items a mi nav (header)
// append
// appendChild
// innerHTML -> se va a modificar por completo el contenido del nodo o elemento seleccionado

// navEl.innerHTML = "<p>hola mundo</p>";
// navEl.innerHTML = "hola mundo";

const nuevoElemento = document.createElement("li");
console.log(nuevoElemento)
nuevoElemento.textContent = "News";
console.log(nuevoElemento)


const ul = navEl.querySelector("ul");
ul.append(nuevoElemento, "soy pedro")
navEl.appendChild(nuevoElemento);