function juegoAhorcadoConsola() {
    // Variables globales
    const expresionRegularLetras = /[^a-záéíóúÁÉÍÓÚ]/; // ^ indica negación de las letras del abecedario comunes.
    const expresionRegularEspacios = /\s/;             // Busca espacios en blanco en una cadena
    let intentos = 0;
    let letrasUsadas = [];
    let palabra = "";

    // Variables de estadísticas
    let partidasJugadas = 0;
    let partidasGanadas = 0;
    let partidasPerdidas = 0;

    document.write("<h1>Ahorcado</h1><br>Atento a la consola!</br>");
    console.log('1. Iniciar el juego\n2. Estadísticas\n3. Salir');
    // El usuario elige una de las 3 opciones
    let opcionJuego = prompt('Elige qué quieres hacer a continuación:');

    // Comprobamos la opción introducida
    while (opcionJuego != '3') {
        if (opcionJuego.length != 1 || opcionJuego < 1 || opcionJuego > 2) {
            console.log(`${opcionJuego} no es una opción vaĺida. Introduce otro número.`);
            opcionJuego = prompt('Elige una opción válida');
        }
        // Opción 1: iniciar el juego
        if (opcionJuego == '1') {
            console.log('Comienza el juego!');
            iniciarJuego();
        }
        break;

    }
    console.log('Has salido del juego');
    // document.write("<br><button>Jugar otra vez</button>");

    function iniciarJuego() {
        while (intentos < 6) {
            palabra = prompt('Introduce una sola palabra:').toLowerCase();
            intentos++;
            while (!compruebaPalabra(palabra)) {
                console.log('Palabra no válida. Asegúrate de introducir una única palabra y que solo contenga letras.');
                palabra = prompt('Introduce otra palabra:').toLowerCase();
            }
            palabraEncriptada(palabra);    

            let letra = prompt('Introduce una letra:').toLowerCase();
            while (!compruebaLetraValida(letra)) {
                console.log('Carácter inválido');
                letra = prompt('Introduce una única letra:').toLowerCase();
            }

            letrasUsadas.push(letra);
            if (compruebaLetraCorrecta(letra)) {
                muestraResultado();
                if (compruebaSiGana()) {
                    console.log('Enhorabuena, has acertado la palabra!');
                    break;
                }
            }


        }

    }
    function compruebaPalabra(palabra) {
        if (expresionRegularEspacios.test(palabra)) return false;
        if (expresionRegularLetras.test(palabra)) return false; // comprueba si la palabra contiene carácteres diferentes (^) a los de la expresión regular.
        return true;
    }
    function palabraEncriptada(palabra) {
        for (let i=0; i<palabra.length; i++) {
            for (let j=0; j<letrasUsadas.length; j++) {
                if (palabra.charAt(i) == letrasUsadas[j]) {
                    console.log(palabra.charAt(i));
                } else {
                    console.log('_');
                }
            }
        }
    }
    function compruebaLetraValida(letra) {
        if (letra.length != 1) return false;
        if (expresionRegularLetras.test(letra)) return false; // comprueba si la letra es diferente (^) a alguno de los carácteres de la expresión regular.
        return true;
    }
    function compruebaLetraCorrecta(letra) {
        if (palabra.includes(letra)) return true;
        return false;
    }
    function muestraResultado() {
        palabraEncriptada(palabra);
        console.log(intentos);
    }
    function compruebaSiGana() {
        let letrasUsadasCadena = letrasUsadas.join('');
        if (letrasUsadasCadena == palabra) return true;
        return false;
    }
}