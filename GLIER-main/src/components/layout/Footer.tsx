import { FadeIn } from "../ui/FadeIn";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FadeIn delay={100}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl">GLIER Public School</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Green Light Institute of Education & Research, established in 2006. 
                Our mission is to nurture young minds in a peaceful environment where 
                learning flourishes like the green leaves of a tree.
              </p>
              <p className="text-primary mt-3 italic text-sm">
                "Learning blooms in the heart of nature."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Our Staff", "Admission", "Gallery", "For Parents", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s/g, '')}`} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <h3 className="font-medium text-lg mb-4">School Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-muted-foreground">
                  <span>Summer Timings (Mon-Fri):</span>
                  <span>8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between text-muted-foreground">
                  <span>Winter Timings (Mon-Fri):</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-muted-foreground">
                  <span>Saturday:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between text-muted-foreground">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between text-muted-foreground pt-2 border-t border-border/30 mt-2">
                  <span>Office Hours:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact Information</h3>
              <address className="not-italic text-muted-foreground text-sm space-y-3">
                <p className="flex items-start gap-2"> {/* Changed items-center to items-start for better alignment with multi-line address */}
                  <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" /> {/* Added mt-0.5 for alignment */}
                  <span>Makol, Bhambla, Sunderbani, Distt. Rajouri</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>+91 7006724035</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <span>Glierpublicschool921975@gmail.com</span>
                </p>
              </address>
            </div>
          </FadeIn>
        </div>

        <div className="pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GLIER Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
