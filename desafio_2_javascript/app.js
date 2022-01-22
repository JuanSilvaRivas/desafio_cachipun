//juego piedra papel o tijeras

let numJuegos = parseInt(prompt("¿cuantos juegos jugará?"));

//ciclo while
while(numJuegos > 0){
    let opcionUsuario = parseInt(prompt(`
        [Bienvenido al juego: Piedra papel o tijeras]
        Escribe el numero de la jugada que harás:
        1-Piedra
        2-Papel
        3-Tijeras
    
    `));
    //ésta operación nos permitirá elegir aleatoriamente la respuesta de la máquina
    let opcionMaquina = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(opcionMaquina);

    //aca aplicamos la funcion con la variables para recibir los parametros de la maquina y el usuario
    //y vamos descontando la cantidad de juegos restantes
    console.log(ganador(opcionMaquina, opcionUsuario));
    numJuegos = numJuegos -1;


}
//Creamos la funcion que nos permitirá saber quien gana
function ganador(machineChoice, userChoice){
    if(machineChoice === 1 && userChoice === 3){
        return "Perdiste!";
    }
    if(machineChoice === 2 && userChoice === 1){
        return "Perdiste!";
    }
    if(machineChoice === 3 && userChoice === 1){
        return "Perdiste!";
    }
    if(machineChoice === userChoice){
        return "Es un empate!"
    }
    return "Ganaste!";
}



