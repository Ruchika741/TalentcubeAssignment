import React, { useState, useEffect } from 'react';
import './App.css';
import ItemList from './components/product-list';
import ItemForm from './components/item-form';


function App() {

  const [items, setItems ]= useState([]);
  const [selectedItem, setSelectedItem ] = useState(null);
  const [editedItem, setEditedItem ] = useState(null);
  

  useEffect(() =>{
    fetch("http://127.0.0.1:8000/items/shops/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ec4c2acc6035f646a983f135d51362ca48214cd8'
      }
    })
    .then(resp => resp.json())
    .then(resp => setItems(resp))
    .catch(error => console.log(error))
  },[])

  

  const itemClicked = item => {
    setSelectedItem(item);
    setEditedItem(null);
  
  }

 const newItem = () => {
    console.log('edit')
    setEditedItem({name:"", description:"",price:""})
    setSelectedItem(null);
  }
// to append the new item created with rest of the items
  const itemCreated = item => {
    const newItems= [...items,item]
    setItems(newItems);
  }

  const removeClicked = item => {
    const newItems = items.filter( it => it.id !== item.id);
    setItems(newItems)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List</h1>
        
      </header>
      <div className= "Layout">
        <div>
            <button onClick= {newItem}>New Item</button>
          </div>
          
            <ItemList items={items} itemClicked= {itemClicked} removeClicked= {removeClicked}/>
            
            { editedItem ? 
            <ItemForm item ={editedItem}  itemCreated= {itemCreated}/>
            : null}
      </div>
    
    </div>  
  );
}

export default App;
