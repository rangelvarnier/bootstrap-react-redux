export function cart(state = [], action){
    if(action.type === 'ADDTOCART'){
        return [...state, action.item];
    }
    return state;
}