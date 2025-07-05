import "../../Css/Cart/Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>
          {props.cartItems.length === 0
            ? "Empty Cart"
            : `There ${props.cartItems.length === 1 ? "is" : "are"} ${
                props.cartItems.length
              } ${
                props.cartItems.length === 1 ? "product" : "products"
              } in your cart`}
        </h3>
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="cart-info">
              <div>
                <p>Product Name: {item.title}</p>
                <p>Qty: {item.qty}</p>
                <p>Product Price: $ {item.price}</p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
