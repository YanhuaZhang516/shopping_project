import React from 'react'

function ItemForm() {
    return(
        <div>
            <form className="new-item">
                <input
                    type="text"
                    id="new-item-input"
                    placeholder="Which item do you want to add?"/>
                <input
                    type="submit"
                    id="new-item-submit"
                    value="Add in Shopping Cart"
                />
            </form>
        </div>
    )
}

export default ItemForm;