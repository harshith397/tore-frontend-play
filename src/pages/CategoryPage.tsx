import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { bestDeals, electronics, fashion, homeAppliances } from "@/data/mockProducts";

const CategoryPage = () => {
  const { category } = useParams();
  
  const getCategoryProducts = () => {
    switch (category?.toLowerCase()) {
      case "electronics":
      case "mobiles":
      case "laptops":
      case "tvs":
        return electronics;
      case "fashion":
        return fashion;
      case "home":
        return homeAppliances;
      case "sports":
      case "books":
      case "gifts":
        return bestDeals;
      default:
        return bestDeals;
    }
  };

  const products = getCategoryProducts();
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{categoryTitle}</h1>
          <p className="text-muted-foreground">Showing {products.length} products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
