
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/home/GallerySection";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
