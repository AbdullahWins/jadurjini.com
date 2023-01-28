import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const { addToCart } = useContext(AuthContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <p>
          <Link to={`/category/${product.productCategory}`}>
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </p>
        <div className="flex gap-4">
          <p>
            <Link to="/cart">
              <i className="fa-solid text-xl fa-bag-shopping"></i>
            </Link>
          </p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center">
          <img className="w-full rounded-xl" src={product.productImage} alt="" />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="opacity-50">{product.productCategory}</p>
            <p className="text-xl font-bold">{product.productName}</p>
          </div>
          <div className="text-end">
            <p>
              <i className="fa-solid fa-star text-amber-500"></i>
              {product.productRating}
            </p>
            <p className="font-bold">BDT {product.productPrice}</p>
          </div>
        </div>
      </section>
      <section>
        <p>Size:</p>
        <div className="btn-group">
          <input type="radio" name="options" data-title="M" className="btn" />
          <input
            type="radio"
            name="options"
            data-title="L"
            className="btn"
            defaultChecked
          />
          <input type="radio" name="options" data-title="XL" className="btn" />
        </div>
      </section>
      <section className="py-4">
        <p className="font-bold">Description:</p>
        <p>{product.productDescription}</p>
      </section>
      <p className="h-20"></p>
      <section
        className="fixed
             inset-x-0
             bottom-0 flex items-center justify-between p-4 bg-white md:max-w-6xl m-auto"
      >
        <p>
          <i className="fa-regular fa-bookmark"></i>
        </p>
        <div className="flex justify-around gap-4">
          <button
            onClick={handleAddToCart}
            className="btn bg-gradient-to-r from-orange-500 to-red-600 border-none"
          >
            Add To Cart
          </button>
          <button className="btn bg-gradient-to-r from-purple-600 to-red-600 border-none">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
