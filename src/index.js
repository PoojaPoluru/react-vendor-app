import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './js/productList';





const App=()=>{
        return(
    <div className="main ui text container">
      <h1 className="ui dividing centered header">Popular Products</h1>
      <div className="content"><ProductList /></div>
    </div>
        );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);