import React from "react";
import HomeNav from "../../components/HomeComponents/HomeNav";
import slide1 from "../../assets/slides/slide1.png";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";
import slide5 from "../../assets/slides/slide5.jpg";
import slide6 from "../../assets/slides/slide6.jpg";

const Home = () => {
  const sliderArray = [slide1, slide6, slide3, slide4, slide5, slide6];
  return (
    <div>
      <HomeNav></HomeNav>
      <section>
        <div className="carousel carousel-center w-full p-2 space-x-2">
          {sliderArray.map((slider) => (
            <div className="carousel-item w-full">
              <img src={slider} className="rounded-box h-1/2 w-full" alt="" />
            </div>
          ))}
          {/* <div className="carousel-item w-full">
            <img src={slide2} className="rounded-box h-1/2 w-full" alt="" />
          </div>
          <div className="carousel-item w-full">
            <img src={slide3} className="rounded-box h-1/2 w-full" alt="" />
          </div>
          <div className="carousel-item w-full">
            <img src={slide4} className="rounded-box h-1/2 w-full" alt="" />
          </div>
          <div className="carousel-item w-full">
            <img src={slide5} className="rounded-box h-1/2 w-full" alt="" />
          </div>
          <div className="carousel-item w-full">
            <img src={slide6} className="rounded-box h-1/2 w-full" alt="" />
          </div> */}
        </div>
      </section>
      <section>
        <h2>Explore by category</h2>
      </section>
    </div>
  );
};

export default Home;
