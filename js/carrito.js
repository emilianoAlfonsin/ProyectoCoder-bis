
const carritoContainer = document.querySelector('#carrito')
const carritoJSON = JSON.parse(localStorage.getItem('carrito'))


//----- Carrito -----

const renderizarCarrito = () => {
    carritoContainer.innerHTML = ''
    
    carritoJSON.forEach((itemEnCarrito) => {
        const div = document.createElement('div')
        const precio = itemEnCarrito.cantidad * itemEnCarrito.precio
        
        div.innerHTML =`
                        <div class="card mb-3" style="max-width: 720px;">
                            
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${itemEnCarrito.img} class="img-fluid rounded-start" alt="">
                                </div>
                                <div class="col-md-8">
                                    <button class="btn btn-outline-secondary text-end" onclick="removerDelCarrito(${itemEnCarrito.id})">X</button>
                                    <div class="card-body">
                                        <h6 class="card-title">${itemEnCarrito.nombre}</h6>    
                                        <p>Cantidad: ${itemEnCarrito.cantidad} 
                                        <button class="btn btn-outline-secondary btn-sm" onclick="quitarCant(${itemEnCarrito.id})" id="menos">-</button>
                                        <button class="btn btn-outline-secondary btn-sm" onclick="agregarCant(${itemEnCarrito.id})" id="más">+</button></p>
                                        <p class="card-text">Precio: $${precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    carritoContainer.append(div)
    console.log(carritoJSON)

    })
}

renderizarCarrito()


const removerDelCarrito = (id) => {
    const itemEnCarrito = carritoJSON.find((producto) => producto.id === id)
    const indice = carritoJSON.indexOf(itemEnCarrito)
    carritoJSON.splice(indice, 1)

    mensajeEliminado(itemEnCarrito.nombre)

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))

    renderizarCarrito()
    renderTotal()
}

const mensajeEliminado = (nombre) => {
    Toastify({
        text: `Se eliminó ${nombre} del carrito!`,
        duration: 3000,
        position: 'left',
        style: {
            background: "linear-gradient(to right, #f3ab44, #fa5363)",
        }
    }).showToast()
}

const totalPagar= document.querySelector('#totalPagar')

const renderTotal = () => {
    let total = 0
    carritoJSON.forEach((producto) => {
        total += producto.precio*producto.cantidad
    })

    totalPagar.innerText = total
}

renderTotal()

//----- Botones - +  ------


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
