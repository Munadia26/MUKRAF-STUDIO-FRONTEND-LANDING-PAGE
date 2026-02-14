import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Profile from "@/src/components/Profile";
import ProductSection from "@/src/components/Product";
import ArticleSection from "@/src/components/Article";
import TeamSection from "@/src/components/Member";
import Footer from "@/src/components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderingProcess from "../components/AlurPemesanan";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <ProductSection />
      <WhyChooseUs/>
      <OrderingProcess/>
      <ArticleSection />
      <Profile />
      <TeamSection />
      <Footer />
    </main>
  );
}