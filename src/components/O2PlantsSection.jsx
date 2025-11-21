import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import heroTrendOne from "../assets/first.png";
import heroTrendTwo from "../assets/second.png";

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
      image: heroTrendOne,
      count: "03/04",
    },
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        "Oxygen-producing plants, often referred to as O2 plants, are those that release oxygen into the atmosphere through the process of photosynthesis.",
      desc2:
        "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
      image: heroTrendTwo,
      count: "04/04",
    },
  ];

  return (
    <section className="mx-auto my-10 px-4 py-12 md:px-6 lg:px-10">
      {/* TITLE */}
      <div className="w-full flex justify-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-header">Our Best o2</h2>

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
            <div className="flex flex-col md:flex-row card-glass items-center rounded-[92px] border-3 overflow-visible lg:max-h-[630px]">
              <div className="flex justify-center w-full overflow-visible">
                <img
                  src={slide.image}
                  alt="plant"
                  className="w-[577px] h-[577px] lg:w-[877px] lg:h-[877px] object-contain -translate-y-20"
                />
              </div>

              <div className="w-full space-y-4 px-10 -translate-y-20 lg:-translate-y-0">
                <h3 className="text-title !font-semibold">{slide.title}</h3>

                <p className="text-description !text-[28px] !font-semibold mt-10">
                  {slide.desc1}
                </p>
                <p className="text-description !text-[28px] !font-semibold mt-10">
                  {slide.desc2}
                </p>

                <div className="flex items-center justify-between">
                  <button className="px-8 py-3 border-2 border-white rounded-[12px] hover:bg-white/10 text-description !text-[28px] opacity-75">
                    Explore
                  </button>

                  <div className="flex items-center gap-5 text-white/80">
                    {/* LEFT ARROW */}
                    <button
                      onClick={() =>
                        document.querySelector(".swiper").swiper.slidePrev()
                      }
                      className="text-[24px] font-bold hover:text-white cursor-pointer"
                    >
                      &lt;
                    </button>

                    {/* COUNT */}
                    <span className="text-description !text-[20px] !font-bold hover:text-white cursor-pointer">
                      {slide.count}
                    </span>

                    {/* RIGHT ARROW */}
                    <button
                      onClick={() =>
                        document.querySelector(".swiper").swiper.slideNext()
                      }
                      className="text-[24px] font-bold hover:text-white cursor-pointer"
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

      {/* DOTS */}
      <div className="o2-pagination flex justify-center mt-8"></div>
    </section>
  );
};

export default O2PlantsSection;
