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
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  ABOUT RK SOLAR GREEN MOUNT
                </h1>
                <p className="text-xl font-semibold text-muted-foreground mb-8">
                  Pioneering sustainable solar energy solutions across India, empowering communities with clean, renewable power for a brighter future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-6 w-6 text-primary" />
                    <span className="font-semibold">25+ Years Experience</span>
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
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              Our Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground font-semibold">
                    To make India a leader in sustainable and green energy usage by providing high-quality, affordable solar solutions that reduce carbon footprints and electricity costs for communities nationwide.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Sun className="h-8 w-8 text-secondary" />
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground font-semibold">
                    To empower every Indian household, business, and industry with clean, renewable solar energy, creating a sustainable future where green power is accessible to all.
                  </p>
                </CardContent>
              </Card>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
                  alt="Team member 3"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Amit Patel</h3>
                  <p className="text-primary font-semibold mb-2">Operations Manager</p>
                  <p className="text-muted-foreground text-sm">
                    Manages project execution and ensures seamless delivery of solar solutions nationwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">1999</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Foundation</h3>
                      <p className="text-muted-foreground font-semibold">
                        RK Solar Green Mount was established with a vision to bring sustainable energy solutions to India.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">2010</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Expansion</h3>
                      <p className="text-muted-foreground font-semibold">
                        Expanded operations across multiple states, completing our first 1000 installations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">2020</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-muted-foreground font-semibold">
                        Adopted cutting-edge solar technologies and achieved MNRE certification for quality assurance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">2024</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Leadership</h3>
                      <p className="text-muted-foreground font-semibold">
                        Reached 15,000+ installations and became a trusted name in India's solar energy sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
                  alt="Company history"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
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
                      <h3 className="font-bold">MEMU Approved</h3>
                      <p className="text-muted-foreground text-sm">Electrical equipment manufacturing unit certified</p>
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
