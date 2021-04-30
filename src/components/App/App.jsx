import React, { useState } from 'react';

import Header from '../Header/Header.jsx';
import GroceryList from '../GroceryList/GroceryList';

import './App.css';


function App() {
    const [groceryList, setGroceryList] = useState([]);

    const getShoppingList = () => {
        axios.get('/groceries')
        .then(response => {
            setGroceryList(response.data)
        })
        .catch(err => {
            alert('error getting groceries');
            console.log(err);
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <GroceryList list={groceryList} />
            </main>
        </div>
    );
}

export default App;
