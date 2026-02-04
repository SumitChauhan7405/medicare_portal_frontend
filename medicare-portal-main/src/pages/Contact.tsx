import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 90542 77510",
      subContent: "+91 79 2345 6789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@medicare.com",
      subContent: "appointments@medicare.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Healthcare Avenue,",
      subContent: "Medical District, City - 380001",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 8:00 AM - 9:00 PM",
      subContent: "Sunday: Emergency Only",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need to book an appointment? 
            We're here to help you with all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 text-success mb-6">
                    <CheckCircle size={24} />
                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`input-field ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`input-field ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`input-field ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      className={`textarea-field ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="glass-card">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon shrink-0">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                      <p className="text-muted-foreground">{info.subContent}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency */}
              <div className="bg-emergency rounded-2xl p-6 text-emergency-foreground">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="animate-pulse" size={24} />
                  <h3 className="font-semibold text-lg">Emergency?</h3>
                </div>
                <p className="text-emergency-foreground/90 mb-2">
                  For medical emergencies, call immediately:
                </p>
                <a href="tel:+919054277510" className="text-2xl font-bold hover:underline">
                  +91 90542 77510
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Find Us"
            subtitle="Visit our hospital for consultations and treatments."
          />
          
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9013960821986!2d72.5043279!3d23.0225586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4923f6d3e9%3A0x8d4b11c0b0d0f6a0!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
