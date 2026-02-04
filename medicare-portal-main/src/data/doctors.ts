export interface Doctor {
  id: string;
  name: string;
  department: string;
  qualification: string;
  experience: number;
  availableDays: string[];
  opdTimings: {
    morning: string;
    evening: string;
  };
  consultationFee: number;
  languages: string[];
  about: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-001",
    name: "Dr. Rajesh Kumar",
    department: "Cardiology",
    qualification: "MBBS, MD (Cardiology), DM",
    experience: 18,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
    opdTimings: {
      morning: "9:00 AM - 12:00 PM",
      evening: "5:00 PM - 8:00 PM"
    },
    consultationFee: 800,
    languages: ["English", "Hindi", "Gujarati"],
    about: "Dr. Rajesh Kumar is a renowned cardiologist with over 18 years of experience in treating complex cardiac conditions. He specializes in interventional cardiology and has performed over 5000 successful procedures. His patient-centric approach and dedication to cardiac care have made him a trusted name in the field.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-002",
    name: "Dr. Priya Sharma",
    department: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
    experience: 12,
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    opdTimings: {
      morning: "10:00 AM - 1:00 PM",
      evening: "4:00 PM - 7:00 PM"
    },
    consultationFee: 600,
    languages: ["English", "Hindi"],
    about: "Dr. Priya Sharma is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from newborns to adolescents. With a fellowship in Neonatology, she has special expertise in caring for premature and critically ill newborns. She believes in a holistic approach to child health.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-003",
    name: "Dr. Anil Mehta",
    department: "Orthopedics",
    qualification: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement",
    experience: 20,
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    opdTimings: {
      morning: "9:30 AM - 12:30 PM",
      evening: "5:30 PM - 8:30 PM"
    },
    consultationFee: 900,
    languages: ["English", "Hindi", "Marathi"],
    about: "Dr. Anil Mehta is an accomplished orthopedic surgeon specializing in joint replacement and sports medicine. With 20 years of experience, he has helped thousands of patients regain mobility and quality of life. He is known for his minimally invasive surgical techniques and excellent patient outcomes.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-004",
    name: "Dr. Sunita Reddy",
    department: "Neurology",
    qualification: "MBBS, MD (Medicine), DM (Neurology)",
    experience: 15,
    availableDays: ["Tuesday", "Wednesday", "Friday", "Saturday"],
    opdTimings: {
      morning: "10:00 AM - 1:00 PM",
      evening: "4:00 PM - 7:00 PM"
    },
    consultationFee: 1000,
    languages: ["English", "Hindi", "Telugu"],
    about: "Dr. Sunita Reddy is a distinguished neurologist with expertise in treating stroke, epilepsy, and neurodegenerative disorders. Her research contributions and clinical excellence have earned her recognition in the medical community. She takes a patient-first approach, ensuring thorough evaluation and personalized treatment plans.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-005",
    name: "Dr. Vikram Singh",
    department: "General Physician",
    qualification: "MBBS, MD (General Medicine)",
    experience: 14,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opdTimings: {
      morning: "8:30 AM - 12:00 PM",
      evening: "5:00 PM - 8:00 PM"
    },
    consultationFee: 500,
    languages: ["English", "Hindi", "Punjabi"],
    about: "Dr. Vikram Singh is a highly experienced general physician known for his diagnostic acumen and compassionate care. He provides comprehensive primary healthcare services and manages chronic conditions like diabetes, hypertension, and respiratory disorders. His approachable demeanor makes patients feel comfortable.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "dr-006",
    name: "Dr. Meera Patel",
    department: "Radiology",
    qualification: "MBBS, MD (Radiology), DNB",
    experience: 10,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opdTimings: {
      morning: "9:00 AM - 2:00 PM",
      evening: "By Appointment"
    },
    consultationFee: 700,
    languages: ["English", "Hindi", "Gujarati"],
    about: "Dr. Meera Patel is an expert radiologist specializing in CT scans, MRI, and interventional radiology. Her precise diagnostic skills and attention to detail ensure accurate interpretations that aid in effective treatment planning. She is passionate about using advanced imaging technology for early disease detection.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face"
  }
];

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};
