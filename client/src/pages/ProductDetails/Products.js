import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import slide1 from "../../assets/slides/slide1.png";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";
import slide5 from "../../assets/slides/slide5.jpg";
import slide6 from "../../assets/slides/slide6.jpg";
import category1 from "../../assets/category/category1.png";
import category2 from "../../assets/category/category2.png";
import category3 from "../../assets/category/category3.png";
import category4 from "../../assets/category/category4.png";
import HomeNav from "../../components/HomeComponents/HomeNav";

const Products = () => {
  const [products, setProducts] = useState([]);
  const bannerSlider = [slide1, slide2, slide3, slide4, slide5, slide6];
  const categorySlider = [
    { categoryImg: category1, categoryName: "Hoodie" },
    { categoryImg: category2, categoryName: "Tshirt" },
    { categoryImg: category3, categoryName: "Tshirt" },
    { categoryImg: category4, categoryName: "Hoodie" },
    { categoryImg: category1, categoryName: "Hoodie" },
    { categoryImg: category2, categoryName: "Tshirt" },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/testProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col">
      <HomeNav></HomeNav>
      <section>
        <div>
          <h2>Zara Fashion</h2>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="carousel carousel-center w-full p-2 space-x-2 h-36 md:h-96">
          {bannerSlider.map((slider, i) => (
            <div key={i} className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <section>
          <div className="flex flex-row overflow-auto over p-2">
            {categorySlider.map((slider, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center carousel-item bg-gray-400 rounded-md p-4 m-2 h-10 w-10 md:h-52 md:w-52"
              >
                <Link to={`/subCategory/${slider.categoryName}`}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={slider.categoryImg}
                      className="rounded-box h-8 w-8"
                      alt=""
                    />
                    <p className="">{slider.categoryName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>
      {products.map((product, i) => (
        <Product key={i} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
