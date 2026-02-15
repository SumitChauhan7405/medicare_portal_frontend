import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Heart, 
  Stethoscope, 
  Users, 
  TestTube, 
  Pill, 
  CalendarCheck,
  Shield,
  Clock,
  Award,
  Loader2
} from "lucide-react";
import heroHospital from "@/assets/hero-hospital.jpg";
import { getDoctors } from "@/services/doctorService";
import { departments } from "@/data/departments";
import type { Doctor } from "@/types/doctor";
import SectionTitle from "@/components/SectionTitle";
import DoctorCard from "@/components/DoctorCard";
import DepartmentCard from "@/components/DepartmentCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
      } finally {
        setLoadingDoctors(false);
      }
    };
    fetchDoctors();
  }, []);

  const features = [
    { icon: Heart, title: "Patient Care", description: "Compassionate care focused on your well-being" },
    { icon: TestTube, title: "Diagnostics", description: "Advanced diagnostic facilities and laboratory" },
    { icon: Pill, title: "Pharmacy", description: "24/7 pharmacy with quality medicines" },
    { icon: Stethoscope, title: "Surgery", description: "Modern operation theatres with skilled surgeons" },
    { icon: CalendarCheck, title: "Billing", description: "Transparent billing and insurance support" },
    { icon: Users, title: "Follow-Up", description: "Comprehensive post-treatment care" },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Doctors" },
    { number: "100K+", label: "Happy Patients" },
    { number: "15+", label: "Departments" },
  ];

  const testimonials = [
    {
      name: "Ramesh Patel",
      role: "Patient",
      content: "The care I received at MediCare was exceptional. The doctors and staff were incredibly supportive throughout my treatment. I highly recommend this hospital to everyone.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Patient's Family",
      content: "My father's surgery went smoothly thanks to the skilled surgeons at MediCare. The facilities are world-class and the staff is very caring and professional.",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      role: "Patient",
      content: "From diagnosis to recovery, MediCare provided excellent care. The modern facilities and experienced doctors made a real difference in my treatment journey.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroHospital}
            alt="MediCare Hospital Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6 animate-slide-up">
              <Shield size={16} />
              <span className="text-sm font-medium">Trusted Healthcare Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-slide-up animation-delay-200">
              MediCare - Your Health,{" "}
              <span className="text-gradient">Our Promise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed animate-slide-up animation-delay-400">
              Providing world-class healthcare with compassion and cutting-edge technology. 
              Your well-being is our commitment, and we're dedicated to delivering 
              excellence in every aspect of care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
              <Link to="/doctors" className="btn-primary text-center">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-white text-center">
                Our Services
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 animate-slide-up animation-delay-600">
              <div className="flex items-center gap-2 text-background/80">
                <Clock size={20} />
                <span>Open 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Award size={20} />
                <span>NABH Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose MediCare?"
            subtitle="We offer comprehensive healthcare services with a patient-first approach, combining expertise with compassion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated flex items-start gap-4">
                <div className="feature-icon shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stats-card text-primary-foreground">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Departments"
            subtitle="Specialized medical departments equipped with advanced technology and expert healthcare professionals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.slice(0, 6).map((dept) => (
              <DepartmentCard key={dept.id} department={dept} variant="compact" />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Departments
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Doctors"
            subtitle="Our team of experienced specialists is dedicated to providing you with the best medical care."
          />
          
          {loadingDoctors ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : doctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.slice(0, 3).map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Unable to load doctors. Please ensure the HMS server is running.</p>
            </div>
          )}
          
          <div className="text-center mt-10">
            <Link to="/doctors" className="btn-primary">
              View All Doctors
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-background/5 translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Book an appointment with our specialists today. We're here to provide 
            you with the best healthcare services.
          </p>
          <Link to="/contact" className="btn-white">
            Book Appointment Now
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="What Our Patients Say"
            subtitle="Real stories from people who trusted us with their health and well-being."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
