alert('Estamos usando JS')

const logo = document.querySelector('.logo');
logo.textContent = '🐾 Veterinaria';

const btnHero = document.querySelector('#hero button');

btnHero.addEventListener('click', () =>{
    alert(' Gracias por tu interes pronto agendamos tu cita.');
});

let clics = 0;
const btnVisitanos = document.querySelector('#Visitanos button');

btnVisitanos.addEventListener('click', () => {
    clics++;
    btnVisitanos.textContent = `Visitanos!! (${clics}))`;
});

const hora = new Date().getHours();
let saludo;

if (hora < 12){
    saludo = 'Buenos dias';
} else if (hora < 19){
    saludo = 'Buenas tardes';
} else {
    saludo = 'Buenas noches';
}
document.querySelector('#hero h1').textContent = `${saludo}, cuida a tu mascota`;