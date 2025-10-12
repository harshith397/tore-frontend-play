import { Smartphone, Laptop, Tv, Home, Shirt, Dumbbell, Book, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Smartphone },
  { name: "Fashion", icon: Shirt },
  { name: "Home", icon: Home },
  { name: "Mobiles", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "TVs", icon: Tv },
  { name: "Sports", icon: Dumbbell },
  { name: "Books", icon: Book },
  { name: "Gifts", icon: Gift },
];

const CategoryNav = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="flex flex-col items-center gap-1 min-w-[80px] h-auto py-2 hover:bg-secondary"
            >
              <category.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
