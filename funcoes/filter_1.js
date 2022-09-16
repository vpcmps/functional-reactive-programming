
const grades = [5, 6, 7, 8, 9, 10]

const predicate = (el) => el >= 7

const goodGrades = grades.filter(predicate)

console.log(goodGrades)


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const itensValidos = carrinho.filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(itensValidos)

Array.prototype.meuFilter = function (fn) {
    let filtered = []
    for (let i = 0; i < this.length; i++) {
        let current = this[i]

        if (fn(current, i, this))
            filtered.push(current)
    }

    return filtered
}

const newGrades = grades.meuFilter(predicate)
console.log(newGrades)
