
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdmissionSection } from "@/components/home/AdmissionSection";

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AdmissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
