import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { bestDeals, electronics } from "@/data/mockProducts";

const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    title: "Premium Wireless Headphones with Active Noise Cancellation",
    price: 2499,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 12543,
    discount: 69,
    description: "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and comfortable over-ear design.",
    features: [
      "Active Noise Cancellation (ANC)",
      "40 Hours Battery Life",
      "Premium Audio Drivers",
      "Bluetooth 5.2 Connectivity",
      "Comfortable Over-Ear Design",
      "Built-in Microphone for Calls",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <Card className="p-4 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </Card>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-2 cursor-pointer hover:border-primary">
                  <img
                    src={product.image}
                    alt={`View ${i}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 bg-success text-white px-2 py-1 rounded">
                <span className="font-semibold">{product.rating}</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-muted-foreground">
                {product.reviews.toLocaleString()} ratings
              </span>
            </div>

            <div className="border-t border-b border-border py-4 mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-foreground">₹{product.price}</span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-success font-semibold">{product.discount}% off</span>
              </div>
              <p className="text-success text-sm">You save ₹{product.originalPrice - product.price}</p>
            </div>

            <div className="flex gap-3 mb-6">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Truck className="h-5 w-5" />
                <span>Free delivery on orders above ₹499</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <RotateCcw className="h-5 w-5" />
                <span>7 Days replacement policy</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>1 Year warranty</span>
              </div>
            </div>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <Card className="p-6">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold">Brand:</span>
                  <span className="text-muted-foreground ml-2">Premium Audio</span>
                </div>
                <div>
                  <span className="font-semibold">Model:</span>
                  <span className="text-muted-foreground ml-2">PAH-2024</span>
                </div>
                <div>
                  <span className="font-semibold">Color:</span>
                  <span className="text-muted-foreground ml-2">Black</span>
                </div>
                <div>
                  <span className="font-semibold">Warranty:</span>
                  <span className="text-muted-foreground ml-2">1 Year</span>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card className="p-6">
              <p className="text-muted-foreground">Customer reviews will appear here.</p>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Similar Products */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {electronics.slice(0, 5).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
