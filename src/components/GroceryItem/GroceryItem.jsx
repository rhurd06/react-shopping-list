function GroceryItem({name, quantity, purchased}){
    //console.log('Shopping list item props are:', props);

    return(
        <div>
            <li>{name} {quantity} {purchased}</li>
            <button type="submit">Buy Item</button>
            <button type="remove">Remove Item</button>
        </div>
    )
}

export default GroceryItem;