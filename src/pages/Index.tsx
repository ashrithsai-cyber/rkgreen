import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sun, Zap, Leaf, Shield, TrendingDown, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl ml-4">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              POWER YOUR FUTURE WITH{" "}
              <TypewriterText />
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white mb-8">
              Clean, sustainable, and cost-effective energy<br />
              solutions for homes and businesses
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg font-bold px-8">
                GET FREE QUOTE
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-bold px-8">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                ABOUT US
              </h2>
              <p className="text-xl font-semibold text-muted-foreground mb-8">
                At RK Solur Green Mount, we're passionate about bringing clean, renewable solar energy to every corner of India. With years of hands on experience, our team delivers high quality solar installation and service solutions for all types of clients.
              </p>
              <Link to="/about-us">
                <Button size="lg" className="text-lg font-bold px-8">
                  VIEW MORE
                </Button>
              </Link>
            </div>
            <div className="flex-1 ml-6">
              <img src="/aboutus.jpg" alt="About Us" className="w-full h-56 md:h-72 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>





      {/* Stats Section */}
      <section id="about" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">15K+</div>
              <div className="text-lg font-bold text-primary-foreground/80">INSTALLATIONS</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">98%</div>
              <div className="text-lg font-bold text-primary-foreground/80">SATISFACTION RATE</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary-foreground mb-2">25+</div>
              <div className="text-lg font-bold text-primary-foreground/80">YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Why Choose RK Solar Green Mount?
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl font-semibold text-muted-foreground">
              At RK Solar Green Mount, we prioritize trust, performance, and sustainability beyond just solar panels. With years of hands-on experience in design, installation, and service, we ensure every customer maximizes their investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Expert Team and Proven Experience</h3>
                <p className="text-muted-foreground font-semibold">
                  Our team includes skilled professionals with extensive experience in solar power installation and maintenance. From residential rooftops to industrial setups, we've successfully completed many high-quality projects across India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">End-to-End Solar Solutions</h3>
                <p className="text-muted-foreground font-semibold">
                  We take care of everything, from site survey, design, government approvals, and installation to long-term service support. You get a smooth, worry-free solar experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Quality Components You Can Trust</h3>
                <p className="text-muted-foreground font-semibold">
                  We use only MNRE-approved panels, inverters, and equipment to ensure high efficiency, durability, and maximum output. This gives you peace of mind for years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Affordable and Customizable Plans</h3>
                <p className="text-muted-foreground font-semibold">
                  Whether it's a small home or a large industry, we offer flexible solar packages that fit your energy needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Reliable After-Sales Support</h3>
                <p className="text-muted-foreground font-semibold">
                  Our commitment doesn't end with installation. We provide regular maintenance, performance checks, and quick assistance to keep your system running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Driving India Toward a Greener Future</h3>
                <p className="text-muted-foreground font-semibold">
                  We're on a mission to make India a sustainable, energy-independent nation, one rooftop at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <video controls className="w-full rounded-lg shadow-lg">
              <source src="/KOMPALLY.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-xl font-semibold text-muted-foreground text-center mb-12">
            Successful solar installations across the region
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src="/p1.jpeg" alt="100 kWp Solar Rooftop System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">100 kWp Solar Rooftop System</h3>
                <p className="text-muted-foreground font-semibold">
                  Cedar Valley International School, Khammam - Generating clean electricity to reduce grid dependency and lower electricity bills.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/p3.jpeg" alt="56 kWp Solar Rooftop System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">56 kWp Solar Rooftop System</h3>
                <p className="text-muted-foreground font-semibold">
                  Airco Fin Tubes Pvt. Ltd., Isnapur - High-efficiency system with advanced inverter technology for maximum energy efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/p6.jpeg" alt="40 kWp Solar Shed Mounted System" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">40 kWp Solar Shed Mounted System</h3>
                <p className="text-muted-foreground font-semibold">
                  Divino Villas Housing Society, Tellapur - Powers common-area utilities, reducing costs and promoting sustainable living.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="text-lg font-bold px-8">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  What types of solar systems do you install?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  We provide all types of solar systems — on-grid, off-grid, and hybrid — for residential, commercial, and industrial use. Our team helps you choose the best system based on your energy needs and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  How much maintenance does a solar system require?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Solar systems require very minimal maintenance. We recommend cleaning the panels once or twice a month and getting an annual service check from our experts to ensure maximum efficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  How long does the installation process take?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Depending on the project size, installation usually takes 3 to 7 days for residential systems and up to 2–4 weeks for large-scale commercial or industrial setups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  What warranties do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  We offer up to 25 years warranty on solar panels and 5–10 years on inverters, along with free installation support and service during the warranty period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-black font-bold text-left hover:no-underline">
                  Is government subsidy available for solar installations?
                </AccordionTrigger>
                <AccordionContent className="text-black/90 font-semibold pb-4">
                  Yes ✅. We help our customers apply for MNRE-approved government subsidies available for residential and housing society solar projects, ensuring a hassle-free process from start to finish.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
