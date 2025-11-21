import heroMain from '../assets/bg.jpg'
import highlightPlant from '../assets/first.png'
import oxygenPlant from '../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png'
import Button from './Button'
import SectionTitle from './SectionTitle'

const HeroBanner = () => (
  <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0e1510] to-[#141f14]">
    <div className="absolute inset-0 opacity-60">
      <img src={heroMain} alt="Hero backdrop" className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060806]/90 via-[#060806]/70 to-transparent" />
    </div>

    <div className="relative mx-auto flex flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:px-6 lg:px-0 lg:py-24">
      <div className="space-y-6 text-white md:flex-1">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
          FloraVision
          <span className="h-1 w-1 rounded-full bg-[#c8ff4f]" />
          since 2016
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px]">
          Earth&apos;s Exhale
        </h1>
        <p className="max-w-xl text-base text-white/70 md:text-lg">
          Earth Exhale symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role
          in sustaining life.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Buy Now</Button>
          <Button size="lg" variant="ghost" className="gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
              ▶
            </span>
            Live Demo
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-[#111d16]/70 p-4 backdrop-blur">
          <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10">
            <img src={highlightPlant} alt="Ronnie Hamill" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="text-sm text-white/80">
            <p className="font-semibold">Ronnie Hamill</p>
            <p className="text-white/60">“They bring such a fresh and vibrant energy to my home.”</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md self-center rounded-[3rem] border border-white/10 bg-[#111d16]/70 p-8 text-white shadow-[var(--shadow-flora-card)] ring-1 ring-white/5 backdrop-blur">
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>Indoor Plant</span>
          <div className="flex items-center gap-1 text-white">
            <span className="text-lg text-[#c8ff4f]">●</span>
            Aglaonema
          </div>
        </div>
        <div className="relative mt-4 flex flex-col gap-6 text-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
            <img
              src={highlightPlant}
              alt="Aglaonema plant"
              className="relative z-10 mx-auto h-64 w-auto object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.8)]"
              loading="lazy"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Aglaonema plant</h3>
            <p className="text-sm text-white/70">
              Known for its lush foliage and ease of care, perfect for your calming desk setup.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c120d] px-5 py-3 text-sm">
            <div className="text-left">
              <p className="text-white/60">Rs.</p>
              <p className="text-2xl font-semibold text-white">599/-</p>
            </div>
            <Button size="sm" className="rounded-2xl px-6 py-2">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner
