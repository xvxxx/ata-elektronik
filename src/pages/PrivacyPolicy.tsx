import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - ATA Elektronik GmbH';
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
                <Shield className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how ATA Elektronik GmbH collects, uses, and protects your personal information.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none space-y-8">
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact us through our website or email</li>
                      <li>Request product information or quotes</li>
                      <li>Subscribe to our newsletters or updates</li>
                      <li>Participate in surveys or feedback</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Database className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Communicate with you about products, services, and events</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lock className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Data Protection</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p>Your data is stored securely and access is limited to authorized personnel only.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Your Rights</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Under GDPR, you have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Delete your data</li>
                      <li>Object to data processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;