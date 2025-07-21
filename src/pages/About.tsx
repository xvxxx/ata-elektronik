import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Users, Award, Globe, TrendingUp, Shield, Clock, Star } from 'lucide-react';
import teamImage from '@/assets/team-image.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation Excellence',
      description: 'Constantly pushing boundaries with cutting-edge technology solutions and forward-thinking approaches.'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Building lasting relationships through trust, reliability, and dedicated customer support services.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards through rigorous testing and certified quality management systems.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Leveraging worldwide partnerships to deliver comprehensive solutions across European markets.'
    }
  ];

  const milestones = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'ATA Elektronik established in Berlin, Germany with a vision to revolutionize electronic component distribution.'
    },
    {
      year: '2005',
      title: 'European Expansion',
      description: 'Extended operations across major European markets, establishing key partnerships and distribution centers.'
    },
    {
      year: '2012',
      title: 'Technology Innovation',
      description: 'Launched advanced component testing facilities and introduced AI-powered inventory management systems.'
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Received ISO 9001:2015 certification and multiple industry awards for excellence in customer service.'
    },
    {
      year: '2023',
      title: 'Sustainable Future',
      description: 'Implemented comprehensive sustainability programs and carbon-neutral shipping across all operations.'
    }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Annual Growth Rate', value: '25%', description: 'Consistent year-over-year growth' },
    { icon: Users, label: 'Expert Team Members', value: '150+', description: 'Skilled professionals worldwide' },
    { icon: Star, label: 'Customer Satisfaction', value: '98%', description: 'Based on annual surveys' },
    { icon: Clock, label: 'Response Time', value: '<2hrs', description: 'Average technical support response' }
  ];

  const expertise = [
    'Automotive Electronics', 'Consumer Technology', 'Industrial Automation', 
    'Telecommunications', 'IoT Solutions', 'Renewable Energy', 
    'Medical Devices', 'Aerospace Components'
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
              25+ Years of Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              About{' '}
              <span className="gradient-text">ATA Elektronik GmbH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ATA Elektronik GmbH is a leading German supplier of high-quality electronic components, catering to a wide range of industries across Europe. 
              Based in Wuppertal, Germany, we specialize in providing advanced electronic solutions that power innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At ATA Elektronik GmbH, our mission is to be the trusted partner for businesses across Europe by offering top-tier 
                  electronic components that enhance performance, innovation, and sustainability. We strive to meet the evolving needs 
                  of the modern world with cutting-edge technologies, providing our clients with the most reliable and efficient 
                  solutions for their electronic systems.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Global Partnerships and Expertise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with globally recognized manufacturers and industry leaders to ensure that we bring the best products to our customers. 
                  Our extensive network of partners includes some of the most innovative brands in the electronics industry, allowing us to supply 
                  state-of-the-art components and solutions that meet the highest standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Our expert team, equipped with deep industry knowledge, is dedicated to supporting clients with tailored solutions and advice 
                  on integrating the latest technology into their systems. We focus on building long-term relationships based on trust, quality, and performance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={teamImage}
                alt="ATA Elektronik Team"
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-tech-gradient opacity-20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision and define our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center group glow-hover border-primary/10 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and established our position as a leading electronic components supplier.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-tech-gradient rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="ml-12 md:ml-0">
                      <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              By the <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable excellence across all aspects of our operations and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Areas of <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized knowledge and experience across diverse technology sectors and applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((area, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-6 py-3 text-sm font-medium border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Partner with Experience and Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust ATA Elektronik for their electronic component needs. 
            Experience the difference that quality and expertise make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Start Partnership
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;