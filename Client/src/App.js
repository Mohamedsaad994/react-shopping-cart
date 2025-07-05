import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import data from "./data.json";
import { useEffect, useState } from "react";
import Products from "./Components/Products/Products";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

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

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }

    setCartItems(cartItemsClone);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];

    const updatedCart = cartItemsClone
      .map((p) => {
        if (p.id === product.id) {
          if (p.qty > 1) {
            return { ...p, qty: p.qty - 1 }; // decrement qty
          }
          return null; // mark for removal
        }
        return p;
      })
      .filter(Boolean); // remove nulls (products with qty === 0)

    setCartItems(updatedCart);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <Filters
            handleFilterSize={handleFilterSize}
            size={size}
            handleFilterSort={handleFilterSort}
            sort={sort}
          />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
