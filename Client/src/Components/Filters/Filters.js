import '../../Css/Filters/Filters.css'

function Filters() {
  return (
    <div className="filters">
      <h2 className="filters-title">Filters</h2>
      <div className="num-of-products">Number of products 4</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select">
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
            <option value="lowest">Lowest</option>
            <option value="lowter">Lowter</option>
            <option value="latest">Latest</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
