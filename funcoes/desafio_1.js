// somar(3)(4)(5)
function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
let result1 = somar(3)(4)(5)
console.log(result1)

//calcular(3)(7)(fn)
// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7

function soma(a, b){
    return a + b
}

function dividir(a, b){
    return a / b
}

function multiplicar(a, b){
    return a * b
}

function subtrair(a, b){
    return a - b
}

function calcular(a){
    return function(b){
        return function(fn){
            return fn(a, b)
        }
    }
}


let r1 = calcular(5)(3)(soma)
console.log(r1)

let r2 = calcular(5)(3)(multiplicar)
console.log(r2)

let r3 = calcular(5)(3)(dividir)
console.log(r3)

let r4 = calcular(5)(3)(subtrair)
console.log(r4)
