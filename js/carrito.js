
const carritoContainer = document.querySelector('#carrito')
const carritoJSON = JSON.parse(localStorage.getItem('carrito'))
const totalPagar= document.querySelector('#totalPagar')


//----- Carrito -----

const renderizarCarrito = () => {
    carritoContainer.innerHTML = ''
    
    carritoJSON.forEach((itemEnCarrito) => {
        const div = document.createElement('div')
        const precio = itemEnCarrito.cantidad * itemEnCarrito.precio
        
        div.innerHTML =`
                        <div class="card mb-3 catalog-item" style="max-width: 720px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${itemEnCarrito.img} class="img-fluid rounded-start" alt="">
                                </div>
                                <div class="col-md-8">
                                    <button class="btn btn-outline-secondary d-flex ml-auto" onclick="eliminarProducto(${itemEnCarrito.id})">X</button>
                                    <div class="card-body">
                                        <h5 class="card-title">${itemEnCarrito.nombre}</h5>    
                                        <p>Cantidad: ${itemEnCarrito.cantidad} 
                                        <button class="btn btn-outline-secondary" style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .85rem;" onclick="quitarCant(${itemEnCarrito.id})" id="menos">-</button>
                                        <button class="btn btn-outline-secondary" style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .85rem;" onclick="agregarCant(${itemEnCarrito.id})" id="más">+</button></p>
                                        <p class="card-text">Precio: $${precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    carritoContainer.append(div)
    })
}

renderizarCarrito()

const mensajeEliminado = (nombre) => {
    Toastify({
        text: `Eliminaste un producto del carrito`,
        duration: 3000,
        position: 'left',
        style: {
            background: "linear-gradient(to right, #f3ab44, #fa5363)",
        }
    }).showToast()
}

const removerDelCarrito = (id) => {
    const itemEnCarrito = carritoJSON.find((producto) => producto.id === id)
    const indice = carritoJSON.indexOf(itemEnCarrito)
    carritoJSON.splice(indice, 1)

    mensajeEliminado()

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))

    renderizarCarrito()
    renderTotal()
}

const renderTotal = () => {
    let total = 0
    carritoJSON.forEach((producto) => {
        total += producto.precio*producto.cantidad
    })

    totalPagar.innerText = total
}

renderTotal()


//----- Botones -/+/X ------

const agregarCant = (id) => {
    const itemEnCarrito = carritoJSON.find((producto) => producto.id === id)
    itemEnCarrito.cantidad ++

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}

const quitarCant = (id) => {
    const itemEnCarrito = carritoJSON.find((producto) => producto.id === id)
    itemEnCarrito.cantidad --
    
    itemEnCarrito.cantidad <= 0 &&  removerDelCarrito(itemEnCarrito.id)
    
    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}

function eliminarProducto (prodEnCarrito) {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Eliminarás este producto de tu carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Mejor no'
    }).then((result) => {
        if (result.isConfirmed) {
            removerDelCarrito(prodEnCarrito)
            Swal.fire(
                'Eliminado correctamente',
                'Deseamos que halles el producto que buscás',
                'success'
            )
        }
    })
}

//----- Vaciar carrito -----

const vaciarCarrito = () => {
    carritoJSON.length = 0
    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}

const btnVaciar = document.querySelector('#btnVaciarCarrito')

btnVaciar.addEventListener ('click', () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Eliminarás todos los productos de tu carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar',
        cancelButtonText: 'Mejor no'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito()
            Swal.fire(
                'Vaciaste tu carrito'
            )
        }
    })
})


