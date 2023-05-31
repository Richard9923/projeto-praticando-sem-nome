
const container = document.querySelector(".container");
const input = document.querySelector(".input");
const btn = document.querySelector('.btn');


const cliente = {
    nome: "",
}
btn.addEventListener('click', function () {
    cliente.name = input.value;
    container.innerHTML = `Bem vindo! ${cliente.name}`;
})

console.log(cliente);