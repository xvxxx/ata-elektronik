import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cpu, Wrench, Truck, HeadphonesIcon, Shield, Zap, 
  Clock, Globe, CheckCircle, ArrowRight, Star, Award 
} from 'lucide-react';
import servicesImage from '@/assets/services-illustration.jpg';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Cpu,
      title: 'Component Sourcing & Supply',
      description: 'Comprehensive sourcing solutions for electronic components across all major categories and specifications.',
      features: [
        'Global supplier network access',
        'Real-time inventory tracking',
        'Competitive pricing strategies',
        'Quality verification processes'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wrench,
      title: 'Technical Engineering Support',
      description: 'Expert engineering assistance for component integration, design optimization, and technical consulting.',
      features: [
        'Design review and optimization',
        'Component compatibility analysis',
        'Technical documentation',
        'Custom solution development'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Truck,
      title: 'Logistics & Distribution',
      description: 'Efficient supply chain management with fast, reliable delivery across European markets.',
      features: [
        'Express delivery options',
        'Inventory management',
        'Just-in-time delivery',
        'Tracking and monitoring'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer Support Services',
      description: '24/7 customer support with dedicated account management and technical assistance.',
      features: [
        'Dedicated account managers',
        'Technical helpdesk support',
        'Order status tracking',
        'Returns and warranty handling'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification processes ensuring component reliability and performance standards.',
      benefits: ['ISO 9001:2015 certified processes', 'Component authentication', 'Performance testing']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Fast-track development support with component samples and prototype assembly services.',
      benefits: ['Sample provision', 'Prototype assembly', 'Testing support']
    },
    {
      icon: Clock,
      title: 'Emergency Supply',
      description: 'Expedited sourcing and delivery for critical components and urgent project requirements.',
      benefits: ['Same-day sourcing', 'Emergency delivery', 'Critical component availability']
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'Access to worldwide manufacturer networks and exclusive distribution agreements.',
      benefits: ['Manufacturer relationships', 'Exclusive products', 'Global sourcing']
    }
  ];

  const industries = [
    { name: 'Automotive', percentage: 35, description: 'Electric vehicles, infotainment, safety systems' },
    { name: 'Consumer Electronics', percentage: 25, description: 'Smartphones, appliances, wearables' },
    { name: 'Industrial Automation', percentage: 20, description: 'Manufacturing, robotics, control systems' },
    { name: 'Telecommunications', percentage: 15, description: '5G infrastructure, networking equipment' },
    { name: 'Healthcare', percentage: 5, description: 'Medical devices, diagnostic equipment' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'AS9120B', description: 'Aerospace Quality Standard' },
    { name: 'IEC 61340', description: 'Electrostatic Discharge Control' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Professional <span className="gradient-text">Services</span>{' '}
              for Electronic Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From component sourcing to technical support, we provide end-to-end services that ensure 
              your projects succeed with the highest quality electronic solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive service portfolio designed to meet all your electronic component needs and project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group glow-hover border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-display">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto mt-4">
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

      {/* Additional Services */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Specialized <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Additional services designed to provide comprehensive support for specialized requirements and unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center group glow-hover border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Industry <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Deep understanding of industry-specific requirements and standards across diverse market segments.
              </p>

              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{industry.name}</span>
                      <span className="text-sm text-primary font-medium">{industry.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-tech-gradient h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${industry.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={servicesImage}
                alt="Electronic Services"
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-tech-gradient opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Quality <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognized certifications ensuring the highest standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Service Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Streamlined workflow designed to deliver exceptional results efficiently and reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your requirements' },
              { step: '02', title: 'Analysis', description: 'Technical feasibility assessment' },
              { step: '03', title: 'Sourcing', description: 'Component identification & procurement' },
              { step: '04', title: 'Quality Check', description: 'Rigorous testing & verification' },
              { step: '05', title: 'Delivery', description: 'Timely delivery & support' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Experience Professional Service Excellence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discuss your requirements and discover how our comprehensive 
            services can accelerate your project success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Request Service Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;