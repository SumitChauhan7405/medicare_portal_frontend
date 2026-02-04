// HMS Doctor Schema (matches your db.json structure)
export interface HMSDoctor {
  id: string;
  name: string;
  email: string;
  password?: string; // Not used on public site
  department: string;
  experience: number;
  education: string;
  availableDays: string[];
  timeSlots: string[];
  consultationFee: number;
  image: string;
}

// Extended doctor info for display (optional fields for richer UI)
export interface Doctor extends HMSDoctor {
  languages?: string[];
  about?: string;
}
