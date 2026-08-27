
import { FadeIn } from "../ui/FadeIn";
import { UserRound } from "lucide-react"; // Import UserRound icon

export function StaffSection() {
  const staffPhotos = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  const staff = [
    {
      name: "Radha Devi",
      title: "Senior Teacher",
      qualifications: "M.A., B.Ed.",
      experience: "20 years",
      image: staffPhotos[0],
    },
    {
      name: "Jyoti Sharma",
      title: "Senior Teacher",
      qualifications: "M.A., B.Ed.",
      experience: "15 years",
      image: staffPhotos[1],
    },
    {
      name: "Chinta Devi",
      title: "Senior Teacher",
      qualifications: "M.A., B.Ed.",
      experience: "15 years",
      image: staffPhotos[2],
    },
    {
      name: "Amit Kumar",
      title: "Mathematics Teacher",
      qualifications: "M.Sc. (Mathematics), B.Ed.",
      experience: "2 years",
      image: staffPhotos[3],
    },
    {
      name: "Priyanka",
      title: "Science Teacher",
      qualifications: "M.Sc. (Chemistry), B.Ed.",
      experience: "10 years",
      image: staffPhotos[4],
    },
    {
      name: "Rakhi Sharma",
      title: "English Teacher",
      qualifications: "M.A. (English Literature), M.Ed.",
      experience: "1 year",
      image: staffPhotos[5],
    },
  ];

  const allFaculty = [
    { name: "Radha Devi", qualification: "M.A., B.Ed.", experience: "20 years" }, // Image property removed as it's not used for icon
    { name: "Jyoti Sharma", qualification: "M.A., B.Ed.", experience: "15 years" },
    { name: "Chinta Devi", qualification: "M.A., B.Ed.", experience: "15 years" },
    { name: "Surinder Sharma", qualification: "B.Sc.", experience: "2 years" },
    { name: "Amit Kumar", qualification: "M.Sc. (Mathematics), B.Ed.", experience: "2 years" },
    { name: "Rakhi Sharma", qualification: "M.A. (English Literature), M.Ed.", experience: "1 year" },
    { name: "Seema Sharma", qualification: "M.A., B.Ed.", experience: "15 years" },
    { name: "Priyanka", qualification: "M.Sc. (Chemistry), B.Ed.", experience: "10 years" },
    { name: "Nidhi Sharma", qualification: "B.A.", experience: "3 years" },
    { name: "Manisha Sudan", qualification: "B.A.", experience: "2 years" },
    { name: "Babli Devi", qualification: "M.A.", experience: "10 years" },
    { name: "Rachu Sharma", qualification: "B.A.", experience: "5 years" },
    { name: "Ranju Sharma", qualification: "B.A.", experience: "5 years" },
    { name: "Sikander Kumar", qualification: "12th", experience: "20 years" },
    { name: "Sahil Sharma", qualification: "B.A.", experience: "2 years" },
    { name: "Sumiti Sharma", qualification: "B.A.", experience: "1 year" },
    { name: "Madhu Sharma", qualification: "B.A.", experience: "2 years" },
    { name: "Kajal Sharma", qualification: "B.A.", experience: "2 years" },
    { name: "Priyanka Sharma", qualification: "B.A.", experience: "2 years" },
    { name: "Sakshi Devi", qualification: "B.A.", experience: "1 year" },
  ];

  return (
    <section id="staff" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">Meet Our Team</span>
            <h2 className="section-title">Our Qualified Faculty</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              Our dedicated team of educators brings expertise, passion, and commitment 
              to create an inspiring learning environment for all our students. At GLIER, our well-qualified 
              teachers, natural surroundings, and value-based learning approach make every student's 
              educational journey vibrant and holistic — like nature itself.
            </p>
          </FadeIn>
        </div>

        {/* Qualified Faculty section - images remain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {staff.map((member, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border/30 h-full group hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="text-muted-foreground mt-2">{member.qualifications}</p>
                  <p className="text-muted-foreground">Experience: {member.experience}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Complete Faculty List section - images replaced with icon */}
        <FadeIn delay={100}>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border/30 overflow-hidden">
            <h3 className="text-2xl font-serif mb-6 text-center">Complete Faculty List</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10 text-left">
                    <th className="p-3 border-b border-border/50">Teacher Name</th>
                    <th className="p-3 border-b border-border/50">Qualification</th>
                    <th className="p-3 border-b border-border/50">Teaching Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {allFaculty.map((teacher, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-white'}>
                      <td className="p-3 border-b border-border/30 flex items-center gap-3">
                        <UserRound className="w-8 h-8 text-muted-foreground" />
                        {teacher.name}
                      </td>
                      <td className="p-3 border-b border-border/30">{teacher.qualification}</td>
                      <td className="p-3 border-b border-border/30">{teacher.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
