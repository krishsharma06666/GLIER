
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/FadeIn";

const faqData = [
  {
    question: "What are the school hours?",
    answer: "Our school hours are from 8:00 AM to 2:00 PM, Monday to Friday.",
  },
  {
    question: "What is the admission process?",
    answer: "You can find detailed information about our admission process on the Admission Information page. Generally, it involves submitting an application form, followed by an interaction session.",
  },
  {
    question: "What curriculum do you follow?",
    answer: "We follow the curriculum prescribed by the education board, focusing on holistic development, and integrate modern teaching methodologies including smart classes.",
  },
  {
    question: "Are there transportation facilities available?",
    answer: "Yes, we provide transportation facilities. Please contact the school office for details on routes and fees.",
  },
  {
    question: "What extracurricular activities are offered?",
    answer: "We offer a variety of extracurricular activities including sports, arts, music, and debate. Specific activities may vary by grade level.",
  },
];

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn delay={200}>
            <h1 className="section-title text-center mb-12">Frequently Asked Questions</h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem value={`item-${index + 1}`} key={index} className="bg-card p-4 rounded-lg shadow-sm border border-border/50">
                    <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
