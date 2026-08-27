import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Features } from "@/components/home/Features";
import { FadeIn } from "@/components/ui/FadeIn";
import SchoolFeatures from "@/components/ui/SchoolFeatures"; // ✅ Import added
import AboutSchoolInfo from "@/components/ui/AboutSchoolInfo";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <FadeIn delay={100}>
           
            <FadeIn delay={200}>
            <AboutSchoolInfo />
             </FadeIn>
          </FadeIn>
          {/* ✅ School Features section */}
          <div className="mt-12">
            <SchoolFeatures />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
