const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true }
]

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const isFragil = (item) => item.fragil
const getTotal = (item) => item.qtde * item.preco

const getMedia = (total, el, ) => {
    const novaQtd = total.qtd + 1
    const novoTotal = total.total + el
    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal/novaQtd
    }
}

const media = carrinho.filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, {qtd: 0, total: 0, media: 0})

console.log(media)



