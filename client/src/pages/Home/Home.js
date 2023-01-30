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
import Footer from "../../components/HomeComponents/Footer";

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

  console.log(products);
  useEffect(() => {
    const url = `${process.env.REACT_APP_baseURL}/testProducts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <HomeNav></HomeNav>
      <section>
        <div className="carousel carousel-center p-2 space-x-2 h-36 md:h-96 w-full">
          {bannerSlider.map((slider, i) => (
            <div key={i} className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <hr />
        <h2 className="text-xl pl-2 font-bold md:text-center md:text-4xl md:my-6">
          Explore by category
        </h2>
        <hr />
        <div className="flex flex-row overflow-auto over p-2 md:justify-center md:gap-3">
          {categorySlider.map((slider, i) => (
            <Link key={i} to={`/category/${slider.categoryName}`}>
              <div className="flex flex-col items-center justify-center text-center carousel-item bg-green-100 rounded-md p-4 m-2 h-10 w-10 md:h-32 md:w-32">
                <img
                  src={slider.categoryImg}
                  className="rounded-box m-0 mt-3 h-8 w-8 md:h-24 md:w-24"
                  alt=""
                />
                <p className="m-0 mb-2 md:text-2xl">{slider.categoryName}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <hr />
        <h2 className="text-xl pl-2 font-bold md:text-center md:text-4xl md:my-6">
          Order Again
        </h2>
        <hr />
        <div className="flex flex-row overflow-auto  lg:grid-cols-4 h-22 w-full p-2 gap-4">
          {products.map((product, i) => (
            <div key={i} className="w-1/2 md:w-full">
              <Link to={`/products/${product._id}`}>
                <div className="card card-side bg-slate-200 rounded-md">
                  <figure>
                    <img
                      className="w-20 h-20 md:w-40 md:h-40"
                      src={product.productImage}
                      alt="food"
                    />
                  </figure>
                  <div className="card-body p-2 flex flex-col justify-around w-32 md:w-40">
                    <div className="flex items-center justify-between">
                      <span className="card-title text-xs md:text-sm">
                        {product.productName}
                      </span>
                      <span className="font-bold bg-green-400 text-xs md:text-sm px-2 rounded-full">
                        {product?.productRating}
                        <i class="fa-solid fa-star text-xs md:text-sm"></i>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-lg font-bold">
                        Price:
                      </span>
                      <span className="font-bold bg-red-200 px-2 text-xs md:text-lg rounded-full">
                        {product.productPrice} tk
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="card-title text-gray-400 text-xs md:text-sm">
                        {product.shopName}
                      </span>
                      <span className=" flex items-center font-bold bg-blue-400 px-1 text-gray-100 rounded-full text-xs md:text-lg">
                        <i class="fa-regular fa-circle-check text-xs md:text-lg"></i>
                        <span className="hidden md:block text-xs md:text-sm">Verified</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <hr />
        <h2 className="text-xl pl-2 font-bold md:text-center md:text-4xl md:my-6">
          Offers
        </h2>
        <hr />
        <div className="carousel carousel-center w-full p-2 space-x-2 h-36 md:h-96">
          {bannerSlider.map((slider, i) => (
            <div key={i} className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <hr />
        <h2 className="text-xl pl-2 font-bold md:text-center md:text-4xl md:my-6">
          Recommendations
        </h2>
        <hr />
        <div
          className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  md:grid-cols-
         gap-12 p-2"
        >
          {products?.map((product, i) => (
            <Link key={i} to={`/products/${product._id}`}>
              <div>
                <div className="card w-48 shadow-xl bg-gray-100 rounded-lg">
                  <figure>
                    <img
                      className="h-32 w-48 md:h-44 md:w-full"
                      src={product.productImage}
                      alt="foods again"
                    />
                  </figure>
                  <div className="card-body p-3">
                    <div className="flex items-center justify-around">
                      <p className="font-bold">{product?.productName}</p>
                      <span className="font-bold bg-green-400 px-2 rounded-full">
                        {product?.productRating}
                        <i class="fa-solid fa-star text-sm"></i>
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 m-0">
                      {product?.productCategory}
                    </p>
                    <p className="font-bold">BDT: {product?.productPrice} tk</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg text-gray-400 p-2">
                      {product?.shopName}
                    </p>
                    <span className="font-bold bg-blue-400 px-1 mr-2 text-gray-100 rounded-full">
                      <i class="fa-regular fa-circle-check"></i>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="h-24"></p>
      </section>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
      <div className="hidden md:block">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
