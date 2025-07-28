const header = document.querySelector('.header');
const introSection = document.getElementById('intro');
const gameSection = document.getElementById('game');

const btnComenzar = document.getElementById('comenzar-btn');
const btnMayor = document.getElementById('mayor-btn');
const btnMenor = document.getElementById('menor-btn');

const namePaisActual = document.getElementById('name-pais-actual');
const banderaPaisActual = document.getElementById('bandera-pais-actual');

const namePaisNuevo = document.getElementById('name-pais-nuevo');
const banderaPaisNuevo = document.getElementById('bandera-pais-nuevo');

const puntajeActual = document.getElementById('puntaje-actual');
const record = document.getElementById('record');

let puntaje = 0;
let recordPuntaje = 0;

btnComenzar.addEventListener('click', () => {
    header.classList.remove('hidden');
    introSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    iniciarJuego();
});

const paises = [
    { nombre: 'Argentina', poblacion: 45195777, bandera: 'Paises/Argentina.png' },
    { nombre: 'Brasil', poblacion: 213993437, bandera: 'Paises/Brasil.png' },
    { nombre: 'Chile', poblacion: 19116209, bandera: 'Paises/Chile.png' },
    { nombre: 'Colombia', poblacion: 50882891, bandera: 'Paises/Colombia.png' },
    { nombre: 'Perú', poblacion: 33816648, bandera: 'Paises/Peru.png' },
    { nombre: 'Venezuela', poblacion: 28435943, bandera: 'Paises/Venezuela.png' },
    { nombre: 'Uruguay', poblacion: 3473730, bandera: 'Paises/Uruguay.png' },
    { nombre: 'Bolivia', poblacion: 11673029, bandera: 'Paises/Bolivia.png' },
    { nombre: 'Ecuador', poblacion: 17643060, bandera: 'Paises/Ecuador.png' },
    { nombre: 'Paraguay', poblacion: 7132530, bandera: 'Paises/Paraguay.png' },
    { nombre: 'Guyana', poblacion: 786559, bandera: 'Paises/Guyana.png' },
    { nombre: 'Surinam', poblacion: 586634, bandera: 'Paises/Surinam.png' },
    { nombre: 'Panamá', poblacion: 4314768, bandera: 'Paises/Panamá.png' },
    { nombre: 'Costa Rica', poblacion: 5390521, bandera: 'Paises/Costa-Rica.png' },
    { nombre: 'Nicaragua', poblacion: 6624554, bandera: 'Paises/Nicaragua.png' },
    { nombre: 'Honduras', poblacion: 10039107, bandera: 'Paises/Honduras.png' },
    { nombre: 'El Salvador', poblacion: 6486201, bandera: 'Paises/El-Salvador.png' },
    { nombre: 'Guatemala', poblacion: 17915568, bandera: 'Paises/Guatemala.png' },
    { nombre: 'México', poblacion: 126190788, bandera: 'Paises/Mexico.png' },
    { nombre: 'Cuba', poblacion: 11326616, bandera: 'Paises/Cuba.png' },
    { nombre: 'República Dominicana', poblacion: 10847910, bandera: 'Paises/Republica-Dominicana.png' },
    { nombre: 'Puerto Rico', poblacion: 3193694, bandera: 'Paises/Puerto-Rico.png' },
    { nombre: 'Jamaica', poblacion: 2961161, bandera: 'Paises/Jamaica.png' },
    { nombre: 'Trinidad y Tobago', poblacion: 1399491, bandera: 'Paises/Trinidad-y-Tobago.png' }
];

function seleccionarPaisActual() {
    const paisActual = paises[Math.floor(Math.random() * paises.length)];
    namePaisActual.textContent = `${paisActual.nombre}: ${paisActual.poblacion.toLocaleString()}`;
    banderaPaisActual.src = paisActual.bandera;
}
function seleccionarPaisNuevo() {
    const paisNuevo = paises[Math.floor(Math.random() * paises.length)];
    namePaisNuevo.textContent = paisNuevo.nombre;
    banderaPaisNuevo.src = paisNuevo.bandera;
}

function iniciarJuego() {
    puntaje = 0;
    puntajeActual.textContent = `Puntaje: ${puntaje}`;
    record.textContent = `Record: ${recordPuntaje}`;

    seleccionarPaisActual();
    seleccionarPaisNuevo();
}
