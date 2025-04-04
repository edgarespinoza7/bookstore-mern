import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center px-4 md:px-12 py-16 gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-3xl font-medium mb-7 font-primary">
          New Releases This Week
        </h1>
        <p className="mb-10 font-secondary">
          It&apos;s time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week&apos;s new releases offer something
          for everyone
        </p>
        <button className="btn-primary px-12">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
