import { FadeIn } from "../ui/FadeIn";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              We're here to answer any questions you may have about our school. 
              Feel free to reach out to us using the information below.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn delay={100}>
            <div className="bg-white rounded-lg shadow-sm border border-border/30 p-6 text-center h-full flex flex-col items-center justify-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Call Us</h3>
              <p className="text-muted-foreground">Monday to Friday, 8:00 AM to 4:00 PM</p>
              <p className="font-medium mt-3">+91 7006724035</p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-lg shadow-sm border border-border/30 p-6 text-center h-full flex flex-col items-center justify-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-muted-foreground">We'll respond as soon as possible</p>
              <p className="font-medium mt-3">Glierpublicschool921975@gmail.com</p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-white rounded-lg shadow-sm border border-border/30 p-6 text-center h-full flex flex-col items-center justify-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Our peaceful campus is located at</p>
              <p className="font-medium mt-3">Makol, Bhambla, Sunderbani,</p>
              <p className="font-medium">Distt. Rajouri</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400} className="mt-12">
          <div className="bg-muted rounded-lg shadow-sm border border-border/30 p-6">
            <div className="aspect-[16/7] w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703867.071679905!2d64.46093229864716!3d20.011408266548018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1661787457783!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
