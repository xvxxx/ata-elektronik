import { ArrowLeft, Home, Speaker, Bot, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import smartHomeImage from '@/assets/smart-home.jpg';

const SmartHome = () => {
  const products = [
    {
      icon: Speaker,
      title: "Smart Speakers",
      description: "Voice-controlled speakers with AI assistants",
      features: ["Voice Control", "Multi-room Audio", "Smart Home Hub", "High-Quality Sound"]
    },
    {
      icon: Bot,
      title: "Robotic Vacuums",
      description: "Intelligent cleaning robots with mapping technology",
      features: ["Smart Mapping", "Auto-scheduling", "App Control", "Multi-surface Cleaning"]
    },
    {
      icon: Home,
      title: "Smart Appliances",
      description: "Connected home appliances for modern living",
      features: ["Energy Efficient", "Remote Control", "Smart Scheduling", "Integration Ready"]
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Smart doorbells, cameras, and security solutions",
      features: ["HD Video", "Motion Detection", "Cloud Storage", "Mobile Alerts"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={smartHomeImage} 
            alt="Smart Home Appliances" 
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
              <span className="gradient-text">Smart Home</span> & Appliances
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform homes with intelligent appliances and smart home solutions. 
              From voice-controlled speakers to robotic vacuums and smart security systems, 
              we offer the latest in connected home technology.
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
              Smart Home Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete ecosystem of connected devices for the modern smart home
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
              Trusted Smart Home Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              We partner with leading smart home technology manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Amazon', 'Google', 'Apple', 'iRobot', 'Ring', 'Nest', 'Philips', 'Sonos'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Smart Home Integration Benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unified Control</h3>
              <p className="text-muted-foreground">Control all smart devices from a single app or voice command</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-muted-foreground">Advanced security features with real-time monitoring and alerts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Speaker className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
              <p className="text-muted-foreground">Optimize energy usage with smart scheduling and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Build Smarter Homes
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get wholesale pricing on the latest smart home technology and appliances
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Smart Home Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartHome;