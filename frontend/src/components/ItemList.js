import React, {useEffect, useState} from 'react'
import Item from './Item'
import axios from 'axios'
function ItemListComponent() {
    const [items,setItems] = useState([])
    useEffect( ()=> {
        axios.get('http://localhost:8080/items')
            .then((response)=> response.data)
            .then((data)=> {
                setItems(data);
            });
        },[]);

    return(
        <div>
            <h2>Items in shopping cart</h2>
            {items.map((item) => (
                <Item name={item.name} id={item.id} description={item.description}></Item>
            ))}
        </div>
    )

}

export default ItemListComponent