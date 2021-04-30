function GroceryItem({name, quantity, purchased}){
    //console.log('Shopping list item props are:', props);
    return(
        <li>{name} {quantity} {purchased}</li>
    )
}

export default GroceryItem;