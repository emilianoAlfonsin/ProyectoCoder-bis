// ----- Array de productos -----
class Producto {
    constructor (id, nombre, img, precio, categoria){
        this.id = id
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.categoria = categoria
    }
}

const listaProductos = [
    new Producto (1, "Pampers Confort Sec", "../images/productos/higiene/pampersConfort.jpg", 1350, "higiene"),
    new Producto (2, "Pampers Premium Care", "../images/productos/higiene/pamperspremium.jpg", 1530, "higiene"),
    new Producto (3, "Pampers Supersec", "../images/productos/higiene/pampersSupersec.jpg", 1200, "higiene"),
    new Producto (4, "Pampers Splashers", "../images/productos/higiene/pampersSplashers.jpg", 1320, "higiene"),
    new Producto (5, "Huggies Active Sec","../images/productos/higiene/hugActSec.jpg", 1380, "higiene",1),
    new Producto (6, "Huggies Triple Proteccion", "../images/productos/higiene/tripleProteccion.jpg", 1280, "higiene"),
    new Producto (7, "Estrella Baby", "../images/productos/higiene/estrellaBaby.jpg", 1250, "higiene"),
    new Producto (8, "Babysec Premium", "../images/productos/higiene/babysecPrem.jpg", 1170, "higiene"),
    new Producto (9, "Babysec Ultra", "../images/productos/higiene/babysecUltra.jpg", 1100, "higiene"),
    new Producto (10, "Ewe Tea tree", "../images/productos/higiene/eweTeaTreeOilx20ml.jpg", 650, "higiene"),
    new Producto (11, "Mamadera Avent clásica", "../images/productos/alimentacion/aventMamaderaClasica260ml.jpg", 1890, "alimentacion"),
    new Producto (12, "Nuk Magic Cup", "../images/productos/alimentacion/nukVasoMagicCup.jpg", 2100, "alimentacion"),
    new Producto (13, "Bimbi Apilable Mickey", "../images/productos/juguetes/bimbiApilableMickey6pz.JPG", 2690, "juguetes"),
    new Producto (14, "Bimbi Monta Figuras", "../images/productos/juguetes/bimbiMontaFiguras.jpg", 2350, "juguetes"),
    new Producto (15, "Bimbi Ranita", "../images/productos/juguetes/bimbiRanita.jpg", 1780, "juguetes", 1),
    new Producto (16, "Woody toys Almohada", "../images/productos/juguetes/woodyToysAlmohBebe.jpg", 1680, "juguetes")
]

