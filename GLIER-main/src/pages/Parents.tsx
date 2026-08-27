
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParentSection } from "@/components/home/ParentSection";

const Parents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ParentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Parents;
