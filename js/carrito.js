
const carritoContainer = document.querySelector('#carrito')
const carritoJSON = JSON.parse(localStorage.getItem('carrito'))
const totalPagar= document.querySelector('#total-a-pagar')
const btnPagar = document.querySelector('#btn-pagar')
const btnVaciar = document.querySelector('#btn-vaciar-carrito')
const totalModal = document.querySelector('#total-modal-de-pago')
let total
const cuotas = document.querySelector('#cant-cuotas')
// console.log(cuotas)
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
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-outline" onclick="eliminarProducto(${itemEnCarrito.id})">X</button>
                                    </div>
                                    <div class="card-body m-3">
                                        <h5 class="card-title">${itemEnCarrito.nombre}</h5>    
                                        <p>Cantidad: ${itemEnCarrito.cantidad} 
                                        <button class="btn btn-outline" style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .85rem;" onclick="quitarCant(${itemEnCarrito.id})" id="menos">-</button>
                                        <button class="btn btn-outline" style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .85rem;" onclick="agregarCant(${itemEnCarrito.id})" id="más">+</button></p>
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

//----- Renderizar el total a pagar -----

const renderTotal = () => {
    total = 0
    carritoJSON.forEach((producto) => {
        total += producto.precio*producto.cantidad
    })

    totalPagar.innerText = total
}

//----- Remover productos del carrito -----

const mensajeEliminado = () => {
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

renderTotal()


//----- Botones -/+ y eliminar producto ------

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

//----- Modal de pago -----

const calcInteres = () => {
    if(document.getElementById('cant-cuotas').value ===1){
        
        totalModal.innerText.append = `
            ${total}
            `
    }else 
    if(document.getElementById('cant-cuotas').value === 3) {
        totalModal.innerText.append = `
            ${total*=1.1}
            `
    }else if(document.getElementById('cant-cuotas').value === 6) {
        totalModal.innerText.append = `
            ${total*=1.15}
            `
    }else if(document.getElementById('cant-cuotas').value === 12){
        totalModal.innerText.append = `
            ${total*=1.25}
            `
    }

    console.log(total)
}

totalModal.innerText = `
    Total a pagar: $
    `

cuotas.addEventListener('change', calcInteres)


//----- Vaciar carrito -----

const vaciarCarrito = () => {
    carritoJSON.length = 0
    localStorage.setItem('carrito', JSON.stringify(carritoJSON))
    renderizarCarrito()
    renderTotal()
}


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


