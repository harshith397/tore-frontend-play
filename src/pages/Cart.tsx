import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockCartItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    title: "Premium Wireless Headphones",
    price: 2499,
    originalPrice: 7999,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    title: "Classic Analog Watch",
    price: 1299,
    originalPrice: 3999,
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add items to get started</p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-foreground">₹{item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-secondary rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Price Details</h2>
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price ({cartItems.length} items)</span>
                    <span className="font-semibold">₹{subtotal + savings}</span>
                  </div>
                  <div className="flex justify-between text-success">
                    <span>Discount</span>
                    <span className="font-semibold">-₹{savings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Charges</span>
                    <span className="text-success font-semibold">FREE</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total Amount</span>
                  <span>₹{subtotal}</span>
                </div>
                <Button className="w-full" size="lg">
                  Place Order
                </Button>
                <p className="text-success text-sm text-center mt-3">
                  You will save ₹{savings} on this order
                </p>
              </Card>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
