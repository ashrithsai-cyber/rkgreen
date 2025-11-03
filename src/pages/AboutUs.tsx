import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* About Us Page Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-center mb-8">
              ABOUT US
            </h1>

            <div className="space-y-6 text-lg font-semibold text-muted-foreground">
              <p>
                At RK Solur Green Mount, we're passionate about bringing clean, renewable solar energy to every corner of India. With years of hands-on experience, our team delivers high quality solar installation and service solutions for all types of clients.
              </p>
              <p>
                RK Solur Green Mount is a trusted name in the solar energy sector, dedicated to powering India with sustainable and affordable green energy solutions. With extensive experience in solar installation and maintenance, we proudly serve residential, commercial, and industrial clients across the nation.
              </p>
              <p>
                Our mission is to make India a leader in sustainable and green energy usage — reducing carbon footprints, cutting electricity costs, and helping communities transition toward a cleaner, brighter future.
              </p>
              <p>
                What sets us apart is our deep industry expertise, customer first approach, and commitment to quality. We handle everything from design and installation to service and support, ensuring seamless solar solutions tailored to each client's needs.
              </p>
              <p>
                RK Solur Green Mount is certified with MEMU, Udyam, and MNRE, reflecting our credibility and dedication to maintaining high industry standards.
              </p>
            </div>



            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">Company Information</h2>
              <div className="space-y-3 text-lg font-semibold text-muted-foreground">
                <p>Phone: +91 90002 72748, +91 93479 20454</p>
                <p>Email: rkgreenmountenergies@gmail.com</p>
                <p>Address: 5-6-51/23/1, 5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
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
