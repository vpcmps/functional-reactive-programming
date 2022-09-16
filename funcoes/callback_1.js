function somarNoTerminal(a, b){
    console.log(a+b)
}

function subtrairNoTerminal(a, b){
    console.log(a-b)
}
const subtrair = (a, b) => a - b

function exec(fn, a, b){
    return fn(a,b)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)
const r = exec(subtrair, 40,12)

console.log(r)

setInterval(function(){
    console.log('Exec 3...')
}, 5000)
