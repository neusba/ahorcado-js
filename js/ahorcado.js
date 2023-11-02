function juegoAhorcado() {
    document.write("<h1>Ahorcado</h1><br>Atento a la consola!</br>");

    console.log('Empieza el juego!');
    console.log('1. Iniciar el juego\n2. Estadísticas\n3. Salir');
    // El usuario elige una de las 3 opciones
    let opcionJuego = prompt('Elige qué quieres hacer a continuación:');

    // Comprobamos la opción introducida
    while (opcionJuego != '3') {
        if (opcionJuego.length != 1 || opcionJuego < 1 || opcionJuego > 2) {
            console.log(`${opcionJuego} no es una opción vaĺida. Introduce otro número.`);
            opcionJuego = prompt('Elige una opción válida');
        }
        // Crear funciones para opción 1 y para opción 2
    }
    console.log('Has salido del juego');
}