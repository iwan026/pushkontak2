const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI BASE ORI BY DENI HOSTING
global.owner = ['628886472598'] // no own
global.packname = '© sticker by DeniHost' // nama pack sticker
global.author = 'Deni Hosting'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})