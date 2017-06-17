export function addToCart(item) {
    console.log('adding item:', item);
    return {type: 'ADDTOCART', item};
}