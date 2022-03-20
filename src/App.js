import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Header from "./components/Header";
import { data } from "./models/data.json";
import About from "./components/About";
import Styles from "./components/Styles.css";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [itemsCountPerPage, setItemsPerPage] = useState([]);
  

  const findProducts = async (value) => {
    const url = `https://itunes.apple.com/search?term= ${value} &limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json()); 
    if (!results.error) {
      setProducts(results.results);
      console.log("ke", results.results);
    }
  };

  

  const addToBasket = (id) => {
    
    const item = products.find((product) => product.trackId === id);
    
    let newBasket = basket;
    
    newBasket.push(item);
    

    setBasket(newBasket);
  };

  const removeFromBasket = (id) => {
    console.log(" remove from basket", id);
    let newBasket = basket;
    const result = newBasket.filter((basketItem) => basketItem.trackId !== id);
    setBasket(result);
  };

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div className="App">
            <header className="App-header">
              <Header />
              <Search findProducts={findProducts} />
              {basket.length > 0 && (
                <p> you have {basket.length} items in the basket</p>
              )}
              <ProductList
                data={products}
                addToBasket={addToBasket}
                products={products}
                stored="library"
                setItemsPerPage={setItemsPerPage}
                itemsCountPerPage={itemsCountPerPage}
              />
            </header>
          </div>
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route
        exact
        path="/basket"
        render={() => (
          <Basket basket={basket} removeFromBasket={removeFromBasket} />

          
        )}
      />
      
    </Router>
  );
}

export default App;
