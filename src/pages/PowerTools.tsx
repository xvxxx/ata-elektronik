import { ArrowLeft, Wrench, Drill, Hammer, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import powerToolsImage from '@/assets/power-tools.jpg';

const PowerTools = () => {
  const products = [
    {
      icon: Drill,
      title: "Cordless Drills",
      description: "High-performance cordless drills and drivers",
      features: ["Long Battery Life", "Variable Speed", "LED Lighting", "Quick Chuck"]
    },
    {
      icon: Wrench,
      title: "Impact Tools",
      description: "Impact drivers, wrenches, and fastening tools",
      features: ["High Torque", "Compact Design", "Brushless Motors", "Professional Grade"]
    },
    {
      icon: Hammer,
      title: "Construction Tools",
      description: "Saws, grinders, and heavy-duty construction equipment",
      features: ["Durable Construction", "Safety Features", "Precision Cutting", "Ergonomic Design"]
    },
    {
      icon: Settings,
      title: "Tool Accessories",
      description: "Batteries, chargers, bits, and tool storage",
      features: ["Fast Charging", "Universal Fit", "Organized Storage", "Durable Materials"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={powerToolsImage} 
            alt="Power Tools" 
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
              <span className="gradient-text">Power Tools</span> & Equipment
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional-grade power tools from leading manufacturers including Ryobi, DeWALT, 
              and Makita. Complete range of cordless tools, construction equipment, and accessories 
              for contractors and professionals.
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
              Professional Tool Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of power tools and equipment for professional contractors
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
              Trusted Tool Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of leading power tool manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Ryobi', 'DeWALT', 'Makita', 'Milwaukee', 'Bosch', 'Hilti', 'Festool', 'Metabo'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional Tool Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Drill className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cordless Systems</h3>
              <p className="text-muted-foreground">Complete cordless tool systems with interchangeable batteries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Heavy Duty Tools</h3>
              <p className="text-muted-foreground">Professional-grade tools for demanding construction applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Accessories</h3>
              <p className="text-muted-foreground">Full range of accessories, batteries, and storage solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-muted-foreground">
              Tools for every professional trade and industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Construction</h3>
              <p className="text-sm text-muted-foreground">Heavy-duty tools for building and renovation</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Electrical</h3>
              <p className="text-sm text-muted-foreground">Specialized tools for electrical installations</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Plumbing</h3>
              <p className="text-sm text-muted-foreground">Professional plumbing and HVAC tools</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Woodworking</h3>
              <p className="text-sm text-muted-foreground">Precision tools for carpentry and millwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Equip Your Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get wholesale pricing on professional power tools and equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Tool Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Tool Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerTools;