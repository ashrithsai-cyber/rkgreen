import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Users, Award, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                  ABOUT RK SOLAR GREEN MOUNT
                </h1>
                <p className="text-xl font-semibold text-muted-foreground mb-8">
                  Pioneering sustainable solar energy solutions across India, empowering communities with clean, renewable power for a brighter future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-6 w-6 text-primary" />
                    <span className="font-semibold">20+ Industrial Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="font-semibold">15K+ Installations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="font-semibold">98% Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop"
                  alt="Solar panels installation"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              Our Mission & Vision
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground font-semibold text-lg leading-relaxed max-w-4xl mx-auto text-justify">
                At RK Solar Green Mount, we are driven by a powerful purpose to make clean, reliable, and affordable solar energy accessible to every home, business, and community across India. Our mission is to help people save on electricity, reduce carbon impact, and move toward energy independence through high-quality solar solutions and hassle-free installation. We envision a greener, self-sustaining India, where every rooftop becomes a source of clean power and every citizen plays a part in protecting our planet. Through innovation, trust, and excellence, we aim to become one of the nation's most trusted solar energy providers transforming sunlight into savings, sustainability, and a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Team member 1"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Rajesh Kumar</h3>
                  <p className="text-primary font-semibold mb-2">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    With 25+ years in solar energy, Rajesh leads our vision of sustainable power solutions across India.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
                  alt="Team member 2"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Priya Sharma</h3>
                  <p className="text-primary font-semibold mb-2">Technical Director</p>
                  <p className="text-muted-foreground text-sm">
                    Expert in solar system design and installation, ensuring optimal performance for every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-left mb-12">
              Our Financing Solutions
            </h2>
            <img src="/loan.jpg" alt="Loan Image" className="w-full h-48 object-cover rounded-lg shadow-lg mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold">Residential Projects</h3>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold">Commercial Projects</h3>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4">Residential Projects</h3>
                <p className="text-muted-foreground font-semibold mb-6">
                  We provide bank loans for residential solar projects, making it easier for homeowners to adopt sustainable energy solutions without upfront costs.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-semibold">Partnered with leading banks</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Commercial Projects</h3>
                <p className="text-muted-foreground font-semibold mb-6">
                  For commercial projects, we tie up with JioFinance and fintech partners, offering zero down payment and up to 78% government subsidy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Certifications & Recognition
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold">MNRE Certified</h3>
                      <p className="text-muted-foreground text-sm">Ministry of New and Renewable Energy approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                    <Award className="h-8 w-8 text-secondary" />
                    <div>
                      <h3 className="font-bold">Udyam Registered</h3>
                      <p className="text-muted-foreground text-sm">MSME recognized enterprise</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                    <Award className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="font-bold">MSME Approved</h3>
                      <p className="text-muted-foreground text-sm">MSME Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">📞</div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+91 90002 72748, +91 93479 20454</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">✉️</div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">rkgreenmountenergies@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mt-1">📍</div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
