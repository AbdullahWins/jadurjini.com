import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // const productInfo = {
  //   productName: "Akashfrtgerter",
  //   shopName: "AkashShop",
  //   shopLocation: "Dhaka",
  //   shopImage: "https://jsonformatter.org/img/tom-cruise.jpg",
  // };
  // const click = () => {
  //   const url = "https://jadurjini.vercel.app/addproduct";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(productInfo),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // };
  // click();
  return (
    <div>
      <Link to={`/products/${product._id}`}>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-32 w-48 md:h-96 md:w-full"
              src={product.productImage}
              alt="foods again"
            />
          </figure>
          <div className="card-body p-2">
            <p className="font-bold">{product.productName}</p>
            <p>BDT {product.productPrice}</p>
            <p>{product.productCategory}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
