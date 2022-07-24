import React from 'react'
import axios from "axios";

function ItemForm() {
    const handleClick =()=>{
        axios.post('http://localhost:8080/items', {
            id: "4",
            name: "mango",
            description: "here is mango"
        }).then(response=>response.data).then(
            // todo add item to state
        )
    }
    return(
        <div>
            <form className="new-item">
                <input
                    type="text"
                    id="new-item-input"
                    placeholder="Which item do you want to add?"/>
                <input
                    onclick={handleClick}
                    type="submit"
                    id="new-item-submit"
                    value="Add in Shopping Cart"
                />
            </form>
        </div>
    )
}

export default ItemForm;