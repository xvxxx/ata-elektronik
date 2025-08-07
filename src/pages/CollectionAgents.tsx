import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Building2, Banknote, AlertTriangle, Users } from "lucide-react";

const CollectionAgents = () => {

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron bg-gradient-primary bg-clip-text text-transparent">
            Collection Agents / Accounts Payable
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Payment Methods */}
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron">
                <CreditCard className="h-8 w-8 text-primary" />
                <span>Payment Methods</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Small Orders */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary flex items-center space-x-2">
                  <Banknote className="h-5 w-5" />
                  <span>Small or Trial Purchases:</span>
                </h3>
                <p className="text-muted-foreground">
                  Use money services such as ACES, Western Union, MoneyGram, Ria, etc.
                </p>
              </div>

              {/* Large Orders */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>Large or Bulk Orders:</span>
                </h3>
                <p className="text-muted-foreground">
                  Use wire transfer, direct deposit, or bank transfer.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Collection Agents Table */}
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron">
                <Users className="h-8 w-8 text-primary" />
                <span>Collection Agents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary font-semibold">#</TableHead>
                    <TableHead className="text-primary font-semibold">Collection Agents</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-primary/20">
                    <TableCell className="font-medium"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow className="border-primary/20">
                    <TableCell className="font-medium"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow className="border-primary/20">
                    <TableCell className="font-medium"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow className="border-primary/20">
                    <TableCell className="font-medium"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow className="border-primary/20">
                    <TableCell className="font-medium"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Important Disclaimer */}
          <Card className="glass-card border-amber-500/20 bg-amber-50/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl font-orbitron text-amber-500">
                <AlertTriangle className="h-8 w-8" />
                <span>Important Disclaimer</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Payment for small or trial purchases must always be made in favor of our official Collection Agents or Accounts Payable.
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

export default CollectionAgents;