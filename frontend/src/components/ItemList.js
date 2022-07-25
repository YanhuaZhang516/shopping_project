import React, {useContext} from 'react'
import Item from './Item'
import {ItemContext} from "../store/ItemProvider";

function ItemListComponent() {

    const { items } = useContext(ItemContext);
    return (<div>
            <h2>Items in shopping cart</h2>
            {items.map((item) => (<Item name={item.name} id={item.id} description={item.description}></Item>))}
        </div>)

}

export default ItemListComponent