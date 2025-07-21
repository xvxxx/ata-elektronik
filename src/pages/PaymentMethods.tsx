import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Building2, Banknote, AlertTriangle } from "lucide-react";

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron bg-gradient-primary bg-clip-text text-transparent">
            Payment Methods & Collection Agents
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure payment options for your electronic component orders
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Small Orders */}
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron">
                <Banknote className="h-8 w-8 text-primary" />
                <span>Small or Trial Purchases</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                For small orders and trial purchases, we accept payments through reliable money transfer services:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <span className="font-semibold text-primary">ACES</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <span className="font-semibold text-primary">Western Union</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <span className="font-semibold text-primary">MoneyGram</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <span className="font-semibold text-primary">Ria</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Large Orders */}
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron">
                <Building2 className="h-8 w-8 text-primary" />
                <span>Large or Bulk Orders</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                For substantial orders and bulk purchases, we offer secure banking solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-6 rounded-lg bg-primary/10">
                  <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="font-semibold text-primary">Wire Transfer</span>
                </div>
                <div className="text-center p-6 rounded-lg bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="font-semibold text-primary">Direct Deposit</span>
                </div>
                <div className="text-center p-6 rounded-lg bg-primary/10">
                  <Banknote className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="font-semibold text-primary">Bank Transfer</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Disclaimer */}
          <Card className="glass-card border-amber-500/20 bg-amber-50/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron text-amber-500">
                <AlertTriangle className="h-8 w-8" />
                <span>Important Notice</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                <strong className="text-amber-500">Disclaimer:</strong> Payment for small or trial purchases must always be made in favor of our 
                <strong> official Collection Agents or Accounts Payable</strong>. This ensures secure processing and proper order fulfillment.
              </p>
              <div className="mt-6 p-4 rounded-lg bg-primary/10">
                <h4 className="font-semibold text-primary mb-2">Company Details:</h4>
                <p className="text-sm text-muted-foreground">
                  ATA Elektronik GmbH<br />
                  Registration No: HRB 27924<br />
                  TIN: DE 20716716<br />
                  Berliner Str. 150, 42277 Wuppertal, Germany
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Payment Info */}
          <Card className="glass-card border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4 font-orbitron">Need Payment Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our sales team for specific payment instructions and collection agent details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:sales@ata-elektronik.de" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Email Sales Team
                </a>
                <a 
                  href="tel:+4915215738607" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
                >
                  Call Sales: +49 152 157 386 07
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;