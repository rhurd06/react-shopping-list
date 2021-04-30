import React, { useEffect, useState } from 'react';

import Header from '../Header/Header.jsx'
import GroceryForm from '../GroceryForm/GroceryForm'


import './App.css';



function App() {

    let [newGroceryItem, setNewGroceryItem] = useState('');
    let [newQuantity, setNewQuantity] = useState('');

    //on load, get groceries
    useEffect(() => {
        getShoppingList()
    }, [])

    const handleSubmit = (event) => {
        if (newGroceryItem) {
            addGroceries();
        }
        else {
            alert('The new grocery item needs a name');
        }
    }

    const addGroceries = () => {
        axios.post('/groceries', {name: newGroceryItem, quantity: newQuantity})
            .then(response => {
                //clear inputs
                setNewGroceryItem('');
                setNewQuantity('');
                getShoppingList();
            })
            .catch(err => {
                alert('error adding grocery item');
                console.log(err);
            })
    };//end addGroceries

    return (
        <div className="App">
            <Header />
            <main>
                <GroceryForm />

            </main>
        </div>
    );
}

export default App;
