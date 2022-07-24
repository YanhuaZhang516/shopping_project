import React, {createContext, useEffect, useState} from 'react';
import {fetchItems} from '../api/fetchItems';

export const ItemContext = createContext(null);
const ItemProvider = ({ children })=> {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetchItems().then((data) => {
            setItems(data);
        });
    }, []);
    return (
        <ItemContext.Provider value={items}>{children}</ItemContext.Provider>
    );
}
export default ItemProvider;