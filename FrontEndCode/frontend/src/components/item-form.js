import React, { useEffect, useState } from 'react';
import { API } from '../api-service';


function ItemForm(props) {
    let flip = true;   
    const [name, setName] = useState(props.item.name);
    const [description, setDescription] = useState(props.item.description);
    const [price, setPrice] = useState(props.item.price);
    const [toRender, setToRender] = useState(flip);
    // const [user_id, setUser_Id] = useState(props.item.user_id)
    // const [item_image, setItem_Image] = useState(props.item.item_image)

 
const createClicked = () => {
        console.log(name + '' + description + '' + price);
        flip = !flip;
        setToRender(flip);
        API.createItem({name, description,price})
        .then(resp => props.itemCreated(resp))
        .catch(error => console.log(error))
    }

useEffect (() => {
    setToRender(true);
},[props.item])

    return (
        <React.Fragment>
            { props.item && toRender ? (
              <div key= {props.item.id}>
                 <label htmlFor="name">Name</label><br />
                <input id= "name" type= "text" placeholder= "name" value= {name}
                    onChange= { evt => setName(evt.target.value)}
                        /><br />
                <label htmlFor="description">Description</label><br />
                <textarea id= "description" type= "text" placeholder= "description" value= {description}
                    onChange= { evt => setDescription(evt.target.value)}
                        /><br />
                <label htmlFor="price">Price</label><br />
                <input id= "price" type= "text" placeholder= "price" value= {price}
                    onChange= { evt => setPrice(evt.target.value)}
                        /><br />
                {/* <label htmlFor="item_image">Item_image</label><br />
                <input id= "item_image" type= "text" placeholder= "item_image" value= {item_image}
                    onChange= { evt => setItem_Image(evt.target.value)}
                        /><br /> */}
                
                <button onClick= {createClicked}>Create</button>
               
              </div>
    ):null}
        </React.Fragment> 
    )
}

export default ItemForm;