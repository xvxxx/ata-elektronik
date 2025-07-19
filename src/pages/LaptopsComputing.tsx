import { ArrowLeft, Laptop, Monitor, HardDrive, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import laptopsImage from '@/assets/laptops-computing.jpg';

const LaptopsComputing = () => {
  const products = [
    {
      icon: Laptop,
      title: "Laptops & Notebooks",
      description: "Premium laptops for business, gaming, and creative work",
      features: ["High Performance", "Long Battery Life", "Premium Build", "Latest Processors"]
    },
    {
      icon: Monitor,
      title: "Desktop PCs",
      description: "Powerful desktop computers for every computing need",
      features: ["Custom Configurations", "Upgradeable", "High Performance", "Professional Grade"]
    },
    {
      icon: Cpu,
      title: "Workstations",
      description: "Professional workstations for demanding applications",
      features: ["Multi-core Processors", "Professional Graphics", "ECC Memory", "ISV Certified"]
    },
    {
      icon: HardDrive,
      title: "Computing Accessories",
      description: "Monitors, keyboards, mice, and computing peripherals",
      features: ["4K Displays", "Mechanical Keyboards", "Precision Mice", "Ergonomic Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={laptopsImage} 
            alt="Laptops and Computing" 
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
              <span className="gradient-text">Laptops</span> & Computing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional computing solutions from leading manufacturers including MacBooks, 
              Windows PCs, Surface devices, and workstations. Powerful performance for business, 
              creative work, and high-end computing applications.
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
              Computing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of computing hardware for professional and personal use
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
              Leading Computing Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of premium computing equipment manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Apple', 'Microsoft', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computing Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Computing Solutions for Every Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Solutions</h3>
              <p className="text-muted-foreground">Enterprise-grade laptops and desktops for professional environments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Workstations</h3>
              <p className="text-muted-foreground">High-performance systems for video editing, 3D rendering, and design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gaming PCs</h3>
              <p className="text-muted-foreground">Custom gaming rigs with latest graphics cards and processors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest Technology Specifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge hardware with the latest processors and features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Processors</h3>
              <p className="text-sm text-muted-foreground">Intel Core i9, AMD Ryzen 9, Apple M3</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Graphics</h3>
              <p className="text-sm text-muted-foreground">RTX 4090, AMD RX 7900, Integrated</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Memory</h3>
              <p className="text-sm text-muted-foreground">Up to 128GB DDR5, ECC Support</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Storage</h3>
              <p className="text-sm text-muted-foreground">NVMe SSD up to 8TB</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Power Your Business
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get wholesale pricing on premium computing equipment and professional workstations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Computing Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaptopsComputing;