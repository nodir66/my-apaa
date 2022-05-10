import React from "react"
import './App.css';
import { Product } from './components/product/indexx.jsx';
import { Order } from './components/order/order.jsx';
import { Delivery } from './components/delivery/delivery.jsx';
import { Adreas } from './components/adreas/adreas.jsx'
import { Fruit } from './components/fruit/fruit.jsx'

function App() {
  return (
    <div className="App">
      <Product/>
      <Order/>
      <Delivery/>
      <Adreas/>
      <Fruit/>

    </div>
  );
}

export default App;
