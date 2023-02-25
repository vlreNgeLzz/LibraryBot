module.exports = {
    botOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Книги', callback_data: '/books'}],
                [{text: 'Памятки', callback_data: '/notes'}],
            ]
        })
    }
}