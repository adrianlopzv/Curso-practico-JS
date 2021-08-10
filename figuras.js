//Codigo del cuadrado
console.group("Cuadrados")

// const ladoCuadrado = 5
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm")

perimetroCuadrado = lado =>  lado * 4
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado)

areaCuadrado = lado => lado * lado
// console.log('El area del cuadrado es: ' + areaCuadrado + "cm²")
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

perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

areaTriangulo = (base, altura) => (base * altura) / 2

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log("El area del triangulo es: " + areaTriangulo + 'cm²')

console.groupEnd()

//Codigo del circuloª
console.group("Circulos")

//Radio
// const radioCirculo = 4
// console.log("radio circulo es " + radioCirculo + "cm")

//Diametro
diametroCirculo = radio => radio * 2

//PI
const PI = Math.PI 
console.log("PI es: " + PI)

//Circunferencia
perimetroCirculo = radio => { 
    const diametro = diametroCirculo(radio) 
    return diametro * PI
}
// const perimetroCirculo = diametroCirculo * PI
// console.log("El perimetro del Ciruclo es: " + Math.floor(perimetroCirculo)  + "Cm")

//Area
areaCirculo = radio => (radio * radio) * PI

console.groupEnd()

//Interaccion con HTML
calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}

