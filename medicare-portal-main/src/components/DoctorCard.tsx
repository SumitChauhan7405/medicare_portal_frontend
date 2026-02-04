import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

// Map short day names to full names for display
const dayMapping: Record<string, string> = {
  "Mon": "Monday",
  "Tue": "Tuesday",
  "Wed": "Wednesday",
  "Thu": "Thursday",
  "Fri": "Friday",
  "Sat": "Saturday",
  "Sun": "Sunday",
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  // Get image URL - handle both full URLs and filenames
  const imageUrl = doctor.image.startsWith("http") 
    ? doctor.image 
    : `http://localhost:5000/uploads/${doctor.image}`;

  // Format available days for display
  const displayDays = doctor.availableDays.map(day => dayMapping[day] || day);

  // Format time slots for display
  const displayTimeSlot = doctor.timeSlots?.[0] || "N/A";

  return (
    <div className="card-elevated group">
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={doctor.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face";
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="department-badge">{doctor.department}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-1">{doctor.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{doctor.education}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={16} className="text-primary" />
          <span>{doctor.experience} years experience</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={16} className="text-primary" />
          <span>{displayTimeSlot}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {displayDays.slice(0, 3).map((day) => (
          <span
            key={day}
            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {day.slice(0, 3)}
          </span>
        ))}
        {displayDays.length > 3 && (
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            +{displayDays.length - 3}
          </span>
        )}
      </div>
      
      <Link
        to={`/doctors/${doctor.id}`}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        View Profile
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default DoctorCard;
