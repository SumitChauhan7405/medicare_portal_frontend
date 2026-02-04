import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoctorById } from "@/services/doctorService";
import type { Doctor } from "@/types/doctor";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Award, 
  IndianRupee,
  Stethoscope,
  Loader2,
  Languages
} from "lucide-react";

// Map short day names to full names
const dayMapping: Record<string, string> = {
  "Mon": "Monday",
  "Tue": "Tuesday",
  "Wed": "Wednesday",
  "Thu": "Thursday",
  "Fri": "Friday",
  "Sat": "Saturday",
  "Sun": "Sunday",
};

const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getDoctorById(id);
        setDoctor(data);
        setError(null);
      } catch (err) {
        setError("Failed to load doctor profile.");
        console.error("Error fetching doctor:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading doctor profile...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Doctor Not Found</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Link to="/doctors" className="btn-primary">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  // Get image URL
  const imageUrl = doctor.image.startsWith("http") 
    ? doctor.image 
    : `http://localhost:5000/uploads/${doctor.image}`;

  // Map available days to full names
  const availableDaysFull = doctor.availableDays.map(day => dayMapping[day] || day);

  return (
    <div>
      {/* Back Button */}
      <div className="bg-muted py-4">
        <div className="container-custom">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Doctors
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Image & Quick Info */}
            <div className="lg:col-span-1">
              <div className="glass-card sticky top-28">
                <div className="relative mb-6">
                  <img
                    src={imageUrl}
                    alt={doctor.name}
                    className="w-full aspect-square object-cover rounded-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face";
                    }}
                  />
                  <div className="absolute -bottom-4 left-4 right-4">
                    <div className="bg-gradient-primary rounded-xl py-3 px-4 text-center">
                      <span className="text-primary-foreground font-medium">
                        {doctor.department}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <Award className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-semibold text-foreground">{doctor.experience} Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <IndianRupee className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation Fee</p>
                      <p className="font-semibold text-foreground">₹{doctor.consultationFee}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary w-full mt-6 text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {doctor.name}
                </h1>
                <p className="text-lg text-muted-foreground">{doctor.education}</p>
              </div>

              {/* About */}
              {doctor.about && (
                <div className="card-elevated">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Stethoscope className="text-primary" size={20} />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">About Doctor</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
                </div>
              )}

              {/* OPD Timings */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">OPD Timings</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {doctor.timeSlots?.map((slot, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted">
                      <p className="text-sm text-muted-foreground mb-1">Time Slot {index + 1}</p>
                      <p className="font-semibold text-foreground text-lg">{slot}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              {doctor.languages && doctor.languages.length > 0 && (
                <div className="card-elevated">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Languages className="text-primary" size={20} />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Languages Spoken</h2>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {doctor.languages.map((lang) => (
                      <div
                        key={lang}
                        className="px-4 py-2 rounded-xl bg-muted text-foreground font-medium"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Days */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Available Days</h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {allDays.map((day) => (
                    <div
                      key={day}
                      className={`px-4 py-2 rounded-xl font-medium ${
                        availableDaysFull.includes(day)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookAppointmentModal
        open={isBookingOpen}
        doctor={doctor}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default DoctorProfile;