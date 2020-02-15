const functions = require('firebase-functions');
const Telegraf = require('telegraf')

const bot = new Telegraf('981900501:AAEEm2aDvZGM0wWVyKV4ACUUuB_fYC95v0Y')
bot.start((ctx) => ctx.reply('Selamat Datang!'))
bot.help((ctx) => ctx.reply('minta tolong apa ?'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hai', (ctx) => ctx.reply('Haiiiiii <3'))
bot.launch()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 });
