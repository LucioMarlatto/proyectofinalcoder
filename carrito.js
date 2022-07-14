//Variables
const carrito = [];

//Función para renderizar productos

function renderizarProductos() {

    let galeria = document.getElementById("galeria");

    productos.forEach((producto) => {

        let productoHTML = `
        <div>
            <img src=${producto.src}>    
            <p class="nombre">${producto.producto}</p>
            <p class="card__price">$${producto.precio}</p>
            <button class="btn btn-warning" onClick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
        `

        galeria.innerHTML += productoHTML;
    });
}

renderizarProductos();


//Función para agregar productos al carrito

function agregarProductoAlCarrito (id){


    let producto = productos.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(productoEnCarrito => productoEnCarrito.id === id);

    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

        console.log (carrito);

    }else {

        producto.cantidad = 1;
        carrito.push(producto);

        console.log(carrito);
    }

    renderizarCarrito();
    calcularTotal()
}


function renderizarCarrito(){

    let carritoHTML = document.getElementById("carrito");
    console.log(carritoHTML);

    let htmlCarrito = " ";

    carrito.forEach ((producto, id) => {

        htmlCarrito += `
        <div>
            <img src=${producto.src}>    
            <p class="nombre">${producto.producto}</p>
            <p class="card__price">$${producto.precio}</p>
            <p class="cantidad">Cantidad: ${producto.cantidad}</p>
            <button class="btn btn-primary" onClick="eliminarProductoDelCarrito(${id})">Eliminar del carrito</button>
        </div>
        `

        carritoHTML.innerHTML = htmlCarrito;
    });
}


//Función para eliminar producto del carrito

function eliminarProductoDelCarrito(id) {

    carrito[id].cantidad--;

    if (carrito[id].cantidad === 0) {

        carrito.splice(id, 1); //para que el número no se vaya menor a 0
    }

    renderizarCarrito();
}






function calcularTotal() {
    
    let total = 0;

    carrito.forEach((producto) => {

        total += producto.precio * producto.cantidad;
    })

    console.log(total);

    const t = document.getElementById("total");
    
    const t2 = document.createElement("h6");
    t2.innerHTML=`<h6>El total de la compra es de: $${total}</h6>`;

    t.appendChild(t2);
}















