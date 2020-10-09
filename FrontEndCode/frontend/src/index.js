import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemDetails from './components/product-details';
import ItemView from './components/Image';
// import itemClicked from './App/itemClicked';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path = "/" component ={App} />
        <Route exact path = "/productview" component ={ItemDetails} />
        {/* <Route exact path = "/imageview" component ={ItemView} /> */}
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Router/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
