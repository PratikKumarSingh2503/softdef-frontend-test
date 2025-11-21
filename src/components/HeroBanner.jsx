import React from "react";
import bg from "../assets/bg.jpg";
import profile4 from "../assets/profile4.png";
import plant1 from "../assets/first.png";
import plant2 from "../assets/second.png";
import plant3 from "../assets/seven.png";

import { FiShoppingBag, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const SmallTestimonial = () => (
  <div className="relative w-[300px] px-5 py-10 rounded-[45px] card-glass text-white/90 md:w-[409px]">
    <div className="flex flex-col items-start gap-3">
      <div className="flex justify-start items-center gap-4">
        <img
          src={profile4}
          alt="user"
          className="w-[64px] h-[64px] rounded-[86px] object-cover"
        />
        <div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold">Ronnie Hamill</p>
            <div className="text-yellow-400">★★★★★</div>
          </div>
        </div>
      </div>
      <p className="text-description !text-[17px] mt-2">
        I can't express how thrilled I am with my new natural plants! They bring
        such a fresh and vibrant energy to my home.
      </p>
    </div>
  </div>
);

const RightTopPlantCard = () => (
  <div className="relative rounded-[40px] max-w-[500px] ml-auto card-glass pt-20 pb-10 text-white/90 overflow-visible border-2 border-white/20">
    <img
      src={plant1}
      alt="plant"
      className="absolute -top-30 left-1/2 -translate-x-1/2 w-[459px] h-[459px] object-contain"
    />
    {/* CONTENT */}
    <div className="mt-65 px-15 flex justify-between items-center gap-3">
      <div className="items-center">
        <p className="text-description !text-[23px]">Indoor Plant</p>

        <h3 className="mt-2 text-description !text-[38px]">Aglaonema plant</h3>

        <button className="mt-6 border-2 border-white/40 px-6 py-2 rounded-[12px] text-description !text-[28px] hover:bg-white/10 transition">
          Buy Now
        </button>
      </div>
      <div className="text-white/70">
        <FiChevronRight size={22} />
      </div>
    </div>

    <div className="flex items-center justify-center gap-2 mt-8">
      <span className="w-2 h-2 rounded-full bg-white/90"></span>
      <span className="w-2 h-2 rounded-full bg-white/30"></span>
      <span className="w-2 h-2 rounded-full bg-white/30"></span>
    </div>
  </div>
);

const TrendyPlants = ({ image, title, desc, price, imageOnRight = false }) => {
  return (
    <div className="relative rounded-[151px] card-glass p-16 overflow-visible  min-h-[450px]">
      <img
        src={image}
        alt={title}
        className={`
          absolute top-1/2 -translate-y-6/10
          ${imageOnRight ? "right-[0px]" : ""}
          w-[280px] h-[320px] md:w-[601px] md:h-[732px]
          object-contain pointer-events-none
        `}
      />

      {/* CONTENT BLOCK */}
      <div
        className={`
          py-auto relative z-10 flex flex-col gap-5
          ${imageOnRight ? "mr-auto" : "ml-auto"}
          w-full max-w-[420px] md:max-w-[720px]
        `}
      >
        <h3 className="text-title !font-semibold !text-white">{title}</h3>

        <p className="text-title !text-[20px] !font-semibold !text-white">
          {desc}
        </p>

        <p className="text-[22px] md:text-[26px] font-semibold text-white">
          {price}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <button className="px-5 py-2 border-2 border-white rounded-[12px] text-title !text-[28px] !font-medium hover:bg-white/10 transition">
            Explore
          </button>

          <button className="p-3 border border-white/40 rounded-xl hover:bg-white/10">
            <FiShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="absolute inset-0 -z-10" />
      </div>

      <div className="px-4 md:px-6 lg:px-10 py-16">
        <div className="relative">
          {/* Top  */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* left content */}
            <div className="flex-3 md:mt-20 ">
              <h1 className="text-header !text-[84px] !text-white/75 !lg:text-[118px]">
                Earth's Exhale
              </h1>

              <p className="mt-4 text-description !text-[23px] !font-medium">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's
                natural environment and its essential role in sustaining life.
              </p>

              <div className="mt-5 flex flex-col items-start gap-4 md:flex-row">
                <button className=" border-2 border-white px-8 py-3 rounded-[12px] text-description !text-[28px] hover:bg-white/6 transition">
                  Buy Now
                </button>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-3 bg-transparent border-2 border-white px-4 py-4 rounded-full text-white hover:bg-white/6 transition">
                    <FaPlay className="opacity-75" />
                  </button>
                  <span className="text-description !text-[25px] font-indie !text-white">
                    Live Demo
                  </span>
                </div>
              </div>

              {/* testimonial card */}
              <div className="md:mt-50">
                <SmallTestimonial />
              </div>
            </div>

            {/* right content card */}
            <div className="flex-2 md:mt-20">
              <RightTopPlantCard />
            </div>
          </div>

          {/* Our Trendy plants */}
          <div className="w-full flex justify-center mt-20 mb-12">
            <div className="relative inline-block">
              <h2 className="text-header">Our Trenday plants</h2>

              <span
                className="absolute -bottom-1 -right-1 w-10 h-10 
            border-b-2 border-r-2 border-[#55B000] rounded-br-xl"
              ></span>

              <span
                className="absolute -top-1 -left-1 w-10 h-10 
            border-t-2 border-l-2 border-[#55B000] rounded-tl-xl"
              ></span>
            </div>
          </div>

          <div className="flex flex-col gap-30">
            <div className="mx-auto w-full">
              <TrendyPlants
                image={plant2}
                title="For Your Desks Decorations"
                desc="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
                price="Rs. 599/-"
                imageOnRight={false}
              />
            </div>

            <div className="mx-auto w-full ">
              <TrendyPlants
                image={plant3}
                title="For Your Desks Decorations"
                desc="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming."
                price="Rs. 399/-"
                imageOnRight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
