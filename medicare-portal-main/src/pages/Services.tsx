import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const additionalServices = [
    "24/7 Emergency Care",
    "Ambulance Services",
    "Health Check-up Packages",
    "Vaccination Programs",
    "Blood Bank",
    "ICU & Critical Care",
    "Physiotherapy",
    "Diet & Nutrition Counseling"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across specialized departments, 
            equipped with modern facilities and expert medical professionals.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Medical Departments"
            subtitle="Our specialized departments offer comprehensive care for all your medical needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Additional Services"
            subtitle="Beyond our specialized departments, we offer a range of supporting services."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service) => (
              <div key={service} className="flex items-center gap-3 bg-background rounded-xl p-4">
                <CheckCircle className="text-primary shrink-0" size={24} />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold">World-Class Facilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Advanced Technology for Better Care
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At MediCare, we believe that advanced technology is key to accurate 
                  diagnosis and effective treatment. Our hospital is equipped with 
                  state-of-the-art medical equipment and facilities.
                </p>
                <ul className="space-y-3">
                  {[
                    "64-Slice CT Scanner for detailed imaging",
                    "1.5 Tesla MRI Machine for precise diagnostics",
                    "Fully automated laboratory systems",
                    "Advanced laparoscopic surgery setup",
                    "Modern ICU with patient monitoring systems",
                    "Digital X-Ray and Mammography"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="text-primary shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=500&fit=crop"
                alt="Medical Equipment"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    A+
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Quality Rating</p>
                    <p className="text-sm text-muted-foreground">NABH Accredited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
