//Formula
// Precio * (100 - Descuento) / 100

calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento es $" + precioConDescuento
}

const coupons = [
    "Bruce_es_Batman",
    "pero_no_lo_cuentes",
    "es_un_secreto",
]

onClickButtonCoupon = () => {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value

    let descuento

    if (!coupons.includes(couponValue)) {
        alert("El cupon " + couponValue + " no es valido")
    } else if (couponValue === "Bruce_es_Batman") {
            descuento = 15
    } else if (couponValue === "pero_no_lo_cuentes") {
        descuento = 30
    } else if (couponValue === 'es_un_secreto') {
        descuento = 25
    }


    // switch (couponValue) {
    //     case "Bruce_es_Batman":
    //         descuento = 15
    //         break;
    //     case "pero_no_lo_cuentes":
    //         descuento = 30
    //         break;
    //     case "es_un_secreto":
    //         descuento = 25
    //         break;
    // }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento de cupon es $" + precioConDescuento
    
}