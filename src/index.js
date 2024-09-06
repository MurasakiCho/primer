export function calculateTotal (items, tax) {
  // TODO
  let total = 0;

  for(let i = 0; i < items.length; i++) {
    if(items[i].taxable){
      total += (items[i].price + (Math.abs(items[i].price * tax)))
    } else{
      total += items[i].price
    }
  }

  return total;
}