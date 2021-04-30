function GroceryForm(props){
    return (
        <>
            <h2>Add an Item</h2>
            <form onSubmit={props.handleSubmit}>
                <label>Item:</label>
                <input
                    type="text"
                    value={props.newGroceryItem}
                    onChange={(evt) => props.setNewGroceryItem(evt.target.value)}
                />
                <label>
                    Quantity:
                </label>
                <input
                    type="text"
                    value={props.newQuantity}
                    onChange={(evt) => props.setNewQuantity(evt.target.value)}
                />
                <button type="save">Save</button>
            </form>
        </>
    )
}//end GroceryForm

export default GroceryForm;