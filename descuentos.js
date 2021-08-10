//Formula
// Precio * (100 - Descuento) / 100

calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

