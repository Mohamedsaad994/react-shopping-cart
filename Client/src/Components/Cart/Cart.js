import "../../Css/Cart/Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Empty Cart</h3>
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="cart-info">
              <div>
                <p>{item.title}</p>
                <p>Qty</p>
                <p>$ {item.price}</p>
              </div>
              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
