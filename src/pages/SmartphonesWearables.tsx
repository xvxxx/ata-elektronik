import { ArrowLeft, Smartphone, Watch, Headphones, Tablet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import smartphonesImage from '@/assets/smartphones-wearables.jpg';

const SmartphonesWearables = () => {
  const products = [
    {
      icon: Smartphone,
      title: "Smartphones",
      description: "Latest Android and iOS devices from premium brands",
      features: ["5G Ready", "Premium Build Quality", "Advanced Cameras", "Long Battery Life"]
    },
    {
      icon: Watch,
      title: "Smartwatches",
      description: "Fitness trackers and smartwatches for health monitoring",
      features: ["Health Tracking", "GPS Navigation", "Water Resistant", "Multi-day Battery"]
    },
    {
      icon: Tablet,
      title: "Tablets",
      description: "High-performance tablets for work and entertainment",
      features: ["High Resolution Displays", "Productivity Apps", "Stylus Support", "Portable Design"]
    },
    {
      icon: Headphones,
      title: "Wearable Audio",
      description: "Premium earbuds and wireless headphones",
      features: ["Noise Cancellation", "Wireless Connectivity", "Hi-Fi Audio", "Comfort Fit"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={smartphonesImage} 
            alt="Smartphones and Wearables" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Smartphones</span> & Wearables
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Cutting-edge mobile technology and wearable devices from the world's leading manufacturers. 
              Stay connected and monitor your health with our premium selection of smartphones, smartwatches, 
              and wireless accessories.
            </p>
            <Button size="lg" className="btn-tech">
              Request Wholesale Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of mobile and wearable technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group card-tech hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Premium Brand Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              We distribute products from the world's most trusted technology brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Apple', 'Samsung', 'Google', 'Garmin', 'Fitbit', 'OnePlus', 'Xiaomi', 'Huawei'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our team for wholesale pricing and bulk order information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Wholesale Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartphonesWearables;