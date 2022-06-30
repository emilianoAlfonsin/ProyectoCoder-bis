// ----- Selectores -----

const catalogoContainer = document.querySelector('#catalogo')


// ----- Catalogo en HTML -----

listaProductos.forEach((prod) => {
    const div = document.createElement('div')
    div.classList.add('prod')
    
    div.innerHTML = `
                    <div class="catalog-item">
                        <div class="card h-100 catalog-card">
                            <img src=${prod.img} class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${prod.nombre}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content.</p>
                                <p>Precio: $${prod.precio}</p>
                                <div>
                                <button class="btn btn-primary" id="btnComprar" onclick="agregarAlCarrito(${prod.id})">Agregar</button>
                            </div>
                        </div>
                    </div>
                    `
    
    catalogoContainer.append(div)
})

// ----- Carrito de compras -----

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const btnComprar = document.querySelector("#btnComprar")

const agregarAlCarrito = (id) => {
    const item = listaProductos.find((prod) => prod.id === id)
    const prodEnCarrito = carrito.includes(item)
    btnComprar.classList.remove('btn-primary')
    btnComprar.classList.add('btn-success')
    
    prodEnCarrito === false ? (carrito.push(item)) : null; 

    localStorage.setItem('carrito', JSON.stringify(carrito))

}
