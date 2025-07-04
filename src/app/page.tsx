import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import { MouseTrail } from '@/components/MouseTrail';


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden max-w-screen overflow-y-hidden">
      <MouseTrail />
      {/*<Banner />*/}
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <Features />
      
      <ProductShowcase />
      <FAQs />
      {/*<Pricing/>*/}
     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
