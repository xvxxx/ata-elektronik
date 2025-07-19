import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Gamepad, Home, Car, Factory, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const productCategories = [
    {
      icon: Smartphone,
      title: 'Smartphones & Wearables',
      description: 'Latest mobile technology components, smartwatch parts, and wearable device solutions.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Gamepad,
      title: 'Gaming & Entertainment',
      description: 'Gaming console components, VR technology, smart TV parts, and entertainment systems.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Home,
      title: 'Smart Home & IoT',
      description: 'Connected home devices, IoT sensors, smart appliances, and automation components.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Car,
      title: 'Automotive Electronics',
      description: 'Advanced automotive components, EV systems, and connected vehicle technologies.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Factory,
      title: 'Industrial Automation',
      description: 'Industrial control systems, robotics components, and manufacturing automation.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Headphones,
      title: 'Audio & Communication',
      description: 'Professional audio equipment, telecommunication systems, and wireless technologies.',
      image: '/api/placeholder/400/300'
    }
  ];

  const features = [
    {
      title: 'Premium Quality Components',
      description: 'Sourced from certified global manufacturers with rigorous quality standards and extensive testing protocols.',
    },
    {
      title: 'Expert Technical Support',
      description: 'Dedicated engineering team providing 24/7 technical assistance and custom integration solutions.',
    },
    {
      title: 'Fast European Delivery',
      description: 'Efficient logistics network ensuring rapid delivery across all European markets with tracking.',
    },
    {
      title: 'Industry Partnerships',
      description: 'Strategic relationships with leading technology companies enabling access to cutting-edge innovations.',
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Product Categories Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Product Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of electronic components serving diverse industries with innovative solutions and reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group cursor-pointer glow-hover border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">ATA Elektronik</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Committed to excellence in every aspect of our business, from product quality to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Power Your Next Innovation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with ATA Elektronik for reliable, high-quality electronic components that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/20 hover:border-primary/40">
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;