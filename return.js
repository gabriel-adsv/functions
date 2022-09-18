// function expression
// function anonymous

//parâmetros (parameters)
// const sum = function(number1, number2) {
//   let total = number1 + number2
//   return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
// console.log(`a soma é ${sum(number1, number2)}`)

// ==================== EXERCÍCIOS ====================

// EXERCÍCIO 1
console.log('EXERCÍCIO 1')

const sum = function(number1, number2, number3, number4) {
  let total = number1 + number2 + number3 + number4
  return total
}

let number1 = 2
let number2 = 4
let number3 = 3
let number4 = 1


console.log(`O 1º número é: ${number1}`)
console.log(`O 2º número é: ${number2}`)
console.log(`O 3º número é: ${number3}`)
console.log(`O 4º número é: ${number4}`)
console.log(`A soma é: ${sum(number1, number2, number3, number4)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 2
console.log('EXERCÍCIO 2')

const exercicio2 = function numeros2(number21, number22, number23) {
  let exer2 = (number21 / number22) - number23
  return exer2
}

let number21 = 7
let number22 = 6
let number23 = 1

console.log(`O 1º número é: ${number21}`)
console.log(`O 2º número é: ${number22}`)
console.log(`O 3º número é: ${number23}`)
console.log(`O resultado da operação [(${number21} / ${number22}) - ${number23}] é: ${exercicio2(number21, number22, number23)}`)
console.log('==================================================================')

// EXERCÍCIO 3
console.log('EXERCÍCIO 3')

const exercicio3 = function numeros3(number31, number32, number33, number34) {
  let exer3 = (number31 / number32) / (number33 / number34)
  return exer3
}

let number31 = 5
let number32 = 8
let number33 = 1
let number34 = 3

console.log(`O 1º número é ${number31}`)
console.log(`O 1º número é ${number32}`)
console.log(`O 1º número é ${number33}`)
console.log(`O 1º número é ${number34}`)
console.log(`O resultado da operação [(${number31} / ${number32}) / (${number33} / ${number34})] é: ${exercicio3(number31, number32, number33, number34)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 4
console.log('EXERCICIO 4')

const exercicio4 = function numeros4(number41, number42, number43, number44) {
  let exer4 = (number41 / number42) * (number43 / number44)
  return exer4
}

let number41 = 14
let number42 = 12
let number43 = 24
let number44 = 7

console.log(`O 1º número é: ${number41}`)
console.log(`O 2º número é: ${number42}`)
console.log(`O 3º número é: ${number43}`)
console.log(`O 4º número é: ${number44}`)
console.log(`O resultado da operação [(${number41} / ${number42}) * (${number43} / ${number44})] é: ${exercicio4(number41, number42, number43, number44)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 5
console.log('EXERCÍCIO 5')

const exercicio5 = function numberos5(number51, number52, number53, number55) {
  let exer5 = [(number53 / number55) - (number51 / number55)] * [(number52 / number53) - (number51 / number52)]  
  return exer5
}

let number51 = 1
let number52 = 2
let number53 = 3
let number55 = 5

console.log(`O 1º número é: ${number51}`)
console.log(`O 2º número é: ${number52}`)
console.log(`O 3º número é: ${number53}`)
console.log(`O 4º número é: ${number55}`)
console.log(`O resultado da operação[(${number53} / ${number55}) - (${number51} / ${number55})] * [(${number52} / ${number53}) - (${number51} / ${number52})] é: ${exercicio5(number51, number52, number53, number55)}`)
console.log('==================================================================')
// =====================================================

// 6 - EXERCÍCIO 6
console.log('EXERCÍCIO 6')

const exercicio6 = function numbers6(number62, number65, number6200) {
  let exer6 = number6200 + (number6200 / number65) + (number6200 / number62)
  return exer6
}

let number62 = 2
let number65 = 5
let number6200 = 200

console.log(`O 1º número é: ${number62}`)
console.log(`O 2º número é: ${number65}`)
console.log(`O 3º número é: ${number6200}`)
console.log(`O resultado da operação[${number6200} + (${number6200 / number65}) + (${number6200} / ${number62})] é: ${exercicio6(number62, number65, number6200)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 7
console.log('EXERCÍCIO 7')

const exercicio7 = function numbers7(number72, number73, number74) {
  let exer7 = (number73 ^ number74) * (number73 ^ (number72))
  return exer7 
}

let number72 = -2
let number73 = 3
let number74 = 4

console.log(`O 1º número é: ${number72}`)
console.log(`O 2º número é: ${number73}`)
console.log(`O 3º número é: ${number74}`)
console.log(`O resultado da operação (${number73} ^ ${number74}) * (${number73} * (${number72})) é: ${exercicio7(number72, number73, number74)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 8
console.log('EXERCÍCIO 8')

const exercicio8 = function number8(number83, number85, number86) {
  let exer8 = (number85 ^ (number83)) * number86
  return exer8
}

let number83 = -3
let number85 = 5
let number86 = 6

console.log(`O 1º número é: ${number83}`)
console.log(`O 2º número é: ${number85}`)
console.log(`O 3º número é: ${number86}`)
console.log(`O resultado da operação [(${number85} ^ (${number83})) * ${number86}] é: ${exercicio8(number83, number85, number86)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 9
console.log('EXERCÍCIO 9')

const exercicio9 = function numbers9(number93, number95, number97, number99) {
  let exer9 = ((number93 / number95) ^ number99) * ((number93 / number95) ^ number97)
  return exer9
}

let number93 = -3
let number95 = 5
let number97 = -7
let number99 = 9 

console.log(`O 1º número é: ${number93}`)
console.log(`O 2º número é: ${number95}`)
console.log(`O 3º número é: ${number97}`)
console.log(`O 4º número é: ${number99}`)
console.log(`O resultado da operação ((${number93} / ${number95}) ^ ${number99}) * ((${number93} / ${number95}) ^ ${number97}) é: ${exercicio9(number93, number95, number97, number99)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 10
console.log('EXERCÍCIO 10')

const exercicio10 = function numbers10(number103, number1012) {
  let exer10 = number103 * number1012
  return exer10
}

let number103 = 3
let number1012 = 12

console.log(`O 1º número é: ${number103}`)
console.log(`O 2º número é: ${number1012}`)
console.log(`O resultado da multiplicação (${number1012} * ${number103}) é: ${exercicio10(number103, number1012)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO11
console.log('EXERCÍCIO 11')

const exercicio11 = function numbers11(number111, number112) {
  let exer11 = number111 + number112
  return exer11
}

let number111 = 5
let number112 = 7

console.log(`O 1º número é: ${number111}`)
console.log(`O 2º número é: ${number112}`)
console.log(`A soma entre os dois é: ${exercicio11(number111, number112)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 12
console.log('EXERCÍCIO 12')

const exercicio12 = function numbers12(number121, number122) {
  let exer12 = number121 - number122
  return exer12
}

let number121 = 27
let number122 = 13

console.log(`O 1º número é: ${number121}`)
console.log(`O 2º número é: ${number122}`)
console.log(`O resultado dessa subtração é: ${exercicio12(number121, number122)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 13
console.log('EXERCÍCIO 13')

const exercicio13 = function numbers13(number131, number132) {
  let exer13 = number131 + number132
  return exer13
}

let number131 = -5
let number132 = 7

console.log(`O 1º número é: ${number131}`)
console.log(`O 2º número é: ${number132}`)
console.log(`O resultado da soma é: ${exercicio13(number131, number132)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 14
console.log('EXERCÍCIO 14')

const exercicio14 = function numbers14(number141, number142) {
  let exer14 = number141 + number142
  return exer14
}

let number141 = -13
let number142 = 4

console.log(`O 1º número é: ${number141}`)
console.log(`O 2º número é: ${number142}`)
console.log(`O resultado da soma é: ${exercicio14(number141, number142)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 15
console.log('EXERCÍCIO 15')

const exercicio15 = function numbers15(number151, number152) {
  let exer15 = number151 - number152
  return exer15
}

let number151 = -3
let number152 = -4

console.log(`O 1º número é: ${number151}`)
console.log(`O 2º número é: ${number152}`)
console.log(`O resultado da subtração é: ${exercicio15(number151, number152)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 16
console.log('EXERCÍCIO 16')

const exercicio16 = function numbers16(number161, number162) {
  let exer16 = number161 + number162
  return exer16
}

let number161 = -8
let number162 = 8

console.log(`O 1º número é: ${number161}`)
console.log(`O 2º número é: ${number162}`)
console.log(`O resultado da soma é: ${exercicio16(number161, number162)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 17
console.log('EXERCÍCIO 17')

const exercicio17 = function numbers17(number171, number172) {
  let exer17 = number171 + number172
  return exer17
}

let number171 = -8
let number172 = 6

console.log(`O 1º número é: ${number171}`)
console.log(`O 2º número é: ${number172}`)
console.log(`O resultado da soma é: ${exercicio17(number171, number172)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 18
console.log('EXERCÍCIO 18')

const exercicio18 = function numbers18(number181, number182) {
  let exer18 = number181 + number182
  return exer18
}

let number181 = -5
let number182 = 2

console.log(`O 1º número é: ${number181}`)
console.log(`O 2º número é: ${number182}`)
console.log(`O resultado da subtração é: ${exercicio18(number181, number182)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 19
console.log('EXERCÍCIO 19')

const exercicio19 = function numbers19(number191, number192) {
  let exer19 = number191 + number192
  return exer19
}

let number191 = -17
let number192 = 8

console.log(`O 1º número é: ${number191}`)
console.log(`O 2º número é: ${number192}`)
console.log(`O resultado da subtração é: ${exercicio19(number191, number192)}`)
console.log('==================================================================')
// =====================================================

// EXERCÍCIO 20
console.log('EXERCÍCIO 20')

const exercicio20 = function numbers20(number201, number202) {
  let exer20 = number201 * number202
  return exer20
}

let number201 = 9
let number202 = 9

console.log(`O 1º número é: ${number201}`)
console.log(`O 2º número é: ${number202}`)
console.log(`O resultado da subtração é: ${exercicio20(number201, number202)}`)
console.log('==================================================================')
// =====================================================