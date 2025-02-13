import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Product({ product, addCart, addHeart }) {
  const { new: newPrice, old: oldPrice } = product.price;


  return (
    <>
      <div className="card">
        <div className="card-img">
          {product.sale && <span className="sale">-{product.sale}%</span>}
          <span
            className="card-heart"
            onClick={() => {
              addHeart(product.id);
              
            }}
          >
            <FaRegHeart />
          </span>
          <span className="card-eye">
            <IoEyeOutline />
          </span>

          <NavLink to={`/oneproduct/${product.id}`}>
            <img src={product.image} alt="" />
          </NavLink>
          <button onClick={() => addCart(product.id)} className="card-btn">
            Add To Cart
          </button>
        </div>
        <div className="card-info">
          <h4>{product.title}</h4>
          <div className="price">
            <p className="newProduct">${newPrice}</p>
            {oldPrice && <p className="oldProduct">${oldPrice}</p>}
          </div>
          <div className="star">
            <img src="/images/Five star.svg" alt="" />
            (88)
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
