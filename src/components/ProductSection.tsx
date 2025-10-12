import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection = ({ title, subtitle, products, bgColor = "bg-card" }: ProductSectionProps) => {
  return (
    <section className={`${bgColor} py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">{title}</h2>
            {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary-dark">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
