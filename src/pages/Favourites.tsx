import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockFavourites = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    title: "Premium Wireless Headphones",
    price: 2499,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 12543,
    discount: 69,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    title: "Designer Sunglasses",
    price: 799,
    originalPrice: 2499,
    rating: 4.4,
    reviews: 5432,
    discount: 68,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    title: "Smartwatch with Health Tracking",
    price: 3999,
    originalPrice: 12999,
    rating: 4.3,
    reviews: 8901,
    discount: 69,
  },
];

const Favourites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">My Wishlist</h1>
        
        {mockFavourites.length === 0 ? (
          <Card className="p-12 text-center">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Save items you like for later</p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </Card>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">{mockFavourites.length} items</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mockFavourites.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Favourites;
