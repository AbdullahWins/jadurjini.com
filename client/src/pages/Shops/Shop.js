import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Product from "../ProductDetails/Product";
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
import BottomNav from "../../components/HomeComponents/BottomNav";
import Footer from "../../components/HomeComponents/Footer";

const Shop = () => {
  const shops = useLoaderData();
  const bannerSlider = [slide1, slide2, slide3, slide4, slide5, slide6];
  const categorySlider = [
    { categoryImg: category1, categoryName: "Hoodie" },
    { categoryImg: category2, categoryName: "Tshirt" },
    { categoryImg: category3, categoryName: "Pants" },
    { categoryImg: category4, categoryName: "Hoodie" },
    { categoryImg: category1, categoryName: "Shoes" },
    { categoryImg: category2, categoryName: "Tshirt" },
  ];

  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </div>
        <p>
          <Link to="/cart">
            <i className="fa-solid text-xl fa-bag-shopping"></i>
          </Link>
        </p>
      </section>
      <div className="flex flex-col">
        <section>
          <div className="font-bold pb-2">
            <h2>{shops[0].shopName}</h2>
            <p>{shops[0].shopLocation}</p>
          </div>
          <div className="carousel carousel-center w-full pb-2 space-x-2 h-36 md:h-96">
            {bannerSlider.map((slider, i) => (
              <div key={i} className="carousel-item w-full">
                <img src={slider} className="rounded-box w-full" alt="" />
              </div>
            ))}
          </div>
        </section>
        <section>
          <section>
            <div className="flex flex-row overflow-auto over py-2">
              {categorySlider?.map((slider, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center carousel-item bg-gray-400 rounded-md p-4 m-2 h-10 w-10 md:h-52 md:w-52"
                >
                  <Link to={`/subCategory/${slider?.categoryName}`}>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={slider.categoryImg}
                        className="rounded-box h-8 w-8 md:h-36 md:w-36"
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
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 m-4">
          {shops.map((product, i) => (
            <Product key={i} product={product}></Product>
          ))}
        </section>
      </div>
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

export default Shop;
