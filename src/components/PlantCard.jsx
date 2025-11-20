import React from 'react'
import Button from './Button'
import SectionTitle from './SectionTitle'

import heroTrendOne from '../assets/first.png'
import heroTrendTwo from '../assets/second.png'
import topThird from '../assets/third.png'
import topFourth from '../assets/fourth.png'
import topFifth from '../assets/fifth.png'
import topSixth from '../assets/sixth.png'

const trendingPlants = [
  {
    highlight: true,
    name: 'For Your Desk Decorations',
    subtitle: 'Indoor Plant',
    description:
      'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: '599',
    image: heroTrendOne,
  },
  {
    name: 'For Your Desk Decorations',
    subtitle: 'Indoor Plant',
    description:
      'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
    price: '399',
    image: heroTrendTwo,
  },
]

const topSellingPlants = [
  {
    name: 'Aglaonema plant',
    description:
      'The Aglaonema plant, commonly known as Chinese Evergreen, is appreciated for its attractive foliage and ease of care.',
    price: '300',
    image: heroTrendOne,
  },
  {
    name: 'Plantain Lilies',
    description:
      'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.',
    price: '380',
    image: heroTrendTwo,
  },
  {
    name: 'Cactus',
    description:
      'Renowned for thriving in arid environments while adding sculptural charm to any space.',
    price: '259',
    image: topThird,
  },
  {
    name: 'Swiss Cheese Plant',
    description:
      'A popular tropical houseplant celebrated for its distinctive perforated leaves and dramatic presence.',
    price: '400',
    image: topFourth,
  },
  {
    name: 'Sansevieria plant',
    description:
      'Admired for its striking upright foliage and low-maintenance nature, perfect for busy plant lovers.',
    price: '450',
    image: topFifth,
  },
  {
    name: 'Agave plant',
    description:
      'A succulent known for its sculptural form and ability to store water, lending an architectural look indoors.',
    price: '359',
    image: topSixth,
  },
]

/* -------------------------------------------------------
   🌿 UPDATED CARD — NO BULGE + PERFECT INNER CURVE
------------------------------------------------------- */
const PlantCard = ({ name, description, price, image }) => {
  return (
    <article
      className="relative rounded-[2.2rem] bg-[#111d16]/70
      border border-white/15 p-6 text-white
      shadow-[0_0_35px_rgba(0,0,0,0.40)]
      backdrop-blur-xl transition-all duration-300
      hover:-translate-y-1"
    >
      {/* Inner inset curve */}
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/10 pointer-events-none" />

      {/* Softer top glow */}
      <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-white/5 to-transparent blur-xl" />

      {/* Plant Image — lowered by reducing negative margin */}
      <div className="relative flex justify-center -mt-16 mb-3">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.70)]"
        />
      </div>

      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="mt-2 text-[15px] text-white/70 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between mt-6 px-4 py-3 rounded-xl border border-white/15 bg-white/5">
        <span className="font-semibold text-lg">
          Rs. {price}/-
        </span>
        <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/20">
          🛒
        </button>
      </div>
    </article>
  )
}

/* -------------------------------------------------------
   🌿 TITLE — CURVES FIXED (NO COVERING TEXT)
------------------------------------------------------- */
export const SectionTitleUpdated = ({ title }) => (
  <div className="w-full flex justify-center mb-14 mt-8">
    <div className="relative inline-block px-10">

      <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>

      {/* LEFT CURVE — moved lower & outward */}
      <span className="absolute -left-9 top-5 h-6 w-6
        border-[3px] border-yellow-500 rounded-tr-full
        border-l-0 border-b-0"></span>

      {/* RIGHT CURVE — moved lower & outward */}
      <span className="absolute -right-9 top-5 h-6 w-6
        border-[3px] border-yellow-500 rounded-tl-full
        border-r-0 border-b-0"></span>

    </div>
  </div>
)

/* -------------------------------------------------------
   🌿 Trending Section
------------------------------------------------------- */
export const TrendingPlantsSection = () => (
  <section
    className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16 lg:px-0"
    id="trending"
  >
    <SectionTitleUpdated title="Our Trendy Plants" />
    <div className="space-y-5 md:space-y-6">
      {trendingPlants.map((plant) => (
        <PlantCard key={plant.price} {...plant} />
      ))}
    </div>
  </section>
)

/* -------------------------------------------------------
   🌿 Top Selling Section
------------------------------------------------------- */
export const TopSellingPlantsSection = () => (
  <section
    className="mx-auto max-w-6xl px-4 pb-20 md:px-6 lg:px-0"
    id="top"
  >
    <SectionTitleUpdated title="Our Top Selling Plants" />
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {topSellingPlants.map((plant) => (
        <PlantCard key={plant.name} {...plant} />
      ))}
    </div>
  </section>
)

export default PlantCard


// import Button from './Button'
// import SectionTitle from './SectionTitle'

// import heroTrendOne from '../assets/first.png'
// import heroTrendTwo from '../assets/second.png'
// import topThird from '../assets/third.png'
// import topFourth from '../assets/fourth.png'
// import topFifth from '../assets/fifth.png'
// import topSixth from '../assets/sixth.png'

// const trendingPlants = [
//   {
//     highlight: true,
//     name: 'For Your Desk Decorations',
//     subtitle: 'Indoor Plant',
//     description:
//       'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
//     price: '599',
//     image: heroTrendOne,
//   },
//   {
//     name: 'For Your Desk Decorations',
//     subtitle: 'Indoor Plant',
//     description:
//       'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
//     price: '399',
//     image: heroTrendTwo,
//   },
// ]

// const topSellingPlants = [
//   {
//     name: 'Aglaonema plant',
//     description:
//       'The Aglaonema plant, commonly known as Chinese Evergreen, is appreciated for its attractive foliage and ease of care.',
//     price: '300',
//     image: heroTrendOne,
//   },
//   {
//     name: 'Plantain Lilies',
//     description:
//       'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.',
//     price: '380',
//     image: heroTrendTwo,
//   },
//   {
//     name: 'Cactus',
//     description: 'Renowned for thriving in arid environments while adding sculptural charm to any space.',
//     price: '259',
//     image: topThird,
//   },
//   {
//     name: 'Swiss Cheese Plant',
//     description:
//       'A popular tropical houseplant celebrated for its distinctive perforated leaves and dramatic presence.',
//     price: '400',
//     image: topFourth,
//   },
//   {
//     name: 'Sansevieria plant',
//     description:
//       'Admired for its striking upright foliage and low-maintenance nature, perfect for busy plant lovers.',
//     price: '450',
//     image: topFifth,
//   },
//   {
//     name: 'Agave plant',
//     description:
//       'A succulent known for its sculptural form and ability to store water, lending an architectural look indoors.',
//     price: '359',
//     image: topSixth,
//   },
// ]

// const PlantCard = ({ highlight, name, subtitle, description, price, image }) => {
//   if (highlight) {
//     return (
//       <article className="grid gap-6 overflow-hidden rounded-[3rem] border border-white/5 bg-[#111d16]/60 p-6 text-white shadow-[var(--shadow-flora-card)] ring-1 ring-white/5 backdrop-blur md:grid-cols-[1.05fr_0.95fr] md:p-10">
//         <div className="flex flex-col justify-between space-y-4">
//           <div className="space-y-3">
//             <p className="text-sm text-white/60">{subtitle}</p>
//             <h3 className="text-3xl font-semibold leading-tight">{name}</h3>
//             <p className="text-sm text-white/70">{description}</p>
//           </div>
//           <div className="flex flex-wrap items-center gap-4 text-lg font-semibold">
//             <span>
//               Rs. <span className="text-3xl"> {price}/-</span>
//             </span>
//             <div className="flex items-center gap-3">
//               <Button size="md">Explore</Button>
//               <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
//                 🛒
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
//           <img
//             src={image}
//             alt={name}
//             className="relative z-10 mx-auto h-64 w-auto object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.85)]"
//             loading="lazy"
//           />
//         </div>
//       </article>
//     )
//   }

//   return (
//     <article className="flex flex-col gap-4 rounded-[2rem] border border-white/5 bg-[#111d16]/60 p-6 text-white shadow-[var(--shadow-flora-card)] ring-1 ring-white/5 backdrop-blur">
//       <div className="relative flex h-48 items-center justify-center">
//         <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
//         <img
//           src={image}
//           alt={name}
//           className="relative z-10 h-44 w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
//           loading="lazy"
//         />
//       </div>
//       <div className="space-y-2 text-center">
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <p className="text-sm text-white/70">{description}</p>
//       </div>
//       <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c120d]/70 px-5 py-3 text-sm">
//         <span className="font-semibold">
//           Rs. <span className="text-base">{price}/-</span>
//         </span>
//         <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
//           🛒
//         </button>
//       </div>
//     </article>
//   )
// }

// export const TrendingPlantsSection = () => (
//   <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16 lg:px-0" id="trending">
//     <SectionTitle title="Our Trendy plants" className="mb-6 md:mb-8" />
//     <div className="space-y-5 md:space-y-6">
//       {trendingPlants.map((plant) => (
//         <PlantCard key={plant.price} {...plant} />
//       ))}
//     </div>
//   </section>
// )

// export const TopSellingPlantsSection = () => (
//   <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16 lg:px-0" id="top">
//     <SectionTitle title="Our Top Selling Plants" className="mb-6 md:mb-8" />
//     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {topSellingPlants.map((plant) => (
//         <div key={plant.name} className="transition duration-300 hover:-translate-y-1 hover:scale-[1.01]">
//           <PlantCard {...plant} highlight={false} />
//         </div>
//       ))}
//     </div>
//   </section>
// )

// export default PlantCard
