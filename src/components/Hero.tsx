import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, Award, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-electronics.jpg';

const Hero = () => {
  const stats = [
    { icon: Shield, label: 'Years of Excellence', value: '25+' },
    { icon: Globe, label: 'Countries Served', value: '15+' },
    { icon: Award, label: 'Certified Partners', value: '100+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Advanced Electronic Components"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 tech-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <Zap className="w-4 h-4 mr-2" />
                Leading Electronic Solutions Provider
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Advanced{' '}
                <span className="gradient-text">Electronic</span>{' '}
                Components for Europe
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                ATA Elektronik GmbH delivers cutting-edge electronic solutions across automotive, 
                consumer electronics, industrial automation, and telecommunications sectors. 
                Trusted by industry leaders for over 25 years.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-tech group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                Download Catalog
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-display font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 glow-hover float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Certified</h3>
                    <p className="text-sm text-muted-foreground">ISO 9001:2015 Standards</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 glow-hover float ml-8" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">European Distribution</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 glow-hover float" style={{ animationDelay: '4s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Support</h3>
                    <p className="text-sm text-muted-foreground">24/7 Technical Assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;