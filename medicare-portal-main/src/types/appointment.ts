export interface Appointment {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  phone: string;
  bloodGroup: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  source: "ONLINE" | "WALK-IN";
  createdAt: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  phone: string;
  bloodGroup: string;
  date: string;
  timing: string;
}
