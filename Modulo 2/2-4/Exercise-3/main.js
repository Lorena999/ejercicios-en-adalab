'use strict'
const price = 1000;


function taxIva (price) {
  const iva = price * 0.21;
  const priceTotal = price + iva;
  return `El precio sin IVA es: ${price} , el IVA es: ${iva}, y el total es: ${priceTotal}`;
}
const result = taxIva(price);
console.log(result);
