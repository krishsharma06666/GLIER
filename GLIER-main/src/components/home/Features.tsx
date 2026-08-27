
import { FadeIn } from "../ui/FadeIn";
import { Bus, Camera, Laptop, ShieldCheck, Trees, Users, BookOpen, Leaf, HeartHandshake } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Trees,
      title: "Nature-Embedded Campus",
      description: "Our school is nestled in peaceful natural surroundings, creating a nurturing environment for learning and growth.",
    },
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "Complete CCTV coverage ensures the safety and security of all students throughout the campus.",
    },
    {
      icon: ShieldCheck,
      title: "Spacious Facilities",
      description: "Well-maintained playgrounds and modern sports facilities to support physical development.",
    },
    {
      icon: Laptop,
      title: "Digital Classrooms",
      description: "State-of-the-art digital classrooms equipped with modern educational technology.",
    },
    {
      icon: Users,
      title: "Playway Method",
      description: "Specialized Playway teaching methodology for Nursery and Pre-Nursery classes for holistic development.",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Convenient and safe bus service available for students from various locations.",
    },
    {
      icon: BookOpen,
      title: "Value-Based Education",
      description: "We focus on imparting knowledge that is deeply rooted in strong values while embracing innovation.",
    },
    {
      icon: Leaf,
      title: "Green Environment",
      description: "Our campus blends seamlessly with nature, creating a peaceful space for academic and moral growth.",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Faculty",
      description: "Our experienced teachers bring passion and expertise to shape the bright minds of tomorrow.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Our School Features</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              Established in 2006, GLIER is a well-infrastructured educational institution nestled amidst nature, offering 
              an enriching environment where learning flourishes like the green leaves of a tree. Our campus is designed to 
              blend seamlessly with nature, creating a peaceful and nurturing space for students to grow academically and morally.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="bg-background rounded-lg p-6 shadow-sm h-full flex flex-col border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                <div className="mb-4 p-3 rounded-md bg-primary/10 w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={100} className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border/50 max-w-3xl mx-auto hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              At GLIER, we believe in imparting knowledge that is deeply rooted in strong values while branching out towards 
              innovation and modern education. Our dedicated faculty members are the foundation of our institution, bringing 
              a wealth of experience, passion, and expertise to shape the bright minds of tomorrow.
            </p>
            <p className="text-muted-foreground mt-4 italic">
              "Education is the manifestation of the perfection already in man."– Swami Vivekananda

            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
