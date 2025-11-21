import React from "react";
import plant1 from "../assets/first.png";
import plant2 from "../assets/second.png";
import plant3 from "../assets/third.png";
import plant4 from "../assets/fourth.png";
import plant5 from "../assets/fifth.png";
import plant6 from "../assets/sixth.png";
import { FiShoppingBag } from "react-icons/fi";

const plants = [
  {
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
    img: plant1,
  },
  {
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
    img: plant2,
  },
  {
    name: "Cactus",
    desc: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
    img: plant3,
  },
  {
    name: "Swiss Cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
    img: plant4,
  },
  {
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
    img: plant5,
  },
  {
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
    img: plant6,
  },
];

const PlantCard = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 my-20">
      {/* TITLE */}
      <div className="w-full flex justify-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-header">
            Our Top Selling Plants
          </h2>

          <span className="absolute -bottom-1 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4FF65] rounded-br-xl"></span>

          <span className="absolute -top-1 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4FF65] rounded-tl-xl"></span>
        </div>
      </div>

      {/* Card */}
      <div className="mt-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-30">
        {plants.map((p, i) => (
          <div
            key={i}
            className="
              relative rounded-[77px] card-glass p-8 pt-85 text-white">
            <img
              src={p.img}
              alt={p.name}
              className="
                absolute -top-30 left-1/2 -translate-x-1/2
                w-[459px] h-[459px] object-contain 
              "
            />

            <h3 className="text-title mb-4">
              {p.name}
            </h3>

            <p className="text-description mb-4">
              {p.desc}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-title">
                {p.price}
              </p>

              <button className="border border-white/40 p-3 rounded-xl hover:bg-white/10 transition">
                <FiShoppingBag className="w-[27px] h-[27px] opacity-75" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCard;
