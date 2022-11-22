

class Pizzas {
    constructor( nombre, id, precio, ingredientes){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
}

const pizza = [
   new Pizzas ("muzzarella", 1,  500,  ["muzzarella", "oregano"]),
   new Pizzas("napolitana", 2,  780,  ["muzzarella", "oregano", "tomate"]),
   new Pizzas("palmitos", 3,  750,  ["muzzarella", "oregano", "palmitos", "salsa golf"]),
   new Pizzas ("americana", 4,  900,  ["muzzarella", "calabresa"]),
   new Pizzas("4 quesos", 5,  1200,  ["muzzarella", "oregano", "parmesano", "fontina", "provolone"]),
   new Pizzas ("jamon y morrones", 6,  800,  ["muzzarella", "jamon", "morron"]),
   new Pizzas("crudo y rucula", 7,  1600,  ["muzzarella", "jamon crudo", "rucula"]),
   new Pizzas("champinones", 8,  1000,  ["muzzarella", "champinones", "salsa blanca"]),
]

const form = document.getElementById('formPizza');
const ID = document.querySelector('.pizzaId');
const showPizza = document.getElementById('pizzaName');
const ShowPrice = document.getElementById('pizzaPrice');
const error = document.getElementById("failure");
const pizzaContainer = document.getElementById("resultados");

const nombrePizza = (pizzaNombre) => {
    showPizza.textContent = `nombre de pizza:  ${pizzaNombre}`;
};

const precioPizza = (pizzaPrecio) => {
    ShowPrice.textContent = ` precio: ${pizzaPrecio} `;
};
const EError = (id) => {
    error.textContent = ` El valor ${id} es erroneo`;
    pizzaContainer.style.display = 'none';
};



const buscador = () => {
    const pizza_id = pizza.find((pizza) => pizza.id == ID.value);
    if (pizza_id) {
        pizzaContainer.style.display = 'flex';
        error.style.display = "none";
        nombrePizza(pizza_id.nombre);
        precioPizza(pizza_id.precio);
    } else {
        EError(ID.value);
            error.style.display = "flex";
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    buscador();
    form.reset(); 
});