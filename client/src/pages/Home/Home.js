import React, { useEffect, useState } from "react";
import HomeNav from "../../components/HomeComponents/HomeNav";
import BottomNav from "../../components/HomeComponents/BottomNav";
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
import { Link } from "react-router-dom";

const Home = () => {
  const bannerSlider = [slide1, slide2, slide3, slide4, slide5, slide6];
  const categorySlider = [
    { categoryImg: category1, categoryName: "Fashion" },
    { categoryImg: category2, categoryName: "Food" },
    { categoryImg: category3, categoryName: "Medicine" },
    { categoryImg: category4, categoryName: "Fruits" },
    { categoryImg: category1, categoryName: "Fashion" },
    { categoryImg: category2, categoryName: "Food" },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/testProducts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <HomeNav></HomeNav>
      <section>
        <div className="carousel carousel-center w-full p-2 space-x-2 h-36 md:h-96">
          {bannerSlider.map((slider, i) => (
            <div key={i} className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl pl-2 font-bold">Explore by category</h2>
        <div className="flex flex-row overflow-auto over p-2">
          {categorySlider.map((slider, i) => (
            <Link key={i} to={`/category/${slider.categoryName}`}>
              <div className="flex flex-col items-center justify-center text-center carousel-item bg-gray-400 rounded-md p-4 m-2 h-10 w-10 md:h-52 md:w-52">
                <img
                  src={slider.categoryImg}
                  className="rounded-box m-0 mt-3 h-8 w-8"
                  alt=""
                />
                <p className="m-0 mb-2">{slider.categoryName}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl pl-2 font-bold">Order Again</h2>
        <div className="flex flex-row overflow-auto w-full p-2 gap-4 h-22 ">
          {products.map((product, i) => (
            <div key={i} className="w-1/2 md:w-full">
              <Link to={`/products/${product._id}`}>
                <div className="card card-side bg-slate-200 ">
                  <figure>
                    <img
                      className="w-24 h-24 md:w-96 md:h-96"
                      src={product.productImage}
                      alt="food"
                    />
                  </figure>
                  <div className="card-body p-0 pl-2 flex flex-col justify-center md:w-96">
                    <span className="card-title text-xs">
                      {product.productName}
                    </span>
                    <span className="text-xs">{product.productPrice}</span>
                    <span className="text-xs">{product.time}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl pl-2 font-bold">Offers</h2>
        <div className="carousel carousel-center w-full p-2 space-x-2 h-36 md:h-96">
          {bannerSlider.map((slider, i) => (
            <div key={i} className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl pl-2 font-bold">Recommendations</h2>
        <div
          className=" grid grid-cols-2 md:grid-cols-
         gap-4 p-2"
        >
          {products.map((product, i) => (
            <Link key={i} to={`/products/${product._id}`}>
              <div>
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
                    <p>{product.time}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default Home;
