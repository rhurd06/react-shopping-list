function GroceryForm(props){
    return (
        <>
            <h2>Add an Item</h2>
            <form onSubmit={props.handleSubmit}>
            </form>
        </>
    )
}//end GroceryForm

export default GroceryForm;