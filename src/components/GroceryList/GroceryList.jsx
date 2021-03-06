import GroceryItem from '../GroceryItem/GroceryItem';

function GroceryList(props){
    console.log('GroceryList props are:', props);
    return(
        <>
            <h2>Shopping List</h2>
            <ul>
                {props.list.map(item => 
                    (<GroceryItem key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        purchased={item.purchased} />)
                )}
            </ul>
        </>
    )
}
export default GroceryList;