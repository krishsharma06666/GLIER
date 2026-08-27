import { FadeIn } from "../ui/FadeIn";

export function AdmissionSection() {
  const feeStructure = [
    { level: "Nursery - KG", tuition: "₹3,000", transport: "₹1,000", activities: "₹700" },
    { level: "Classes 1-5", tuition: "₹3,500", transport: "₹1,000", activities: "₹700" },
    { level: "Classes 6-8", tuition: "₹4,000", transport: "₹1,000", activities: "₹700" },
    { level: "Classes 9-10", tuition: "₹4,500", transport: "₹1,000", activities: "₹700" },
  ]:

  const admissionSteps = [
    {
      title: "Obtain Application Form",
      description: "Collect the admission form from the school office or download it from our website.",
    },
    {
      title: "Submit Completed Form",
      description: "Return the completed form along with required documents and registration fee.",
    },
    {
      title: "Entrance Assessment",
      description: "Students applying for Classes 1-10 will undergo a basic entrance assessment.",
    },
    {
      title: "Personal Interview",
      description: "A brief interaction with the student and parents with school authorities.",
    },
    {
      title: "Confirmation & Fee Payment",
      description: "Upon selection, complete the admission process by paying the required fees.",
    },
  ];

  return (
    <section id="admission" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">Join Our School</span>
            <h2 className="section-title">Admission Information</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              We welcome new students throughout the academic year. Find all the information 
              you need about our admission process and fee structure below.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm border border-border/30 overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h3 className="text-xl font-medium">Fee Structure (Annual)</h3>
                <p className="text-white/80 text-sm mt-1">Academic Year 2025-26</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5 border-b border-border">
                      <th className="text-left p-4">Class Level</th>
                      <th className="text-left p-4">Tuition Fee</th>
                      <th className="text-left p-4">Transport Fee</th>
                      <th className="text-left p-4">Activities Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((item, index) => (
                      <tr key={index} className="border-b border-border/30 hover:bg-muted/50 transition-colors">
                        <td className="p-4">{item.level}</td>
                        <td className="p-4">{item.tuition}</td>
                        <td className="p-4">{item.transport}</td>
                        <td className="p-4">{item.activities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                <p>* All fees are payable in quarterly installments</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm border border-border/30 p-6">
              <h3 className="text-xl font-medium mb-6">Admission Process</h3>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-2">Required Documents</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Birth Certificate</li>
                  <li>Previous School Leaving Certificate (if applicable)</li>
                  <li>Report Card of Previous Year</li>
                  <li>Four Passport Size Photographs</li>
                  <li>Residential Proof</li>
                  <li>Aadhar Card (copy)</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="mt-12 text-center">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block font-medium"
          >
            Contact Us For Admission Enquiry
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
