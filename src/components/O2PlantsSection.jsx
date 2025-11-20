import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroTrendOne from "../assets/first.png";
import heroTrendTwo from "../assets/second.png";
import topThird from "../assets/third.png";

const O2PlantsSection = () => {
  const slides = [
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
      desc2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: heroTrendOne,
      count: "01/04",
    },
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        "Oxygen-producing plants, often referred to as O2 plants, are those that release oxygen into the atmosphere through the process of photosynthesis.",
      desc2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: heroTrendTwo,
      count: "02/04",
    },
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        "Oxygen-producing plants, often referred to as O2 plants, are those that release oxygen into the atmosphere through the process of photosynthesis.",
      desc2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: topThird,
      count: "03/04",
    },
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        "Oxygen-producing plants, often referred to as O2 plants, are those that release oxygen into the atmosphere through the process of photosynthesis.",
      desc2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: heroTrendOne,
      count: "04/04",
    },
  ];

  return (
    <section className="mx-auto my-10 px-4 py-12 md:px-6 lg:px-10">
      {/* TITLE */}
      <div className="w-full flex justify-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-[55px] font-semibold text-white">Our Best o2</h2>

          {/* Bottom-right curved corner */}
          <span
            className="absolute -bottom-1 -right-1 w-10 h-10 
            border-b-2 border-r-2 border-[#55B000] rounded-br-xl"
          ></span>

          {/* Top-left curved corner */}
          <span
            className="absolute -top-1 -left-1 w-10 h-10 
            border-t-2 border-l-2 border-[#55B000] rounded-tl-xl"
          ></span>
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".o2-pagination",
        }}
        className="w-full swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* CARD */}
            <div
              className="flex flex-col md:flex-row items-center gap-10
              rounded-[92px] border border-white/10 bg-card
              backdrop-blur-xl relative overflow-visible"
            >
              {/* LEFT IMAGE */}
              <div className="relative flex justify-center w-full md:w-1/2 overflow-visible">
                <img
                  src={slide.image}
                  alt="plant"
                  className="w-[380px] h-[380px] md:w-[560px] md:h-[560px]
                  -mt-20 object-contain"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="w-full md:w-1/2 space-y-4 py-10 pr-10">
                <h3 className="text-white/75 text-[32px] font-semibold">
                  {slide.title}
                </h3>

                <p className="text-white/75 text-[22px] font-semibold">
                  {slide.desc1}
                </p>
                <p className="text-white/75 text-[22px] font-semibold">
                  {slide.desc2}
                </p>

                {/* BUTTON + ARROWS + COUNT */}
                <div className="flex items-center justify-between">
                  {/* Button */}
                  <button className="px-6 py-2 border-2 border-white rounded-md hover:bg-white/10 text-[12px]">
                    Explore
                  </button>

                  {/* Arrows + Count */}
                  <div className="flex items-center gap-5 text-white/80">
                    {/* LEFT ARROW */}
                    <button
                      onClick={() =>
                        document.querySelector(".swiper").swiper.slidePrev()
                      }
                      className="text-xl font-bold hover:text-white cursor-pointer"
                    >
                      &lt;
                    </button>

                    {/* COUNT */}
                    <span className="text-white/80">{slide.count}</span>

                    {/* RIGHT ARROW */}
                    <button
                      onClick={() =>
                        document.querySelector(".swiper").swiper.slideNext()
                      }
                      className="text-xl font-bold hover:text-white cursor-pointer"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION DOTS */}
      <div className="o2-pagination flex justify-center mt-8"></div>
    </section>
  );
};

export default O2PlantsSection;