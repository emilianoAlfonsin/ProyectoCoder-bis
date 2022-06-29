
const carritoContainer = document.querySelector('#carrito')
// const btnEliminarProd = document.querySelector('#eliminarItem')

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
                                    <button class="btn btn-ligth justify-self-end" onclick="eliminarItem(${item.id})">X</button>
                                    <div class="card-body">
                                        <h6 class="card-title">${item.nombre}</h6>
                                        <p>Cantidad: ${item.cantidad} 
                                        <button class="btn btn-outline-secondary btn-sm" id="menos">-</button>
                                        <button class="btn btn-outline-secondary btn-sm" id="más">+</button></p>
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

const removerDelCarrito = (id) => {
    const item = carritoJSON.find((producto) => producto.id === id)
    const indice = carritoJSON.indexOf(item)
    carritoJSON.splice(indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carritoJSON))

    renderizarCarrito()

}

const totalPagar= document.querySelector('#totalPagar')

const renderTotal = () => {
    let total = 0
    carritoJSON.forEach((producto) => {
        total += precio
    })

    totalPagar.innertext = total
}

renderTotal()