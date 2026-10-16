/*
humanScoreNumber -> Camel Case
GAME_OPTIONS     -> Snake Case

*/

//quando se tem muitas palvras iguais tonrna-se demorado pra mudar todas...   
// entao usando ENUM, coloca-se todas as palavras iguais em uma so variavel...
//  se eu muda rock estarei mudando o codigo todo... facilita mudancas e correcoes

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}



const playMachine = () => {
    const choices = ['GAME_OPTIONS.ROCK', 'GAME_OPTIONS.PAPER', 'GAME_OPTIONS.SCISSORS']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    // EMPATE
    if (human === machine) {
        vitoriasSeguidas = 0
        derrotasSeguidas = 0
        result.innerHTML = 'Deu empate! 😐'
    }
    // VITÓRIA DO JOGADOR
    else if (
        (human === 'GAME_OPTIONS.ROCK' && machine === 'GAME_OPTIONS.SCISSORS') ||
        (human === 'GAME_OPTIONS.PAPER' && machine === 'GAME_OPTIONS.ROCK') ||
        (human === 'GAME_OPTIONS.SCISSORS' && machine === 'GAME_OPTIONS.PAPER')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        vitoriasSeguidas++
        derrotasSeguidas = 0

    }
}