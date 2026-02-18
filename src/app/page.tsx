import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Profile from "@/src/components/Profile";
import Services from "../components/Services";
import SectionDivider from "../components/SectionDividers";
import ProductSection from "@/src/components/Product";
import ArticleSection from "@/src/components/Article";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderingProcess from "../components/AlurPemesanan";
import Footer from "@/src/components/Footer";
import ClientSection from "../components/ClientSection";



export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Services/>
      <ProductSection />
      <SectionDivider/>
      <WhyChooseUs/>
      <OrderingProcess/>
      <Profile />
      <ArticleSection />
      <ClientSection/>
      <Footer />
    </main>
  );
}