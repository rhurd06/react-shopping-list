import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import GroceryForm from '../GroceryForm/GroceryForm'
import GroceryList from '../GroceryList/GroceryList';
import Reset from '../Reset/Reset';
import './App.css';

function App() {

    let [groceryList, setGroceryList] = useState([]);
    let [newGroceryItem, setNewGroceryItem] = useState('');
    let [newQuantity, setNewQuantity] = useState('');

    const getShoppingList = () => {
        axios.get('/list')
        .then(response => {
            setGroceryList(response.data)
        })
        .catch(err => {
            alert('error getting groceries');
            console.log(err);
        })
    }


    //on load, get groceries
    useEffect(() => {
        getShoppingList()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newGroceryItem) {
            addGroceries();
        }
        else {
            alert('The new grocery item needs a name');
        }
    }

    const addGroceries = () => {
        axios.post('/list', {name: newGroceryItem, quantity: newQuantity})
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
                <GroceryForm 
                    newGroceryItem={newGroceryItem}
                    setNewGroceryItem={setNewGroceryItem}
                    newQuantity={newQuantity}
                    setNewQuantity={setNewQuantity}
                    handleSubmit={handleSubmit}
                />
                <GroceryList list={groceryList} />
                <Reset />
            </main>
        </div>
    );
}

export default App;
