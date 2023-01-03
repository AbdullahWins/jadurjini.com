import React from "react";
import HomeNav from "../../components/HomeComponents/HomeNav";
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

  return (
    <div>
      <HomeNav></HomeNav>
      <section>
        <div className="carousel carousel-center w-full p-2 space-x-2 h-36">
          {bannerSlider.map((slider) => (
            <div className="carousel-item w-full">
              <img src={slider} className="rounded-box w-full" alt="" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl pl-2 font-bold">Explore by category</h2>
        <div className="carousel carousel-center p-2 space-x-3">
          {categorySlider.map((slider) => (
            <div className="flex flex-col items-center  justify-center text-center carousel-item bg-gray-400 rounded-md p-4 h-10 w-10">
              <img
                src={slider.categoryImg}
                className="rounded-box m-0 mt-3 h-8 w-8"
                alt=""
              />
              <p className="m-0 mb-2">{slider.categoryName}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
