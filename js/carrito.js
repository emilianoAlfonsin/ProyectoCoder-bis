
const carritoContainer = document.querySelector('#carrito')
const carritoJSON = JSON.parse(localStorage.getItem('carrito'))

//----- Carrito -----

const renderizarCarrito = () => {
    carritoContainer.innerHTML = ''
    
    carritoJSON.forEach((item) => {
        const div = document.createElement('div')
        const precio = item.cantidad * item.precio
        
        div.innerHTML =`
                        <div class="card mb-3" style="max-width: 720px;">
                            
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${item.img} class="img-fluid rounded-start" alt="">
                                </div>
                                <div class="col-md-8">
                                    <button class="btn btn-outline-secondary text-end" onclick="removerDelCarrito(${item.id})">X</button>
                                    <div class="card-body">
                                        <h6 class="card-title">${item.nombre}</h6>
                                        <p>Cantidad: ${item.cantidad} 
                                        <button class="btn btn-outline-secondary btn-sm" onclick="quitarCant(${item.id})" id="menos">-</button>
                                        <button class="btn btn-outline-secondary btn-sm" onclick="agregarCant(${item.id})" id="más">+</button></p>
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
    const item = carritoJSON.find((producto) => producto.id === id)
    const indice = carritoJSON.indexOf(item)
    carritoJSON.splice(indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))

    renderizarCarrito()
    renderTotal()
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
    const item = carritoJSON.find((producto) => producto.id === id)
    item.cantidad ++

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}

const quitarCant = (id) => {
    const item = carritoJSON.find((producto) => producto.id === id)
    item.cantidad --
    
    item.cantidad <= 0 &&  removerDelCarrito(item.id)
    
    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}
