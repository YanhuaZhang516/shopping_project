import React, {createContext, useEffect, useState} from 'react';
import {fetchItems} from '../api/fetchItems';
import item from "../components/Item";

export const ItemContext = createContext(null);
const ItemProvider = ({ children })=> {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems().then((data) => {
            setItems(data);
        });
    }, []);

    const addItem = (item) =>{
        setItems([...items, item]);
    }
    return (
        <ItemContext.Provider value={{items,addItem}}>{children}</ItemContext.Provider>
    );
}
export default ItemProvider;