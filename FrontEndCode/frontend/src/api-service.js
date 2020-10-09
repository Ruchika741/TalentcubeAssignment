const TOKEN= "ec4c2acc6035f646a983f135d51362ca48214cd8";

export class API {

    static createItem(body) {
      // console.log(body)
      return fetch("http://localhost:8000/items/shops/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify(body),
     
    })
    
    .then(resp => resp.json())
    
    
    }

    static deleteItem(item_id) {
      return fetch(`http://127.0.0.1:8000/items/shops/${item_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          //   Add a back tick below
            'Authorization': `Token ${TOKEN}`
          },
        })
        }
  }


   