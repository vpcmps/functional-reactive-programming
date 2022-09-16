
Array.prototype.meuReduce = function (fn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const sum = (acc, el) => acc + el

const result = [1, 2, 3, 4].reduce(sum, 0)

console.log(result)

const r2 = [1, 2, 3, 4].meuReduce(sum, 0)
console.log(r2)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getTotal = (item) => item.preco * item.qtde
const somar = (total, preco) => total + preco

const totalGeral = carrinho.map(getTotal)
console.log(totalGeral)

const totalAmount = totalGeral.reduce(somar, 0)
console.log(totalAmount)
