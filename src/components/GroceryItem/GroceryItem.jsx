function GroceryItem({name, quantity}){
    //console.log('Shopping list item props are:', props);
    return(
        <li>{name} {quantity}</li>
    )
}

export default GroceryItem;