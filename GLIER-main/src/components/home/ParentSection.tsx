
import { FadeIn } from "../ui/FadeIn";
import { Calendar, FileText, Users } from "lucide-react";

export function ParentSection() {
  const notices = [
    {
      title: "Annual Parents-Teachers Meeting",
      date: "December 31, 2025",
      content: "Parents-Teachers meeting for all classes will be held on December 31 from 9 AM to 1 PM.",
    },
    {
      title: "Admission closed for 2025-26",
      date: "-",
      content: "Admissions for the academic year 2025-26 are now closed for all classes from Nursery to Class 10.",
    },
    {
      title: "Summer Holidays",
      date: "June 1, 2025",
      content: "Summer vacation homework details had been sent to students.",
    },
  ];

  const events = [
    {
      title: "Independance Day",
      date: "August 15, 2025",
      location: "School Grounds",
    },
    {
      title: "Science Exhibition",
      date: "October 25, 2025",
      location: "School Auditorium",
    },
    {
      title: "Diwali",
      date: "October 18, 2025",
      location: "School Grounds",
    },
  ];

  return (
    <section id="parent" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">Communication</span>
            <h2 className="section-title">For Parents</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              We believe that strong parent-school communication is essential for student success. 
              Stay updated with important announcements and upcoming events.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="bg-white rounded-lg shadow-sm border border-border/30 h-full">
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Notice Board</h3>
              </div>
              <div className="p-6 space-y-6">
                {notices.map((notice, index) => (
                  <div key={index} className="border-b border-border/30 pb-6 last:border-0 last:pb-0">
                    <h4 className="font-medium">{notice.title}</h4>
                    <p className="text-sm text-primary mt-1">{notice.date}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{notice.content}</p>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 p-4 rounded-b-lg text-center text-sm">
                <p>Important notices are also sent via SMS and email to registered parents.</p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border border-border/30">
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Upcoming Events</h3>
                </div>
                <div className="p-6 space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex flex-col items-center justify-center text-primary">
                        <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                        <span className="font-bold">{event.date.split(" ")[1].replace(",", "")}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-muted-foreground text-sm">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-white rounded-lg shadow-sm border border-border/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Parent-Teacher Meetings</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Regular Parent-Teacher meetings are scheduled throughout the academic year to 
                  discuss your child's progress and address any concerns.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Mid Term: July 30, 2025</li>
                    <li>Final Term: December 31, 2025</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
