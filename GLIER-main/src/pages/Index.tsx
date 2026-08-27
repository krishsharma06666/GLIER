import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import SchoolFeatures from "@/components/ui/SchoolFeatures";
import { StaffSection } from "@/components/home/StaffSection";
import { AdmissionSection } from "@/components/home/AdmissionSection";
import { GallerySection } from "@/components/home/GallerySection";
import { ParentSection } from "@/components/home/ParentSection";
import { ContactSection } from "@/components/home/ContactSection";
import Slideshow  from "@/components/ui/slideshow";
import AboutSchoolInfo from "@/components/ui/AboutSchoolInfo"; // ✅ Add this import
import { FadeIn } from "@/components/ui/FadeIn";
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />

        {/* ✅ Slideshow positioned directly below Hero section */}
        <div className="mt-4">
          <Slideshow />
        </div>
        <FadeIn delay={200}>
         <AboutSchoolInfo />
        </FadeIn>
        <div id="about"><SchoolFeatures /></div>
        <div id="staff"><StaffSection /></div>
        <div id="admission"><AdmissionSection /></div>
        <div id="gallery"><GallerySection /></div>
        <div id="parent"><ParentSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
