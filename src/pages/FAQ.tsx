import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of electronic components do you supply?",
      answer: "We supply a comprehensive range of electronic components including smartphones & wearables, home entertainment & gaming systems, smart home appliances, laptops & computing equipment, power tools, metal detectors, and audio accessories. Our products serve automotive, industrial automation, telecommunications, and consumer electronics sectors."
    },
    {
      question: "Which countries do you distribute to?",
      answer: "ATA Elektronik GmbH serves businesses across Europe with our main distribution outlets in Germany, France, Poland, Portugal, and the Netherlands. We can also arrange special deliveries to other European countries upon request."
    },
    {
      question: "What are your minimum order quantities?",
      answer: "We accommodate both small trial purchases and large bulk orders. For trial purchases, we offer flexible quantities to help you test our products. For bulk orders, we provide competitive pricing based on volume. Contact our sales team for specific MOQ requirements for your desired products."
    },
    {
      question: "How do I place an order?",
      answer: "You can place orders by contacting our sales team directly at sales@ata-elektronik.de or calling +49 152 157 386 07. We'll provide you with a detailed quote, payment instructions, and delivery timeline based on your requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "For small or trial purchases, we accept money transfer services like ACES, Western Union, MoneyGram, and Ria. For large or bulk orders, we accept wire transfers, direct deposits, and bank transfers. All payments must be made to our official collection agents or accounts payable."
    },
    {
      question: "Do you offer technical support and consulting?",
      answer: "Yes, our expert team provides technical support and consulting services. We help clients with product selection, integration advice, and finding the right electronic solutions for their specific applications. Our team has deep industry knowledge across automotive, industrial, and consumer electronics sectors."
    },
    {
      question: "What are your shipping and delivery options?",
      answer: "We offer various shipping options depending on order size and urgency. Our logistics team handles export/import requirements and can arrange delivery throughout Europe. Delivery times vary based on product availability and destination."
    },
    {
      question: "Do you provide warranties on your products?",
      answer: "Yes, we provide warranty programs and after-sales support for our electronic components. Warranty terms depend on the specific product and manufacturer. We work closely with our global partners to ensure proper warranty coverage and support."
    },
    {
      question: "Can you source specific components not listed on your website?",
      answer: "Absolutely! We offer customized sourcing services. If you need specific electronic components not currently in our catalog, our team can leverage our global network of manufacturers and suppliers to source the products you need."
    },
    {
      question: "How can I become a business partner or distributor?",
      answer: "We're always interested in building relationships with qualified business partners. Contact our sales team to discuss partnership opportunities, distribution agreements, and how we can work together to serve your market."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our products, services, and ordering process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-primary/20 mb-8">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-center">Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Our expert team is ready to help you with any questions about electronic components, 
                  orders, or technical support.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2 p-6" asChild>
                    <a href="tel:+4915215738607">
                      <Phone className="h-5 w-5" />
                      <span>Call Sales</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 p-6" asChild>
                    <a href="mailto:sales@ata-elektronik.de">
                      <Mail className="h-5 w-5" />
                      <span>Email Us</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 p-6" asChild>
                    <a href="/contact">
                      <MessageCircle className="h-5 w-5" />
                      <span>Contact Form</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;