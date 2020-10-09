import React from 'react';

function ItemDetails(props) {

    let item = props.location.state.desc;

    return (
        <div className="App">
            <h1> Item details </h1>
            
            { item? (
                <div  key={item.id} className= "name">
                    <p>Name : {item.name}</p>
                    <p>Description : {item.description}</p>
                    <p>Price : {item.price} $</p> 
                </div>
           ):null}
        </div>
    )
}

export default ItemDetails; 



