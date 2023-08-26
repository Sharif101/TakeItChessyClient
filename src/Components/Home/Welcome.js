import React from "react";
import wave from "../../images/figure-1.png";

const Welcome = () => {
  return (
    <div className="welcome-part container mx-auto text-center mt-10">
      <div className="text">
        <div className="titte_first">
          <span>Welcome to Take It Chessy</span>
        </div>
        <div className="titte_second">
          <span>Welcome to Take It Chessy</span>
        </div>
        <p className="lg:w-3/4 md:w-full sm:w-full mx-auto mt-10 mb-10">
          We welcome you to a delicious feast of exquisite dishes in Artichaut.
          With a wide range of world cuisines to choose from, we guarantee you a
          sumptuous feast experience in our restaurant! Here you will dive into
          a friendly and romantic atmosphere and enjoy our haute cuisine. With
          our great selection of dishes from all over the world you can feel
          yourself as a traveler and true gourmet!
        </p>
        <img className="mx-auto mb-10" src={wave} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
