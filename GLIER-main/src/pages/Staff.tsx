
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StaffSection } from "@/components/home/StaffSection";

const Staff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <StaffSection />
      </main>
      <Footer />
    </div>
  );
};

export default Staff;
