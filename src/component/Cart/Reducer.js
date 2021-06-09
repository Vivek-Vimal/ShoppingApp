
const Reducer = (state, action) => {    //console.log(state) //console.log(state.shoppingCart) 
    const {shoppingCart, quantity, cost} = state;  //destructing
    
    let currentItem
    let updatedPrice
    let updatedQuantity
    let index

    switch(action.type){
        case 'ADD':
            if(shoppingCart.find(e => e.id === action.ID)){
                return state
            }
             else{
                currentItem = action.eachWholeProduct
            
                                           // qty yaha add kyu kiye vro?? kyuki cart m total quantiy dikha sake //solved
                currentItem['qty'] = 1     // Yaha jo item tha n eachWholeProduct usme add kiye h 'quantity' jaise ki id,price etc hai n waise hi
                updatedQuantity = quantity + 1     
                updatedPrice = cost + action.eachWholeProduct.price
                return{ shoppingCart :[currentItem, ...shoppingCart], quantity:updatedQuantity, cost:updatedPrice }
            }   
        case 'CLEAR':
            return{
                shoppingCart: [], quantity:0, cost: 0    
            }
        case 'INCREASE':
            currentItem = action.currentWholeProduct
            currentItem.qty = currentItem.qty +1 
            updatedQuantity = quantity + 1
            updatedPrice = cost + currentItem.price
            index = shoppingCart.findIndex( s => s.id === action.ID) // why ????
            shoppingCart[index] = currentItem
            return{
                shoppingCart: [...shoppingCart], quantity: updatedQuantity, cost: updatedPrice
            }
        case 'DECREASE':
            currentItem = action.currentWholeProduct
            if(currentItem.qty > 1){
                currentItem.qty = currentItem.qty -1
                updatedQuantity = quantity - 1
                updatedPrice = cost -(currentItem.price)
                index = shoppingCart.findIndex(s => s.id === action.ID) // same as above why ??
                shoppingCart[index] = currentItem
                return {
                    shoppingCart: [...shoppingCart], quantity: updatedQuantity, cost: updatedPrice
                }
            }
            else{
                return state
            }

        case 'REMOVE':
            let arrAfterRemove // pehle arrAfterRemove = [], phire assign kiye tou error kyu aa rha h???
            arrAfterRemove= shoppingCart.filter(s => s.id !== action.ID) // filter ek new array return krta h jisme ki jo condition hua hota h uski ko return kr deta h
            currentItem = action.currentWholeProduct
            updatedQuantity = quantity - (currentItem.qty)
            updatedPrice = cost - (currentItem.price * currentItem.qty)
            return {
                shoppingCart: [...arrAfterRemove], quantity: updatedQuantity, cost: updatedPrice
            }
        default:
            return state    
    }
}

export default Reducer

