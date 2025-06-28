import AutoCarousel from "@/components/auto-carousel";
import CategorySlider from "@/components/category-slider";
import Footer from "@/components/footer";
import LocationSlider from "@/components/location-slider";
import Navbar from "@/components/navbar";
import NavigationLinks from "@/components/navigation-links";
import RecentlyUploadedProducts from "@/components/recently-upload-products";
import RecommendedProducts from "@/components/recommended-products";
import TopBar from "@/components/top-bar";
import TrendingProducts from "@/components/trending-products";

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
      <div className="bg-[#F3F3F3]">
        <main className="space-y-8">
          <TrendingProducts />
          <RecommendedProducts />
          <RecentlyUploadedProducts />
        </main>
      </div>
      <Footer />
    </>
  );
}
