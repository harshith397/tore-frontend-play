import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
}

const ProductCard = ({ id, image, title, price, originalPrice, rating, reviews, discount }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border border-border hover:shadow-hover transition-all duration-300 cursor-pointer">
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-card/80 hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-sm line-clamp-2 min-h-[40px]">{title}</h3>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 bg-success text-success-foreground text-xs px-1.5 py-0.5 rounded">
              {rating}
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-muted-foreground">({reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
                <span className="text-sm text-success font-semibold">{discount}% off</span>
              </>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
