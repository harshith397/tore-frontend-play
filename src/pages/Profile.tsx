import { User, MapPin, Package, Heart, Settings, LogOut } from "lucide-react";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const mockOrders = [
    {
      id: "ORD123456",
      date: "2025-01-15",
      status: "Delivered",
      total: 4798,
      items: 2,
    },
    {
      id: "ORD123455",
      date: "2025-01-10",
      status: "In Transit",
      total: 2499,
      items: 1,
    },
  ];

  const mockAddresses = [
    {
      id: 1,
      type: "Home",
      name: "Rajesh Kumar",
      address: "123, MG Road, Bangalore, Karnataka - 560001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "Rajesh Kumar",
      address: "456, Electronic City, Bangalore, Karnataka - 560100",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                    <CardDescription>rajesh@email.com</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  My Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription>Track and manage your orders</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">Order {order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Delivered" 
                              ? "bg-success/10 text-success" 
                              : "bg-accent/10 text-accent-foreground"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-border">
                          <span className="text-muted-foreground">{order.items} items</span>
                          <span className="font-bold text-foreground">₹{order.total}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">First Name</label>
                        <p className="text-foreground font-semibold">Rajesh</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                        <p className="text-foreground font-semibold">Kumar</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-foreground font-semibold">rajesh@email.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Phone</label>
                        <p className="text-foreground font-semibold">+91 98765 43210</p>
                      </div>
                    </div>
                    <Button>Edit Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="space-y-4">
                {mockAddresses.map((address) => (
                  <Card key={address.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{address.type}</CardTitle>
                          {address.isDefault && (
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full mt-1 inline-block">
                              Default
                            </span>
                          )}
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-foreground mb-1">{address.name}</p>
                      <p className="text-muted-foreground mb-2">{address.address}</p>
                      <p className="text-muted-foreground">Phone: {address.phone}</p>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
