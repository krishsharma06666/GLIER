
import { FadeIn } from "../ui/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay, { type AutoplayType } from "embla-carousel-autoplay";
import React from "react";
import { MessageSquare } from "lucide-react"; // Added for WhatsApp icon

const heroSlideshowImages = [
  {
    url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/489869104_122124329420773183_645440325634950043_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tvi1LQ9yS_YQ7kNvwHi3c3L&_nc_oc=AdkRzuDMGwBEDN-zS3pujJ3dOQsQXnzZ85srO45uGx9FDVftP-tnvy9cAm76onsQb9OyN1Hf-0_Aw3HtGh_mu4Fq&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=pAVbrL4s_5PoyWipFDL5gA&oh=00_AfISbkzvmR-0qAs6Qy9-aVLCkaLhHBU135Ja5nhI9_3jBA&oe=682CF84F",
    alt: "Students during indoor learning activities",
  },
  {
    url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/484900685_122117180450773183_7699973648881314883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Lawcve9YWDkQ7kNvwEZFZUk&_nc_oc=Adn3r8fCtYOw9W_cRBz8l1r67-fH8dVCMv71cZWDRaV6yyc7DOSnPQCfy9YYXvZvSTtQ2y-zNLLaCu02LiVd9kt7&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=hgFE78vzBrzdfIqQkHfw1w&oh=00_AfI-MQjR9C_sjVSIJve0BCvWAaxsde0tm3Fc7ra3vys22A&oe=682CEDFE",
    alt: "Fun drawing and coloring activities",
  },
  {
    url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484809648_122117165672773183_8054222387257968569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wxDUcrpWynwQ7kNvwHU3DOE&_nc_oc=Adl0VR_ZlomOsn4rv8Dz4qDxzVzOGgp7ANauFnlibHAWE7jqgi3vK1g-sWiSq6VCFJdx7lZ78tgLWiDEP0r7Ms71&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=wL0hpmcaRP2bh_jBPUTohA&oh=00_AfKLKgpMwsrvlMOcmMtZy6zROO765iusbd5bCIXYUPpcww&oe=682D038D",
    alt: "Digital Screen Services",
  },
  {
    url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/484852186_122117180576773183_3245504444725248304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ohNwpG0KTPMQ7kNvwHcF6KE&_nc_oc=AdlTr5jGsa0RhHcTwOLHhigo5G6_uUwh2lv4nayNhTLvu9DNdpzkTrv2HxdXqRDBHS2lwRc9BZdK8E0YPQ532uG2&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=YbqD5ZlNswAf-LZnuCPPug&oh=00_AfKDkWXADm5_hVgw2YBGM47-z7ymEzna7ed5JcJSqwunZA&oe=682CFE1F",
    alt: "Where curiosity meets collaboration",
  },
  {
    url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484803487_122116531364773183_7719682903763063138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-XKr5raBPC0Q7kNvwG7door&_nc_oc=AdmyrO-wkkgBIbvfWxoDY-xUGrW_oPb_-kP-8txkM8kvqHP0CkLR8_w4fOvM9eCatOAoY5gRwaEY_BsWHrVBqoG2&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=GOiBe_IKpmh72c_HfDpG3A&oh=00_AfLJDmgZvJ8XHhiyTFel18HUuSvrtxNjEPHcGfyaN7DP1g&oe=682D1028",
    alt: "Joyful moments together",
  },
  {
    url: "/lovable-uploads/1e15e331-06d3-4e5b-8edf-6de029227a4f.png",
    alt: "Students in traditional attire for a school event",
  },
  {
    url: "/lovable-uploads/41e01eac-1093-4b18-b4da-903d37237e3a.png",
    alt: "GLIER Public School building exterior and grounds",
  },
  {
    url: "/lovable-uploads/38ff6b4e-1f36-4eb0-aad2-12e5ca5f18ec.png",
    alt: "Young student in school uniform during an activity",
  },
];

export function Hero() {
  const autoplayPluginRef = React.useRef<AutoplayType | null>(null);

  React.useEffect(() => {
    // Initialize Autoplay plugin only once
    if (!autoplayPluginRef.current) {
      // @ts-ignore Autoplay is a constructor
      autoplayPluginRef.current = Autoplay({ delay: 3000, stopOnInteraction: true });
    }
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 -z-10"
        style={{ 
          backgroundImage: "url('/lovable-uploads/9cb8dd8e-857e-4ea6-b20f-a73243fcf306.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <FadeIn delay={200}>
            {/* Changed font-bold to font-medium as requested */}
            <h1 className="font-serif text-4xl md:text-6xl font-medium mb-4 leading-tight">
              GLIER Public School
            </h1>
            <p className="text-xl md:text-2xl text-primary font-serif italic mb-6">
              "Learning blooms in the heart of nature."
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Green Light Institute of Education & Research, established in 2006, offering 
              a peaceful learning environment from Nursery to Class 10 in Makol.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#about" // Changed to internal link
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium shadow-sm hover:shadow"
              >
                Discover Our School
              </a>
              <a 
                href="#admission" // Changed to internal link
                className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors duration-200 font-medium shadow-sm hover:shadow"
              >
                Admission Information
              </a>
              <a
                href="https://wa.me/917006724035?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20GLIER%20Public%20School."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 font-medium shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Enquire on WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="mt-12 md:mt-16 max-w-3xl mx-auto relative">
              {autoplayPluginRef.current && ( // Check if plugin is initialized
                <Carousel
                  // @ts-ignore plugins prop expects an array
                  plugins={[autoplayPluginRef.current]}
                  className="w-full"
                  onMouseEnter={() => {
                    if (autoplayPluginRef.current) {
                       // @ts-ignore Autoplay has stop method
                      autoplayPluginRef.current.stop();
                    }
                  }}
                  onMouseLeave={() => {
                    if (autoplayPluginRef.current) {
                      // @ts-ignore Autoplay has reset method
                      autoplayPluginRef.current.reset();
                    }
                  }}
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {heroSlideshowImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary disabled:opacity-50" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary disabled:opacity-50" />
                </Carousel>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
