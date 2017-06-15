$('body').scrollspy({ target: '#navegacion' })


/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('navbar');
    if (distanciaY > 50) {
        navbar.classList.add("menu-color");
    } else {
        navbar.classList.remove("menu-color");
    }

    // Al salir de la sección vuelve a su color original -> blanco
    if (distanciaY > 10000) {
        navbar.classList.remove("menu-color");
    }
}

// Evento para el navegador al hacer scroll que detona la función que provoca los cambios de color en la navbar segun la distancia
window.addEventListener('scroll', cambioDeNavbar);



// JS Nat para validar el formulario de contacto
var botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', validarContact);

function validarContact() {
    // Obtengo los valores del formulario
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');


    // Si los value vienen vacios envio mensaje
    if (name.value === '') {

        name.setAttribute('placeholder', '*Please enter your name');
    }
    if (email.value === '') {
        email.setAttribute('placeholder', '*Please enter your email');
    }
    if (phone.value === '') {
        phone.setAttribute('placeholder', '*Please enter your phone')
    }
    if (message.value === '') {
        message.setAttribute('placeholder', '*Please enter your message')
    }

    if (name.value !== '' && email.value !== '' && message.value !== '') {
        botonEnviar.setAttribute('type', 'submit');
    }
}