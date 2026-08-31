let productPrices=[234,435,2345,235,45,32];
let discountedPrices=productPrices.map(discount=>discount%10);
console.log(discountedPrices);