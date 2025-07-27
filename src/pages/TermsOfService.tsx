import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, AlertTriangle, CreditCard, Truck, Shield } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service - ATA Elektronik GmbH';
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
                <Scale className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none space-y-8">
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>By accessing and using the services of ATA Elektronik GmbH, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    <p>If you do not agree to abide by the above, please do not use this service.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Orders and Payment</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>All orders are subject to acceptance and availability. We reserve the right to refuse any order.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Small/Trial Purchases: Payment via money services (ACES, Western Union, MoneyGram, Ria)</li>
                      <li>Large/Bulk Orders: Wire transfer, direct deposit, or bank transfer</li>
                      <li>Payment must be made to our official Collection Agents or Accounts Payable</li>
                      <li>All prices are subject to change without notice</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Truck className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Shipping and Delivery</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We provide shipping services across Europe including Germany, France, Poland, Portugal, Denmark, and Netherlands.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Delivery times are estimates and not guaranteed</li>
                      <li>Risk of loss transfers to buyer upon delivery to carrier</li>
                      <li>Shipping costs are additional unless otherwise specified</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Warranty and Returns</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We provide warranty coverage on our electronic components as follows:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Products are warranted against defects in materials and workmanship</li>
                      <li>Warranty period varies by product and manufacturer</li>
                      <li>Returns must be authorized and in original packaging</li>
                      <li>Customer is responsible for return shipping costs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>ATA Elektronik GmbH shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                    <p>Our total liability shall not exceed the amount paid for the specific product or service.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>For questions about these Terms of Service:</p>
                    <div className="space-y-2">
                      <p><strong>ATA Elektronik GmbH</strong></p>
                      <p>Berliner Str. 150, 42277 Wuppertal, Germany</p>
                      <p>Reg. No: HRB 27924</p>
                      <p>TIN: DE 20716716</p>
                      <p><strong>Email:</strong> sales@ata-elektronik.de</p>
                      <p><strong>Phone:</strong> +49 152 157 386 07</p>
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

export default TermsOfService;