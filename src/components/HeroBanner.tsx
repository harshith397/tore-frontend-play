import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const banners = [
  {
    title: "Mega Electronics Sale",
    subtitle: "Up to 80% off on Laptops, Phones & More",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Fashion Fiesta",
    subtitle: "Trending styles starting at ₹299",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Home Appliances",
    subtitle: "Save big on kitchen & home essentials",
    gradient: "from-orange-600 to-red-500",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">{banner.subtitle}</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Shop Now
              </Button>
            </div>
          ))}

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/10 hover:bg-card/20 text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/10 hover:bg-card/20 text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-accent" : "w-2 bg-card/40"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
