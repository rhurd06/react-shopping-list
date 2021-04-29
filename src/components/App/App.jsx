import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import GroceryForm from '../GroceryForm/GroceryForm'


import './App.css';



function App() {

    let [newGroceryItem, setNewGroceryItem] = useState('');
    let [newQuantity, setNewQuantity] = useState('');

    const handleSubmit

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
