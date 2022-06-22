// ----- Selectores -----

const catalogoContainer = document.querySelector('#catalogo')
const carritoContainer = document.querySelector('#carrito')


// ----- Catalogo en HTML -----

listaProductos.forEach((prod) => {
    const div = document.createElement('div')
    div.classList.add('prod')
    
    div.innerHTML = `
                    <div class="catalog-item" id="pampersConfort">
                        <div class="card h-100 catalog-card">
                            <img src=${prod.img} class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${prod.nombre}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content.</p>
                                <p>Precio: $${prod.precio}</p>
                                <div>
                                <button class="btn btn-primary" onclick="agregarAlCarrito(${prod.id})">Comprar</button>
                            </div>
                        </div>
                    </div>
                    `
    
    catalogoContainer.append(div)
})

// ----- Carrito de compras -----

const carrito = []

const agregarAlCarrito = (id) => {
    const item = listaProductos.find((prod) => prod.id === id)
    const prodEnCarrito = carrito.includes(item)
    
    prodEnCarrito === false ? (carrito.push(item)) : null; //estuve leyendo mejores metodos de sintaxis
    
    presentacionCarrito()

}

//----//
let precio = 0
let total = 0

const presentacionCarrito = () => {
    carritoContainer.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('prodEnCarrito')
        precio = item.cantidad*item.precio

        div.innerHTML =`
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${item.img} class="img-fluid rounded-start" alt="">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.nombre}</h5>
                                        <p>Cantidad </p>
                                        <input class="" id="cantidad" type="number" value="1">
                                        <p class="card-text">Precio: $${precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    carritoContainer.append(div)
    })
}

// quiero lograr que el selector de cantidad sea una variable y no se como obtenerla aún
// te entrego este trabajo con esto en proceso 
var restar = document.querySelector("#restar")
var sumar = document.querySelector("#product_A_form .btn-add");
var cantidad = document.querySelector("#cantidad");

restar.addEventListener("click", () => cantidad.value--)

sumar.addEventListener("click", () => cantidad.value++)

