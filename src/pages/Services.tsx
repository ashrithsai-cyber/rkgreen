import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Services Page Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-center mb-8">
              OUR SERVICES
            </h1>

            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">☀️ Solar Panel Installation</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    We provide end-to-end solar panel installation services for homes, businesses, and industries. Our expert team ensures precise setup, maximum energy output, and long-term performance — helping you save money and the planet.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/img1.jpg" alt="Solar Panel Installation" className="w-full max-w-md h-48 object-cover rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🔋 Solar System Maintenance & Service</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Regular maintenance is key to long-lasting performance. We offer professional inspection, cleaning, and repair services to ensure your solar system runs efficiently all year round.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/img2.jpg" alt="Solar System Maintenance & Service" className="w-full max-w-md h-48 object-cover rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🏠 Residential Solar Solutions</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Make your home energy-independent with our customized rooftop solar systems. Reduce your electricity bills and enjoy uninterrupted green power every day.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/Residential Solar Solutions.jpg" alt="Residential Solar Solutions" className="w-full max-w-md h-48 object-cover rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🏢 Commercial & Industrial Solar Solutions</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    We design and install large-scale solar systems for factories, offices, and institutions — helping businesses cut costs, earn government benefits, and contribute to a cleaner India.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/Commercial & Industrial Solar.jpg" alt="Commercial & Industrial Solar Solutions" className="w-full max-w-md h-48 object-cover rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">⚡ Solar Water Heaters & Accessories</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    From solar water heaters to inverters and batteries, we provide high-quality equipment that supports sustainable living and ensures reliable performance.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/Solar Water Heaters & Accessories.jpg" alt="Solar Water Heaters & Accessories" className="w-full max-w-md h-48 object-cover rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-primary rounded-lg p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🌎 Consultation & Energy Audit</h2>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Not sure where to start? Our experts analyze your energy usage and recommend the best solar system for your needs — balancing efficiency, cost, and space.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/Consultation.jpg" alt="Consultation & Energy Audit" className="w-full max-w-md h-48 object-cover rounded-lg" />
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

export default Services;
