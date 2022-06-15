// ----- Array de productos -----
class Producto {
    constructor (id, nombre, img, precio, categoria, cantidad){
        this.id = id
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.categoria = categoria
        this.cantidad = cantidad
    }
}

const catalogo = [
    new Producto (1, "Pampers Confort Sec", "../images/productos/higiene/pampersConfort.jpg", 1350, "higiene", 1),
    new Producto (2, "Pampers Premium Care", "../images/productos/higiene/pamperspremium.jpg", 1530, "higiene", 1),
    new Producto (3, "Pampers Supersec", "../images/productos/higiene/pampersSupersec.jpg", 1200, "higiene", 1),
    new Producto (4, "Pampers Splashers", "../images/productos/higiene/pampersSplashers.jpg", 1320, "higiene", 1),
    new Producto (5, "Huggies Active Sec","../images/productos/higiene/hugActSec.jpg", 1380, "higiene",1),
    new Producto (6, "Huggies Triple Proteccion", "../images/productos/higiene/tripleProteccion.jpg", 1280, "higiene", 1),
    new Producto (7, "Estrella Baby", "../images/productos/higiene/estrellaBaby.jpg", 1250, "higiene", 1),
    new Producto (8, "Babysec Premium", "../images/productos/higiene/babysecPrem.jpg", 1170, "higiene", 1),
    new Producto (9, "Babysec Ultra", "../images/productos/higiene/babysecUltra.jpg", 1100, "higiene", 1),
    new Producto (10, "Ewe Tea tree", "../images/productos/higiene/eweTeaTreeOilx20ml.jpg", 650, "higiene", 1),
    new Producto (11, "Mamadera Avent clásica", "../images/productos/alimentacion/aventMamaderaClasica260ml.jpg", 1890, "alimentacion", 1),
    new Producto (12, "Nuk Magic Cup", "../images/productos/alimentacion/nukVasoMagicCup.jpg", 2100, "alimentacion"),
    new Producto (13, "Bimbi Apilable Mikcey", "../images/productos/juguetes/bimbiApilableMickey6pz.JPG", 2690, "juguetes", 1),
    new Producto (14, "Bimbi Monta Figuras", "../images/productos/juguetes/bimbiMontaFiguras.jpg", 2350, "juguetes", 1),
    new Producto (15, "Bimbi Ranita", "../images/productos/juguetes/bimbiRanita.jpg", 1780, "juguetes", 1),
    new Producto (16, "Woody toys Almohada", "../images/productos/juguetes/woodyToysAlmohBebe.jpg", 1680, "juguetes", 1)
]

// ----- Catalogo en HTML -----

function catalogoHTML (){
    let tienda = document.getElementById('tienda');

    catalogo.forEach ((el)=>{
        let productoHTML = 
        `<div class="catalog-item" id="pampersConfort">
            <div class="card h-100 catalog-card">
                <img src=${el.img} class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${el.nombre}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content.</p>
                    <p>$${el.precio}</p>
                    <button class="btn btn-primary" onClick="agregarAlCarrito(${el.id})">Comprar</button>
                </div>
            </div>
        </div>`

        tienda.innerHTML += productoHTML
    });
}

catalogoHTML ()


/* <div class="catalog-item" id="pampersConfort">
    <div class="card h-100 catalog-card">
        <img src="../images/productos/higiene/pampersConfort.jpg" class="card-img-top"
            alt="pañales pampers confortsec">
        <div class="card-body">
            <h5 class="card-title">Pampers Confort Sec</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
</div> */

// ----- Carrito de compras -----

const carrito = []

function agregarAlCarrito (id) {

    let producto = catalogo.find(producto => producto.id == id);
    let enCarrito = carrito.find(producto => producto.id == id);

    if(enCarrito){
        enCarrito.cantidad++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    presentacionCarrito ();
}

let precio;
let totalAPagar;

function presentacionCarrito () {
    let carritoHTML = document.getElementById('carrito')
    html = ''

    carrito.forEach ((producto, _id) => {
        precio = producto.precio*producto.cantidad

        html +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${producto.img} class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <p class="card-text">Precio: $${precio}</p>
                        </div>
                    </div>
                </div>
            </div>`

        
    });

    carritoHTML.innerHTML = html;
}

// function total () {
//     totalAPagar += precio
// }

// let totalHTML = document.getElementById ('total')
//     `<div class="card text-center">
//         <div class="card-header">
//             Total a pagar
//         </div>
//         <div class="card-body">
//             <p class="card-text">$${totalAPagar}</p>
//             <a href="#" class="btn btn-primary">Pagar</a>
//         </div>
//     </div>`