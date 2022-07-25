import React, {useContext, useState} from 'react';
import axios from "axios";
import {ItemContext} from "../store/ItemProvider";

function Item(props) {
    const [Item,setItem] = useState('');
    const { deleteItem } = useContext(ItemContext)

    const deleteHandler = (e)=> {
        console.log(e.target.parentNode.parentNode.id)
        let id = e.target.parentNode.parentNode.id;
        axios.delete('http://localhost:8080/items',{params:{id:id}})
            .then(response => console.log(response))
    }

    return(
        <div className="item" id={props.id}>
            <div className="content">
                {props.name}
            </div>
            <div className="description">
                {props.description}
            </div>
            <div className="actions">
                <button className="edit">Edit</button>
                <button className="delete"  onClick={deleteHandler} >Delete</button>
            </div>
        </div>
    )
}

export default Item;