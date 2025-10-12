import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { bestDeals, electronics, fashion, homeAppliances } from "@/data/mockProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      <HeroBanner />
      
      <ProductSection
        title="Best Deals on Electronics"
        subtitle="Don't miss these amazing offers"
        products={bestDeals}
      />
      
      <ProductSection
        title="Top Electronics"
        subtitle="Latest gadgets & devices"
        products={electronics}
        bgColor="bg-secondary/30"
      />
      
      <ProductSection
        title="Fashion Trends"
        subtitle="Style that speaks to you"
        products={fashion}
      />
      
      <ProductSection
        title="Home Appliances"
        subtitle="Make your home smarter"
        products={homeAppliances}
        bgColor="bg-secondary/30"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
