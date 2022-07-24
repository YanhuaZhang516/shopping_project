import React, {useContext, useState} from 'react'
import axios from "axios";
import {ItemContext} from "../store/ItemProvider";

function ItemForm() {
    const [newItem,setNewItem] = useState('');
    const { addItem } = useContext(ItemContext);
    const handleClick =()=>{
        axios.post('http://localhost:8080/items', {
            name: newItem,
            description: "here is test"
        })
            .then(response=>response.data)
            .then((data) =>{
                addItem(data);
            }
        )
    }

    return(
        <div>
            <form className="new-item" >
                <input
                    value = {newItem}
                    onChange = {(e)=>setNewItem(e.target.value)}
                    type="text"
                    id="new-item-input"
                    placeholder="Which item do you want to add?"
                />
             <button className='add-button' onClick={handleClick}>Add in Shopping Cart</button>
            </form>
        </div>
    )
}

export default ItemForm;