console.log("JS Mail-Dadi")

// // 1. email check

// // Inizializzo un array contenente le email
// const mails = ['ciao@gmail.com', 'pippo@libero.it', 'pluto@gmail.com']

// // Richiedo in input l'email dell'utente
// const userMail = prompt('Inserisci la tua mail')

// // Inizializzo un messaggio con accesso negato
// let message = 'Accesso negato, controllare la mail inserita'

// // SE all'interno dell'array mails si trova la mail dell'utente cambio il messaggio in "Accesso consentito"
// if (mails.includes(userMail)) {
//     message = 'Accesso consentito!'
// }

// // Stampo il messaggio
// console.log(message)

// 2. dice game

// Genero il lancio dell'utente
const userRoll = Math.floor(Math.random() * 6) + 1
console.log(`User rolled: ${userRoll}`)

// Genero il lancio del bot
const botRoll = Math.floor(Math.random() * 6) + 1
console.log(`Bot rolled: ${botRoll}`)

let message = 'It\'s a DRAW, no one wins!'

if (userRoll > botRoll) {
    message = 'User wins!'
} else if (userRoll < botRoll) {
    message = 'Bot wins!'
}

console.log(message)