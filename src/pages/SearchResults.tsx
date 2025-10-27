import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { bestDeals, electronics, fashion, homeAppliances } from "@/data/mockProducts";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Combine all products for search
  const allProducts = [...bestDeals, ...electronics, ...fashion, ...homeAppliances];
  
  // Filter products based on search query
  const filteredProducts = query
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try searching with different keywords</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
