const TelegramApi = require('node-telegram-bot-api')

const {botOptions} = require('./options.js')

const token = "6243583787:AAE0OTABoJUvZ1zd-RdeSGqATZzyh8jTEkI"

const bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Начать работу'},
    {command: '/книги', description: 'Поиск по книгам'},
    {command: '/заметки', description: 'Поиск по заметкам'},
])



bot.sendMessage(chatId, 'Выберите действие', options);

const start = () => {

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg)
        if (text === '/start') {
            await bot.sendMessage(chatId, 'https://iweb.tatthanh.com.vn/pic/3/blog/images/logo-sach(46).jpg' + "Вас приветствует бот-библиотекарь, созданный студентом КузГТУ для помощи другим студентам этого учебного заведения в поиске нужных материалов, учебников, книг и памяток в онлайн-библиотеке лучшего политеха в мире!");
            await bot.sendMessage(chatId, 'Выберете, что мы будем искать', botOptions);
        };
    
        if (text === '/books') {
            await bot.sendMessage(chatId, "Сейчас найдём нужную книгу!");
        };
    
        if (text === '/notes') {
            await bot.sendMessage(chatId, "Сейчас найдём нужную памятку!");
        };

        
    })

}



start()