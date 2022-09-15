const horaEl = document.getElementById("horas")
const minutoEl = document.getElementById("minutos")
const segundosEl = document.getElementById("segundos")
const ampmEl = document.getElementById("ampm")

// const amanecer = "Imagenes/amanecer.jpg"
// const anochecer = "Imagenes/anochecer.jpg"
// const luna = "Imagenes/moon.jpg"
// const montania = "Imagenes/mountain.jpg"

function actualizarreloj(){
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    let ampm = "AM";

    if(horas > 12){
        horas = horas - 12;
        ampm = "PM";
    }

    horas = horas<10 ? "0" + horas : horas;
    minutos = minutos<10 ? "0" + minutos : minutos;
    segundos = segundos<10 ? "0" + segundos : segundos;


    horaEl.innerText = horas;
    minutoEl.innerText = minutos;
    segundosEl.innerText = segundos;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        actualizarreloj();
    }, 1000)
}


actualizarreloj();


function cambiarFondo(){
    let fondoActual = document.getElementsByTagName('body')[0];
    // let amanecer = "Imagenes/amanecer.jpg";
    // let anochecer = "Imagenes/anochecer.jpg";
    // let luna = "Imagenes/moon.jpg";
    // let montania = "Imagenes/mountain.jpg";
    let fondos =['url(Imagenes/anochecer.jpg)', 'url(Imagenes/moon.jpg)', 'url(Imagenes/mountain.jpg)', 'url(Imagenes/amanecer.jpg)'];

    let aleatorio = Math.floor(Math.random() * fondos.length);
    console.log("Fondo: " + aleatorio);

    fondoActual.style.background= fondos[aleatorio];
    fondoActual.style.backgroundSize = "cover";
    
    
}

