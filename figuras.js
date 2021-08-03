//Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log('El area del cuadrado es: ' + areaCuadrado + "cm²")
console.groupEnd()

//Codigo del triagulo
console.group("Triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

console.log(
    "Los lados del triangulo miden: " 
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm")

const alturaTriangulo = 5.5
console.log("La altura del triangulo es de: " 
+ alturaTriangulo)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El area del triangulo es: " + areaTriangulo + 'cm²')

console.groupEnd()

//Codigo del circulo
console.group("Circulos")

//Radio
const radioCirculo = 4
console.log("radio circulo es " + radioCirculo + "cm")

//Diametro
const diametroCirculo = radioCirculo * 2
console.log("Diametro del circulo es " + diametroCirculo + 'cm')

//PI
const PI = Math.PI 
console.log("PI es: " + PI)

//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("El perimetro del Ciruclo es: " + Math.floor(perimetroCirculo)  + "Cm")

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El area del circulo es: " + areaCirculo + "Cm")

console.groupEnd()