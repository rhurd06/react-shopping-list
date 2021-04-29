import React, { useState } from 'react';

import Header from '../Header/Header.jsx';
import GroceryList from '../GroceryList/GroceryList';

import './App.css';


function App() {
    const [groceryList, setGroceryList] = useState([]);

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
