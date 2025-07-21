import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, Send, 
  Building, Users, Headphones, Globe 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent Successfully!',
      description: 'Thank you for contacting us. We will respond within 24 hours.',
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Building,
      title: 'Main Office',
      details: [
        'ATA Elektronik GmbH',
        'Berliner Str. 150',
        '42277 Wuppertal, Germany'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: [
        '+49 152 192 115 12',
        '+49 152 157 386 07 (Sales)',
        'Fax: +49 152 157 489 63'
      ]
    },
    {
      icon: Mail,
      title: 'Email Contacts',
      details: [
        'sales@ata-elektronik.de',
        'Website: www.ata-elektronik.de',
        'Reg. No: HRB 27924, TIN: DE 20716716'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 - 18:00',
        'Saturday: 9:00 - 14:00',
        'Emergency Support: 24/7'
      ]
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Sales Department',
      description: 'Product inquiries, quotations, and order management',
      contact: 'sales@ata-elektronik.de',
      phone: '+49 (0) 30 12345679'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Engineering assistance and technical consultations',
      contact: 'support@ata-elektronik.de',
      phone: '+49 (0) 30 12345680'
    },
    {
      icon: Globe,
      title: 'International Business',
      description: 'European partnerships and global sourcing',
      contact: 'international@ata-elektronik.de',
      phone: '+49 (0) 30 12345681'
    }
  ];

  const officeLocations = [
    {
      city: 'Berlin',
      country: 'Germany',
      address: 'Musterstraße 123, 12345 Berlin',
      type: 'Headquarters',
      contact: '+49 (0) 30 12345678'
    },
    {
      city: 'Munich',
      country: 'Germany',
      address: 'Technologiepark 45, 80000 Munich',
      type: 'Regional Office',
      contact: '+49 (0) 89 12345678'
    },
    {
      city: 'Hamburg',
      country: 'Germany',
      address: 'Hafenstraße 67, 20000 Hamburg',
      type: 'Distribution Center',
      contact: '+49 (0) 40 12345678'
    }
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Contact Our <span className="gradient-text">Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your electronic component needs? Our experienced team is here to provide 
              expert guidance, technical support, and customized solutions for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="glow-hover border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-display flex items-center">
                    <MessageCircle className="w-6 h-6 text-primary mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+49 (0) 30 12345678"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What can we help you with?"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your requirements..."
                        rows={6}
                        required
                        className="border-primary/20 focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-tech">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                {info.title}
                              </h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-muted-foreground text-sm">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Department <span className="gradient-text">Contacts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect directly with the right department for faster, more specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="text-center glow-hover border-primary/10 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {dept.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {dept.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-primary font-medium">
                        {dept.contact}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {dept.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visit our offices across Germany for in-person consultations and local support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-muted rounded-2xl overflow-hidden border border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-muted-foreground">
                    Berlin, Germany - Headquarters
                  </p>
                  <Button className="mt-4 btn-tech">
                    View on Google Maps
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 bg-tech-gradient opacity-5" />
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              {officeLocations.map((location, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-display font-semibold text-foreground">
                          {location.city}, {location.country}
                        </h3>
                        <Badge variant="outline" className="mt-1 border-primary/20 text-primary">
                          {location.type}
                        </Badge>
                      </div>
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {location.address}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {location.contact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Start Your Project Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to begin? Our team is standing by to help you find the perfect electronic 
            components and solutions for your next innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-tech">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;