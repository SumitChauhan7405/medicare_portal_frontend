import SectionTitle from "@/components/SectionTitle";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Microscope, 
  Shield, 
  Clock 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and understanding, ensuring they feel valued and supported."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in medical care, continuously improving our services and expertise."
    },
    {
      icon: Users,
      title: "Patient-First",
      description: "Our patients are at the center of everything we do. Their well-being is our top priority."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards, maintaining transparency and trust in all interactions."
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "50+ Expert Doctors",
      description: "Our team includes highly qualified specialists across all medical disciplines."
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and treatment equipment for accurate and effective care."
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services with rapid response teams."
    },
    {
      icon: Award,
      title: "NABH Certified",
      description: "Nationally accredited for meeting quality and safety standards."
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">MediCare</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional healthcare with compassion, 
            innovation, and a commitment to your well-being.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                25+ Years of Healing & Hope
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 1999, MediCare Hospital has been at the forefront of 
                  healthcare excellence in the region. What started as a small clinic 
                  has grown into a multi-specialty hospital trusted by over 100,000 patients.
                </p>
                <p>
                  Our journey has been guided by a simple philosophy: every patient 
                  deserves the best possible care. This belief drives our continuous 
                  investment in advanced medical technology, skilled professionals, 
                  and comfortable facilities.
                </p>
                <p>
                  Today, MediCare stands as a beacon of hope for families seeking 
                  quality healthcare. With 15+ specialized departments and a team of 
                  50+ expert doctors, we offer comprehensive medical services under one roof.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=500&fit=crop"
                  alt="Hospital Interior"
                  className="rounded-2xl h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop"
                  alt="Medical Team"
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=500&fit=crop"
                  alt="Modern Equipment"
                  className="rounded-2xl h-64 w-full object-cover -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=500&fit=crop"
                  alt="Patient Care"
                  className="rounded-2xl h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services 
                to all, while fostering a culture of compassion, innovation, and 
                continuous improvement. We are committed to treating every patient 
                with dignity and ensuring the best possible outcomes.
              </p>
            </div>

            <div className="glass-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted healthcare institution in the region, recognized 
                for clinical excellence, patient satisfaction, and community impact. 
                We envision a healthier society where quality healthcare is accessible 
                to everyone regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our commitment to exceptional patient care."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-elevated text-center">
                <div className="feature-icon mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose MediCare?"
            subtitle="What sets us apart in delivering exceptional healthcare."
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-background/10 backdrop-blur-md rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-background/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
