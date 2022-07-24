import React, {useEffect, useState} from 'react'
import Item from './Item'
import {tasks} from "../api/Tasks";

function ItemListComponent() {
    const [items, setItems] = useState([])
    useEffect(() => {
        tasks().then((data) => {
            setItems(data);
        });
    }, []);

    return (<div>
            <h2>Items in shopping cart</h2>
            {items.map((item) => (<Item name={item.name} id={item.id} description={item.description}></Item>))}
        </div>)

}

export default ItemListComponent