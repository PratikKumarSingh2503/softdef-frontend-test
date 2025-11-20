import React from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.png";

const TestimonialCard = () => {
  const reviews = [
    {
      name: "Shelly Russel",
      img: profile1,
      stars: 5,
      review:
        "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      name: "Lula Rolfson",
      img: profile2,
      stars: 5,
      review:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      name: "Carol Huels",
      img: profile3,
      stars: 5,
      review:
        "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  return (
    <section className="mx-auto py-16 px-4 md:px-6 lg:px-10">
      {/* TITLE */}
      <div className="w-full flex justify-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-[48px] text-white font-semibold">
            Customer Review
          </h2>

          {/* Bottom-right arc */}
          <span className="absolute -bottom-1 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4FF65] rounded-br-xl"></span>

          {/* Top-left arc */}
          <span className="absolute -top-1 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4FF65] rounded-tl-xl"></span>
        </div>
      </div>

      {/* 3-CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
  <div
  key={index}
  className="
    relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white/80
    before:content-[''] before:absolute before:top-0 before:left-0
    before:w-full before:h-8
    before:rounded-b-[100%]
    before:border-t before:border-white/10
  "
>

            {/* PROFILE + NAME + STARS */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-semibold text-[38px]">
                  {item.name}
                </h3>

                {/* Stars */}
                <p className="text-white/75 text-[19px] font-regular">
                  {"★".repeat(item.stars)}
                </p>
              </div>
            </div>

            {/* REVIEW TEXT */}
            <p className="leading-relaxed text-[24px] font-regular">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;


//         <div
  //           key={index}
  //           className="
  //   relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white/80
  //   before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-6
  //   before:border-t before:border-white/10 before:rounded-[60%_60%_0_0]
  // "
  //         >