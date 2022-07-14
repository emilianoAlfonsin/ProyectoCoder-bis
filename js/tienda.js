
const catalogoContainer = document.querySelector('#catalogo')

// ----- Catalogo en HTML -----

let stock = []

fetch('../js/stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data

        stock.forEach((prod) => {
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
    })


const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const agregarAlCarrito = (prodId) => {
    
    // const itemEncarrito = carrito.find((prod) => prod.id === prodId)

    // const itemEncarrito = {
    //     id, nombre, precio, img, cantidad:1
    // }

    const prodEnCarrito = carrito.find((prod) => prod.id === prodId)

    // prodEnCarrito ? mensajeYaSeAgrego() : carrito.push(prodEncarrito) && mensajeAgregado(prodEncarrito.nombre); 

    if (prodEnCarrito){
        mensajeYaSeAgrego()
    }else{
        const {id, nombre, precio, img} = stock.find( (prod) => prod.id === prodId)

        const prodAlCarritio = {
            id,
            nombre,
            precio,
            img,
            cantidad : 1
        }

        carrito.push(prodAlCarritio)
        mensajeAgregado(prodAlCarritio.nombre)
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
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

const mensajeYaSeAgrego = () => {
    Toastify({
        text: `Este producto ya está en el carrito`,
        duration: 3000,
        position: 'left',
        style: {
            background: "linear-gradient(to right, #fa5363, #f3ab44)",
        }
    }).showToast()
}
