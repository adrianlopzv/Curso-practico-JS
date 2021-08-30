const lista1= [
    1,
    2,
    3,
    1,
    1,
    1,
    2,
    2,
    4,
    2,
    3,
    3,
    3,
    3,
    2,
    2,
]
const lista1Count = {}

lista1.map(
    (elemento) => {
    if (lista1Count[elemento]) { 
        lista1Count[elemento] += 1
    } else {
    lista1Count[elemento] = 1
    }
}
)

const lista1Array = Object.entries(lista1Count).sort(
    (elementoA, elementoB) => {
        return elementoA[1] - elementoB[1]
    }
)

const moda = lista1Array[lista1Array.length - 1]