import React from 'react';
import ItemForm from "./components/ItemForm";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
function App(){

    return(
        <div className="app">
            <h1>Here is Shopping cart!</h1>
            <ItemForm></ItemForm>
            <ItemList></ItemList>
        </div>
    );
}

export default App;