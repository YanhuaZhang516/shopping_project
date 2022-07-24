import React from 'react';
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import ItemProvider from "./store/ItemProvider";
function App(){

    return(
        <div className="app">
            <h1>Here is Shopping cart!</h1>
            <ItemProvider>
                <ItemForm></ItemForm>
                <ItemList></ItemList>
            </ItemProvider>
        </div>
    );
}

export default App;