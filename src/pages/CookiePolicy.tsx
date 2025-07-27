import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, Info, Eye, Trash2, Shield } from 'lucide-react';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Cookie Policy - ATA Elektronik GmbH';
  }, []);

  return (
    <>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center mb-6">
                <Cookie className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                This policy explains how ATA Elektronik GmbH uses cookies and similar technologies on our website.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none space-y-8">
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Info className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">What Are Cookies?</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
                  </div>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Performance Cookies</h3>
                      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                      <p>These cookies remember choices you make to improve your experience, such as your preferred language or region.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Settings className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">How We Use Cookies</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use cookies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Ensure our website works properly</li>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Improve our website performance and user experience</li>
                      <li>Provide relevant content and recommendations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Trash2 className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Managing Cookies</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You can control and manage cookies in several ways:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                      <li>Third-party tools: Various tools are available to manage cookies</li>
                      <li>Opt-out links: Some services provide direct opt-out options</li>
                    </ul>
                    <p className="mt-4">Please note that disabling cookies may affect the functionality of our website.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Third-Party Cookies</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Our website may contain links to other websites and services. These third parties may also use cookies. We do not control these cookies and recommend reviewing their privacy policies.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have any questions about our Cookie Policy:</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> sales@ata-elektronik.de</p>
                      <p><strong>Phone:</strong> +49 152 157 386 07</p>
                      <p><strong>Address:</strong> Berliner Str. 150, 42277 Wuppertal, Germany</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Last updated: January 2025</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;