import { ArrowLeft, Headphones, Mic, Speaker, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import audioImage from '@/assets/audio-accessories.jpg';

const AudioAccessories = () => {
  const products = [
    {
      icon: Headphones,
      title: "Headphones & Earbuds",
      description: "Premium audio headphones and wireless earbuds",
      features: ["Hi-Fi Audio", "Noise Cancellation", "Wireless Connectivity", "Long Battery Life"]
    },
    {
      icon: Mic,
      title: "Audio Mixers",
      description: "Professional mixing consoles and audio interfaces",
      features: ["Multi-channel", "Digital Processing", "Studio Quality", "Live Performance"]
    },
    {
      icon: Speaker,
      title: "Speakers & Sound Systems",
      description: "High-quality speakers for home and professional use",
      features: ["Full Range Sound", "Wireless Streaming", "Smart Integration", "Powerful Bass"]
    },
    {
      icon: Music,
      title: "Audio Accessories",
      description: "Cables, adapters, and professional audio gear",
      features: ["High-Quality Cables", "Universal Compatibility", "Professional Grade", "Durable Construction"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={audioImage} 
            alt="Audio and Accessories" 
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
              <span className="gradient-text">Audio</span> & Accessories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium audio equipment and accessories including headphones, mixers, AirPods, 
              speakers, and professional audio gear. Experience superior sound quality with 
              cutting-edge audio technology from leading manufacturers.
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
              Audio Equipment Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of audio solutions for consumers and professionals
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
              Premium Audio Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of leading audio equipment manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Apple', 'Sony', 'Bose', 'JBL', 'Sennheiser', 'Audio-Technica', 'Beats', 'Marshall'].map((brand, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Audio Solutions for Every Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consumer Audio</h3>
              <p className="text-muted-foreground">High-quality headphones, earbuds, and speakers for everyday use</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Audio</h3>
              <p className="text-muted-foreground">Studio equipment, mixers, and professional-grade audio systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Speaker className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Commercial Systems</h3>
              <p className="text-muted-foreground">Sound systems for retail, hospitality, and commercial applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Technology */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest Audio Technology
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge features for superior audio experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Active Noise Cancellation</h3>
              <p className="text-sm text-muted-foreground">Advanced noise reduction technology</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Spatial Audio</h3>
              <p className="text-sm text-muted-foreground">3D surround sound experience</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Wireless Connectivity</h3>
              <p className="text-sm text-muted-foreground">Bluetooth 5.0+ and WiFi streaming</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="font-semibold text-lg mb-2">Hi-Res Audio</h3>
              <p className="text-sm text-muted-foreground">Studio-quality sound reproduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Market Applications
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Consumer Electronics</h3>
              <p className="text-sm text-muted-foreground">Retail audio products for everyday consumers</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Music Production</h3>
              <p className="text-sm text-muted-foreground">Studio monitors, interfaces, and recording equipment</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Live Events</h3>
              <p className="text-sm text-muted-foreground">PA systems, microphones, and live sound equipment</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Gaming & Esports</h3>
              <p className="text-sm text-muted-foreground">Gaming headsets and competitive audio gear</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Corporate Audio</h3>
              <p className="text-sm text-muted-foreground">Conference systems and presentation audio</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Fitness & Sports</h3>
              <p className="text-sm text-muted-foreground">Waterproof and sports-oriented audio devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Amplify Your Business
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get wholesale pricing on premium audio equipment and accessories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Audio Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-tech" asChild>
              <Link to="/contact">Contact Audio Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AudioAccessories;