import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { API } from '../api-service';
import { Link} from 'react-router-dom';

function ItemList(props) {

    const removeClicked = item => {
      API.deleteItem(item.id)
      .then(() => props.removeClicked(item))
      .catch(error => console.log(error))
  }

    return (
        <div className= "list-item">
            { props.items && props.items.map( item => {
              return (
                <div key = {item.id} className= "Color-of-list">
                
                 <Link to={ {pathname : "/productview", state: { desc : item} } } >{item.name} </Link>
                 <inline>{item.price}$ </inline>
                 <Link to={`${item.item_image}`} ></Link>
                <FontAwesomeIcon icon = { faTrash } onClick= {() => removeClicked(item)}/>
              
                </div>
              )
            })}
        </div>
    )
}

export default ItemList;