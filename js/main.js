const arrayDeCarrito = JSON.parse(localStorage.getItem("arrayDeCarrito")) || [];

const container = document.getElementById("container");
const inicio1 = document.getElementById("inicio");
const productos1 = document.getElementById("productos");
const carrito1 = document.getElementById("carrito");

// Función para mostrar los productos

function mostrarProductos() {
    container.innerHTML = "";

    arrayDeProductos.forEach(el => {
        const card = document.createElement("div");
        card.className = "card";

        const titulo = document.createElement("h2");
        titulo.innerText = el.nombre;

        const precio = document.createElement("h3");
        precio.innerText = `$${el.precio}`;

        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.alt = "NOIMG";
        imagen.className = "img";

        const botonAgregar = document.createElement("button");
        botonAgregar.className = "botton1"
        botonAgregar.innerText = "Agregar al carrito";

        botonAgregar.addEventListener("click", () => agregarCarrito(el.id));

        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(imagen);
        card.appendChild(botonAgregar);

        container.appendChild(card);

    });
};


function agregarCarrito(id) {
    const productoElegido = arrayDeProductos.find(el => el.id === id);
    if (productoElegido) {
        arrayDeCarrito.push(productoElegido);
        alert(`¡Agregaste ${productoElegido.nombre} al carrito!`)
        localStorage.setItem("arrayDeCarrito", JSON.stringify(arrayDeCarrito));
    };
};


function mostrarCarrito() {
    container.innerHTML = '';

    arrayDeCarrito.forEach(el => {
        const card = document.createElement("div");
        card.className = "card";

        const titulo = document.createElement("h2");
        titulo.innerText = el.nombre;

        const precio = document.createElement("h3");
        precio.innerText = `$${el.precio}`;

        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.alt = "NOIMG";
        imagen.className = "img";

        const botonQuitar = document.createElement("button");
        botonQuitar.className = "botonQuitar";
        botonQuitar.innerText = "Quitar del carrito";

        botonQuitar.addEventListener("click", () => quitarDelCarrito(el.id));

        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(imagen);
        card.appendChild(botonQuitar);

        container.appendChild(card);

    });
};



function quitarDelCarrito(id) {
    const indice = arrayDeCarrito.findIndex(el => el.id === id);
    if (indice !== -1) {
        const productoEliminado = arrayDeCarrito[indice];
        arrayDeCarrito.splice(indice, 1);
        localStorage.setItem("arrayDeCarrito", JSON.stringify(indice));
        alert(`Quitaste ${productoEliminado.nombre} del carrito`);
        mostrarCarrito();
    }
};


function inicio() {
    container.innerHTML = "";

    const imgPrincipal = document.createElement("img");
    imgPrincipal.src = "https://media.lacapital.com.ar/p/417d787945ca91648b4d7cc7dedefaa8/adjuntos/203/imagenes/020/383/0020383527/642x0/smart/museojpg.jpg";
    imgPrincipal.className = "img-principal";

    container.appendChild(imgPrincipal);
};



productos1.addEventListener("click", mostrarProductos);
carrito1.addEventListener("click", mostrarCarrito);
inicio1.addEventListener("click", inicio);

document.addEventListener("DOMContentLoaded", inicio);