import AutoCarousel from "@/components/auto-carousel";
import CategorySlider from "@/components/category-slider";
import LocationSlider from "@/components/location-slider";
import Navbar from "@/components/navbar";
import NavigationLinks from "@/components/navigation-links";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <NavigationLinks />
      <AutoCarousel />
      <main>
        <CategorySlider />
        <LocationSlider />
      </main>
    </>
  );
}
