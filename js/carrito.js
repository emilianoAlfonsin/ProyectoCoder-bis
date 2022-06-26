
const carritoContainer = document.querySelector('#carrito')

let precio = 0
let total = 0

const renderizarCarrito = () => {
    carritoContainer.innerHTML = ''
    let carritoJSON = JSON.parse(localStorage.getItem('carrito'))

    carritoJSON.forEach((item) => {
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
                                        <p>Cantidad: ${item.cantidad}</p>
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