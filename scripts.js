const pizza = [
    {nombre: "muzzarella", id: 1,  precio:500,  ingredientes: ["muzzarella", "oregano"], imagen: "jamon-morron-frog.png"} ,
    {nombre:"napolitana", id:2,  precio:780,  ingredientes:["muzzarella", "oregano", "tomate"], imagen:"pizza1.png"},
    {nombre:"palmitos", id:3,  precio:750,  ingredientes:["muzzarella", "oregano", "palmitos", "salsa golf"], imagen:"Pizza-Jamon-con-Palmitos.png"},
    {nombre:"americana", id:4,  precio:900,  ingredientes:["muzzarella", "calabresa"], imagen:"pizza2.png"},
    {nombre:"4 quesos", id:5,  precio:1200,  ingredientes:["muzzarella", "oregano", "parmesano", "fontina", "provolone"], imagen:"pizza3.png"},
    {nombre:"jamon y morrones", id:6,  precio:800,  ingredientes:["muzzarella", "jamon", "morron"], imagen:"pizza4.png"},
    {nombre:"crudo y rucula", id:7,  precio:1600,  ingredientes:["muzzarella", "jamon crudo", "rucula"], imagen:"porcionmargarita.png"},
    {nombre:"champinones", id:8,  precio:1000,  ingredientes:["muzzarella", "champinones", "salsa blanca"], imagen:"pizza-cuatro-quesos-gourmet-aislado_219193-8117.webp"},
]

const form = document.getElementById('formPizza');
const ID = document.querySelector('.pizzaId');
const showPizza = document.getElementById('pizzaName');
const ShowPrice = document.getElementById('pizzaPrice');
const error = document.getElementById("failure");
const pizzaContainer = document.getElementById("resultados");
const divImagenPizza = document.getElementById('pizzaImg');
const imgZappi = document.getElementById("imagenpizza");

const nombrePizza = (pizzaNombre) => {
    showPizza.textContent = `nombre de pizza:  ${pizzaNombre}`;
};

const precioPizza = (pizzaPrecio) => {
    ShowPrice.textContent = ` precio: ${pizzaPrecio} `;
};


const EError = (id) => {
    error.textContent = ` El ID ${id} es erroneo`;
    pizzaContainer.style.display = 'none';
};






const buscador = () => {
    const pizza_id = pizza.find((pizza) => pizza.id == ID.value);
    
    if (pizza_id) {

        pizzaContainer.style.display = 'flex';
        error.style.display = "none";
        nombrePizza(pizza_id.nombre);
        precioPizza(pizza_id.precio);
        divImagenPizza.innerHTML = `
        <div id="imagecont">
            <img src="images/${pizza_id.imagen}" id:"imagenpizza">
        </div>

        `
        
        let pizzaJSON = JSON.stringify(pizza_id);

        localStorage.setItem("pizzaJSON", pizzaJSON)
        localStorage.setItem("idPizza", ID.value)
        localStorage.setItem("nombrePizza", pizza_id.nombre)
        localStorage.setItem("precioPizza", pizza_id.precio)
        localStorage.setItem("imgPizza", pizza_id.imagen)

    } else {
        EError(ID.value);
            error.style.display = "flex";
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    buscador();
    form.reset(); 
});


if (localStorage.getItem("nombrePizza") ){
    showPizza.innerText = localStorage.getItem("nombrePizza")
}

if (localStorage.getItem("precioPizza")) {
    ShowPrice.innerText = localStorage.getItem("precioPizza")
}

if (localStorage.getItem("imgPizza")){
    imgZappi.setAttribute('src',localStorage.getItem( "imgPizza"))
    imgZappi.setAttribute('style', "")
    console.log(localStorage.getItem("imgPizza"))
}