import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import data from "./data.json";
import { useState } from "react";
import Products from "./Components/Products/Products";
import Filters from "./Components/Filters/Filters";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterSize = (e) => {
    setSize(e.target.value);

    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let newProducts = data.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterSort = (e) => {
    let value = e.target.value;
    setSort(value);

    let sortedProducts = [...products]; // clone current filtered products

    sortedProducts.sort((a, b) => {
      if (value === "lowest") {
        return a.price - b.price;
      } else if (value === "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1; // default sorting
      }
    });

    setProducts(sortedProducts);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filters
            handleFilterSize={handleFilterSize}
            size={size}
            handleFilterSort={handleFilterSort}
            sort={sort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
