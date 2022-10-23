//LOS PRODUCTOS SE VAN AGREGANDO.
const fragment = document.createDocumentFragment(); //CREAN ESPACIO DONDE IRA LA CARD
const templateCard = document.getElementById('template-card').content; //LA CARD
const items = document.getElementById('listar-productos')
//MI ARRAY DE OBJETOS (PRODUCTOS EN VENTA)
class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo
        this.imagen = item.imagen
        this.precio = item.precio
        this.descripcion= item.descripcion
    }

};

const agregarProductos = [
    new Producto ({id: "1", titulo: "Brownie Especial", imagen: "img/modelocarrusel2.png" ,precio: 1599, descripcion: "El brownie es de la familia de los bizcochuelos. Se caracteriza por ser bajo y bien húmedo. Les presento en este caso una variante de la receta original del brownie. "}),
    new Producto ({id: "2", titulo: "Lemon Pie", imagen: "img/baner-2.png" ,precio: 2000, descripcion:"El lemon pie es una tarta dulce muy común y clásica. Esta compuesta por una base de masa, una crema al limón y decorada con merengue italiano en la superficie"}),
    new Producto({ id: "3", titulo: "Torta de Choco y Crema", imagen: "img/modelocarrusel4.png", precio: 1900, descripcion: "Exquesita receta de torta de chocolate. Por un lado se encuentra un esponjoso y sabroso bizcochuelo de chocolate relleno con un mousse al chocolate amargo. " }),
    new Producto ({id: "4", titulo: "Pionono de Chocolate ", imagen: "img/modelocarrusel3.png" , precio: 2500, descripcion:"pinono de chocolate relleno de crema con fruta ..podes elegir la que quieras ,frutillas, cerezas , arandanos ."}),
    new Producto ({id: "5", titulo: "Chipá", imagen: "img/producto-7.png" , precio: 1500, descripcion:"La chipá, término en lengua guaraní, es un pan pequeño hecho con almidón de mandioca, queso duro, leche, huevos, manteca y sal;"}),
    new Producto ({id: "5", titulo: "Torta Brownie con Frutillas", imagen: "img/modelocarrusel1.png" , precio: 3000, descripcion:"La torta brownie con el mousse de frutilla presenta dos capas de brownie y un delicado relleno de mousse de frutilla."}),
];

//CREANDO CARDS

agregarProductos.forEach((item) => {
    templateCard.querySelector('h3').textContent = item.titulo
    templateCard.querySelector('span').textContent = item.precio
    templateCard.querySelector('img').setAttribute("src", item.imagen)
    templateCard.querySelector('p').textContent = item.descripcion
    templateCard.querySelector('.agregar-carrito').dataset.id = item.id


    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
})
//SE PINTA LA CARD
items.appendChild(fragment)