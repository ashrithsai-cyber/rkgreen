import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Gallery Page Content */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-8">
            GALLERY
          </h1>
          <p className="text-xl font-semibold text-muted-foreground text-center mb-12">
            Explore our solar installations and projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 22 }, (_, i) => i + 1).map((num) => (
              <Dialog key={num}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <img
                      src={`/${num}.jpeg`}
                      alt={`Gallery Image ${num}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={`/${num}.jpeg`}
                    alt={`Gallery Image ${num}`}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
