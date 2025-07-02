import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import data from './data.json'
import { useState } from "react";
import Products from "./Components/Products/Products";

function App() {
  const [products, setProducts] = useState(data)
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products}/>
          <div className="filters">Filters</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
