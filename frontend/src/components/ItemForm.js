import React, {useState} from 'react'
import axios from "axios";

function ItemForm() {
    const [input, setInput] = useState('');
    const handleClick =()=>{
        axios.post('http://localhost:8080/items', {
            name: "test",
            description: "here is test"
        }).then(response=>response.data).then(
            // todo add item to state
        )
    }

    return(
        <div>
            <form className="new-item" >
                <input
                    type="text"
                    id="new-item-input"
                    placeholder="Which item do you want to add?"
                    value={input}
                />
             <button className='add-button' onClick={handleClick}>Add in Shopping Cart</button>
            </form>
        </div>
    )
}

export default ItemForm;