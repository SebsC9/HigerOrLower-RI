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

let paisActual;
let paisNuevo;

btnComenzar.addEventListener('click', () => {
    header.classList.remove('hidden');
    introSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    iniciarJuego();
});

const paises = [
    { nombre: 'Argentina', poblacion: 45195777, bandera: 'Paises/ar.webp' },
    { nombre: 'Brasil', poblacion: 213993437, bandera: 'Paises/br.webp' },
    { nombre: 'Chile', poblacion: 19116209, bandera: 'Paises/cl.webp' },
    { nombre: 'Colombia', poblacion: 50882891, bandera: 'Paises/co.webp' },
    { nombre: 'Perú', poblacion: 33816648, bandera: 'Paises/pe.webp' },
    { nombre: 'Venezuela', poblacion: 28435943, bandera: 'Paises/ve.webp' },
    { nombre: 'Uruguay', poblacion: 3473730, bandera: 'Paises/uy.webp' },
    { nombre: 'Bolivia', poblacion: 11673029, bandera: 'Paises/bo.webp' },
    { nombre: 'Ecuador', poblacion: 17643060, bandera: 'Paises/ec.webp' },
    { nombre: 'Paraguay', poblacion: 7132530, bandera: 'Paises/py.webp' },
    { nombre: 'Guyana', poblacion: 786559, bandera: 'Paises/gy.webp' },
    { nombre: 'Surinam', poblacion: 586634, bandera: 'Paises/sr.webp' },
    { nombre: 'Panamá', poblacion: 4314768, bandera: 'Paises/pa.webp' },
    { nombre: 'Costa Rica', poblacion: 5390521, bandera: 'Paises/cr.webp' },
    { nombre: 'Nicaragua', poblacion: 6624554, bandera: 'Paises/ni.webp' },
    { nombre: 'Honduras', poblacion: 10039107, bandera: 'Paises/hn.webp' },
    { nombre: 'El Salvador', poblacion: 6486201, bandera: 'Paises/sv.webp' },
    { nombre: 'Guatemala', poblacion: 17915568, bandera: 'Paises/gt.webp' },
    { nombre: 'México', poblacion: 126190788, bandera: 'Paises/mx.webp' },
    { nombre: 'Cuba', poblacion: 11326616, bandera: 'Paises/cu.webp' },
    { nombre: 'República Dominicana', poblacion: 10847910, bandera: 'Paises/do.webp' },
    { nombre: 'Puerto Rico', poblacion: 3193694, bandera: 'Paises/pr.webp' },
    { nombre: 'Jamaica', poblacion: 2961161, bandera: 'Paises/jm.webp' },
    { nombre: 'Trinidad y Tobago', poblacion: 1399491, bandera: 'Paises/tt.webp' }
];

function seleccionarPaisActual() {
    paisActual = paises[Math.floor(Math.random() * paises.length)];
    namePaisActual.textContent = `${paisActual.nombre}: ${paisActual.poblacion.toLocaleString()}`;
    banderaPaisActual.src = paisActual.bandera;
}
function seleccionarPaisNuevo() {
    let nuevoPaisSeleccionado;
    do {
        nuevoPaisSeleccionado = paises[Math.floor(Math.random() * paises.length)];
    } while (nuevoPaisSeleccionado === paisActual);

    paisNuevo = nuevoPaisSeleccionado;
    namePaisNuevo.textContent = `${paisNuevo.nombre}`;
    banderaPaisNuevo.src = paisNuevo.bandera;
}


function iniciarJuego() {
    puntaje = 0;
    puntajeActual.textContent = `Puntaje: ${puntaje}`;
    record.textContent = `Record: ${recordPuntaje}`;

    seleccionarPaisActual();
    seleccionarPaisNuevo();
};

btnMayor.addEventListener('click', () => {
    if (paisNuevo.poblacion > paisActual.poblacion) {
        puntaje++;
        puntajeActual.textContent = `Puntaje: ${puntaje}`;
        if (puntaje > recordPuntaje) {
            recordPuntaje = puntaje;
            record.textContent = `Record: ${recordPuntaje}`;
        }
        siguienteRonda();
    } else {
        alert('¡Incorrecto! La poblacion de ' + paisNuevo.nombre + ' es de ' + paisNuevo.poblacion.toLocaleString() + '.');
        iniciarJuego();
    }
});

btnMenor.addEventListener('click', () => {
    if (paisNuevo.poblacion < paisActual.poblacion) {
        puntaje++;
        puntajeActual.textContent = `Puntaje: ${puntaje}`;
        if (puntaje > recordPuntaje) {
            recordPuntaje = puntaje;
            record.textContent = `Record: ${recordPuntaje}`;
        }
        siguienteRonda();
    } else {
        alert('¡Incorrecto! La poblacion de ' + paisNuevo.nombre + ' es de ' + paisNuevo.poblacion.toLocaleString() + '.');
        iniciarJuego();
    }
});

function siguienteRonda() {
    paisActual = paisNuevo;
    namePaisActual.textContent = `${paisActual.nombre}: ${paisActual.poblacion.toLocaleString()}`;
    banderaPaisActual.src = paisActual.bandera;

    seleccionarPaisNuevo();
}
