
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

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const btnComprar = document.querySelectorAll("#btnComprar")

const agregarAlCarrito = (prodId) => {
    const {id, nombre, precio, img} = listaProductos.find((prod) => prod.id === prodId)
    
    const itemEnCarrito = {
        id, nombre, precio, img, cantidad:1
    }

    const prodEnCarrito = carrito.includes(itemEnCarrito)

    prodEnCarrito === false ? (carrito.push(itemEnCarrito)): itemEnCarrito.cantidad++; 

    mensajeAgregado(itemEnCarrito.nombre)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)

}


const mensajeAgregado = (nombre) => {
    Toastify({
        text: `Se agregó 1 unidad de ${nombre} al carrito!`,
        duration: 3000,
        position: 'left',
        style: {
            background: "linear-gradient(to right, #f3ab44, #fa5363)",
        }
    }).showToast()
}