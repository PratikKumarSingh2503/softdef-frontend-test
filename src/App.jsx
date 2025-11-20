import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import {
  TrendingPlantsSection,
  TopSellingPlantsSection,
} from "./components/PlantCard";
import TestimonialsCard from "./components/TestimonialCard";
import O2PlantsSection from "./components/O2PlantsSection";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroBanner />
    <TrendingPlantsSection />
    <TopSellingPlantsSection />
    <TestimonialsCard />
    <O2PlantsSection />

    <Footer />
  </div>
);

export default App;
