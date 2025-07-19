import { ArrowLeft, Gamepad2, Monitor, Headphones, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import gamingImage from '@/assets/gaming-entertainment.jpg';

const GamingEntertainment = () => {
  const products = [
    {
      icon: Gamepad2,
      title: "Gaming Consoles",
      description: "Latest PlayStation, Xbox, and Nintendo gaming systems",
      features: ["4K Gaming", "Ray Tracing", "Fast Loading", "Exclusive Titles"]
    },
    {
      icon: Monitor,
      title: "VR Headsets",
      description: "Immersive virtual reality systems and accessories",
      features: ["High Resolution", "Low Latency", "Room Scale", "Hand Tracking"]
    },
    {
      icon: Tv,
      title: "Smart TVs",
      description: "Premium entertainment displays with smart features",
      features: ["4K/8K Resolution", "HDR Support", "Smart OS", "Gaming Mode"]
    },
    {
      icon: Headphones,
      title: "Gaming Audio",
      description: "Professional gaming headsets and audio equipment",
      features: ["Surround Sound", "Noise Isolation", "Crystal Clear Mic", "Comfortable Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gamingImage} 
            alt="Gaming and Entertainment" 
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
              <span className="gradient-text">Gaming</span> & Entertainment
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium gaming consoles, VR systems, smart TVs, and entertainment technology. 
              Experience the latest in interactive entertainment with cutting-edge graphics, 
              immersive audio, and revolutionary gaming experiences.
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
              Entertainment Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of gaming and entertainment solutions for every need
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
              Leading Gaming Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of premium gaming and entertainment brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['PlayStation', 'Xbox', 'Nintendo', 'Meta Quest', 'Samsung', 'LG', 'Sony', 'Razer'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose Our Gaming Solutions?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-muted-foreground">Always stocking the newest gaming consoles and entertainment devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
              <p className="text-muted-foreground">Expert technical support and product training for retailers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-muted-foreground">Best wholesale prices with flexible payment terms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our gaming specialists for wholesale pricing and product availability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Gaming Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingEntertainment;