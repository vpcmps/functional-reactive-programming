const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(async resolve => {
        await fs.readFile(caminho, (_, content) => {
            resolve(content.toString())
        })

    })
}

lerArquivo(caminho).then(console.log)
