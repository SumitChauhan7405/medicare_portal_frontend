import { useEffect, useState } from "react";
import { X, Calendar, Clock, User, Phone } from "lucide-react";
import { getAppointments, addAppointment } from "@/services/appointmentService";
import type { Doctor } from "@/types/doctor";
import type { Appointment, AppointmentFormData } from "@/types/appointment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const OPD_SCHEDULES = [
  { label: "Morning (10:00 - 12:00)", value: "MORNING (10:00 - 12:00)" },
  { label: "Evening (5:00 - 7:00)", value: "EVENING (5:00 - 7:00)" },
];

interface BookAppointmentModalProps {
  open: boolean;
  doctor: Doctor | null;
  onClose: () => void;
}

const BookAppointmentModal = ({ open, doctor, onClose }: BookAppointmentModalProps) => {
  const { toast } = useToast();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<AppointmentFormData>({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phone: "",
    bloodGroup: "",
    date: "",
    timing: "",
  });

  useEffect(() => {
    if (open) {
      loadAppointments();
      setForm({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        phone: "",
        bloodGroup: "",
        date: "",
        timing: "",
      });
    }
  }, [open]);

  const loadAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Failed to load appointments:", error);
    }
  };

  if (!open || !doctor) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const generateAppointmentId = (): string => {
    const year = new Date().getFullYear();
    const aptOnly = appointments.filter(
      (a) => a.id && a.id.startsWith(`APT-${year}`)
    );

    if (aptOnly.length === 0) {
      return `APT-${year}-0001`;
    }

    const last = aptOnly[aptOnly.length - 1];
    const num = Number(last.id.split("-")[2]) + 1;
    return `APT-${year}-${String(num).padStart(4, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addAppointment({
        id: generateAppointmentId(),
        firstName: form.firstName,
        lastName: form.lastName,
        gender: form.gender,
        age: form.age,
        phone: form.phone,
        bloodGroup: form.bloodGroup,
        doctorId: doctor.id,
        doctorName: doctor.name,
        date: form.date,
        time: form.timing,
        status: "PENDING",
        source: "ONLINE",
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Appointment Requested",
        description: "Your appointment request has been sent successfully!",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-primary p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="text-primary-foreground" size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground">Book Appointment</h2>
              <p className="text-primary-foreground/80">Doctor: {doctor.name}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <User size={20} className="text-primary" />
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name *</label>
                <Input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name *</label>
                <Input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Gender *</label>
                <Select
                  value={form.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Age *</label>
                <Input
                  name="age"
                  type="number"
                  min="0"
                  max="150"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="Age"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Blood Group</label>
                <Select
                  value={form.bloodGroup}
                  onValueChange={(value) => handleSelectChange("bloodGroup", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {BLOOD_GROUPS.map((bg) => (
                      <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                Phone Number *
              </label>
              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              Appointment Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Appointment Date *</label>
                <Input
                  name="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">OPD Schedule *</label>
                <Select
                  value={form.timing}
                  onValueChange={(value) => handleSelectChange("timing", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPD_SCHEDULES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Doctor Info Card */}
          <div className="p-4 rounded-xl bg-muted">
            <div className="flex items-center gap-4">
              <img
                src={doctor.image.startsWith("http") ? doctor.image : `http://localhost:5000/uploads/${doctor.image}`}
                alt={doctor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{doctor.name}</p>
                <p className="text-sm text-muted-foreground">{doctor.department}</p>
                <p className="text-sm text-primary font-medium">₹{doctor.consultationFee} Consultation Fee</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              <Calendar size={18} />
              {isSubmitting ? "Submitting..." : "Request Appointment"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
