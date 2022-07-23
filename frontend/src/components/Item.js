import React, {useState} from 'react';

function Item(props) {
    const [item, setItem] = useState('');
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
                <button className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Item;