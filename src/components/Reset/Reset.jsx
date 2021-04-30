import React from 'react';
import axios from 'axios';


function Reset(props) {
    const resetList = () => {
        axios.put('/Reset')
        .then(response => {
            props.GroceryItem();
        })
        .catch(error => {
            console.log('Error restting', error);
            alert('CANNOT RESET DATA')
        })
    }

    const clearList = () => {
        axios.delete('/Reset')
        .then(response => {
            props.GroceryItem();
        })
        .catch(error => {
            console.log('Error clearing', error);
            alert('CANNOT CLEAR DATA')
        })
    }

    return (
        <div> 
            <h2>Shopping List: </h2> 
            <button onClick={resetList}>Reset</button>
            <button onClick={clearList}>Clear</button>
        </div>
            
    )
}

export default Reset;