import { ArrowLeft, Search, MapPin, Settings, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import metalDetectorImage from '@/assets/metal-detectors.jpg';

const MetalDetectors = () => {
  const products = [
    {
      icon: Search,
      title: "GER Titan Series",
      description: "Professional deep-seeking metal detectors",
      features: ["Deep Detection", "3D Imaging", "Ground Penetrating", "Professional Grade"]
    },
    {
      icon: Target,
      title: "GPX/GPZ Series",
      description: "Advanced gold prospecting detectors",
      features: ["Gold Specific", "Advanced Discrimination", "Waterproof", "Long Range"]
    },
    {
      icon: MapPin,
      title: "Stinger Series",
      description: "Security and inspection metal detectors",
      features: ["High Sensitivity", "Fast Detection", "Easy Operation", "Reliable Performance"]
    },
    {
      icon: Settings,
      title: "Garrett Detectors",
      description: "Versatile metal detectors for all applications",
      features: ["Multi-Purpose", "User Friendly", "Proven Technology", "Excellent Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={metalDetectorImage} 
            alt="Metal Detectors" 
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
              <span className="gradient-text">Metal Detectors</span> & Equipment
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional metal detection equipment from leading manufacturers including GER Titan, 
              GPX/GPZ series, Stinger, and Garrett. Advanced detection technology for security, 
              prospecting, and archaeological applications.
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
              Detection Equipment Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional metal detection solutions for every application
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
              Leading Detection Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of premium metal detection equipment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['GER Titan', 'Minelab', 'Garrett', 'Fisher', 'Teknetics', 'XP Deus', 'Nokta', 'Bounty Hunter'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Detection Applications
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gold Prospecting</h3>
              <p className="text-muted-foreground">Specialized detectors for finding gold nuggets and precious metals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Screening</h3>
              <p className="text-muted-foreground">Professional security detectors for access control and safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Archaeological Survey</h3>
              <p className="text-muted-foreground">Precision detection for historical and archaeological research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Advanced Detection Technology
            </h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art features for precise and reliable detection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">3D Imaging</h3>
              <p className="text-sm text-muted-foreground">Visual representation of detected objects</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Multi-Frequency</h3>
              <p className="text-sm text-muted-foreground">Multiple frequencies for enhanced detection</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">GPS Integration</h3>
              <p className="text-sm text-muted-foreground">Location mapping and waypoint marking</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Deep Seeking</h3>
              <p className="text-sm text-muted-foreground">Extended detection depth capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industries We Serve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Security Services</h3>
              <p className="text-sm text-muted-foreground">Airport security, event screening, facility protection</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Mining & Prospecting</h3>
              <p className="text-sm text-muted-foreground">Gold prospecting, mineral exploration, treasure hunting</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Construction</h3>
              <p className="text-sm text-muted-foreground">Utility location, rebar detection, site surveying</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Law Enforcement</h3>
              <p className="text-sm text-muted-foreground">Evidence recovery, investigation support, safety screening</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Archaeology</h3>
              <p className="text-sm text-muted-foreground">Historical research, artifact discovery, site mapping</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Recreational</h3>
              <p className="text-sm text-muted-foreground">Beach detection, coin shooting, hobby prospecting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Discover What's Hidden
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get wholesale pricing on professional metal detection equipment and accessories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Detection Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Detection Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetalDetectors;