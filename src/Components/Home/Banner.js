import React from "react";
import pic from "../../images/home-img-1.png";
import arrow from "../../images/left_1.png";
import play from "../../images/play.svg";

const Banner = () => {
  return (
    <section
      className="container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 items-center p-10"
      id="banner-parts"
    >
      <div className="text sm:pt-1.5">
        <h5>Expensive But The Best</h5>
        <h1>Deliciousness jumping into the mouth</h1>
        <p>
          Together creeping heaven upon third dominion be upon won't darkness
          rule land behold it created good saw after she'd Our set living. Signs
          midst dominion creepeth morning.
        </p>
        <div className="banner_btn flex items-center">
          <div className="banner-btn-1 pr-16 flex items-center">
            <a href="#" className="btn1">
              Reservation
            </a>
            <img src={arrow} alt="" />
          </div>
          <div className="banner-btn-2">
            <a
              href="https://youtu.be/pq3Otf0zbdk"
              className="btn2 flex items-center"
            >
              <span>
                <img src={play} alt="" />
              </span>
              Watch our story
            </a>
          </div>
        </div>
      </div>
      <div className="image pt-16 ">
        <img className="lg:float-right sm:float-none w-4/6" src={pic} alt="" />
      </div>
    </section>
  );
};

export default Banner;
