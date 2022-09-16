const nums = [1, 2, 3, 4, 5]
const dobro = (number, index, array) => number * 2 + index + array.length
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
    { nome:'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome:'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20}
]




const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => {
    return {nome: item.nome, preco: item.qtde * item.preco}
}
console.log(carrinho.map(getTotal))


Array.prototype.meuMap = function(fn){
    const mapped = []
    for(let i = 0; i < this.length; i++){
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped
}
