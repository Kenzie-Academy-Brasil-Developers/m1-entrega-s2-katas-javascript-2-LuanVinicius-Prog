
function add (a,b) {
    let soma = (a + b) 
    return soma 
}
console.log (add(3, 5))
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



function multiply (c,d){
  let multiplicação = 0
    for(let i = 0; i < d; i++){
    multiplicação = add(multiplicação,c);
    }
    return multiplicação
}

console.log(multiply(4, 6))
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



function power (x,n) {
    let potencia = 1 
    for (let i = 1; i <= n; i++){
    potencia = multiply (potencia,x)
    }
    return potencia
}

console.log(power(3,4))
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');




function factorial (zebra){
    let factoria = 1
    for (let i = 1; i<= zebra; i++){
        factoria = multiply (factoria, i)
    }
    return factoria
}
console.log(factorial(5))
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



// ESTOU TENTANDO RESOLVER A FIBONACCI//

// function fibonacci (fibo){
//     let fibonaci = 1
//     for (let i = 1; i <= fibo; i++)
//         fibonaci = 
// }

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
