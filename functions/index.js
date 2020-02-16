const functions = require('firebase-functions');
const Telegraf = require('telegraf')

const bot = new Telegraf('981900501:AAEEm2aDvZGM0wWVyKV4ACUUuB_fYC95v0Y')
bot.start((ctx) => ctx.reply('Selamat Datang!'))
bot.help((ctx) => ctx.reply('minta tolong apa ?'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hai', (ctx) => ctx.reply('Haiiiiii <3'))
bot.hears('/about', (ctx) => ctx.reply('Ini adalah Simple Chat Bot yang dibuat untuk sarana belajar mengenai cara pembuatan Bot menggunakan NodeJs dan Firebase Cloud Functions'))
bot.hears('/creator', (ctx) => ctx.reply('Bot ini diciptkan oleh Irfan Farid'))
bot.hears('/how', (ctx) => ctx.reply('Bot ini dibuat menggunakan NodeJs dan Firebase Cloud Functions'))
bot.hears('/link', (ctx) => ctx.reply('https://gitlab.com/irfarid3/telegram-bot-dengan-nodejs-dan-firebase-cloud'))
bot.launch()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 });
