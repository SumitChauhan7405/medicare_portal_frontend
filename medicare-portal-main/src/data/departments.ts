export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  services: string[];
}

export const departments: Department[] = [
  {
    id: "physician",
    name: "General Physician",
    description: "Comprehensive primary healthcare services including diagnosis and treatment of common illnesses, preventive care, and management of chronic conditions like diabetes and hypertension.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    services: ["General Check-ups", "Chronic Disease Management", "Preventive Care", "Health Screenings"]
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Expert cardiac care with advanced diagnostics and treatment for heart conditions. Our cardiologists specialize in interventional procedures, heart failure management, and preventive cardiology.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop",
    services: ["ECG & Echo", "Angiography", "Pacemaker Implantation", "Heart Surgery Consultation"]
  },
  {
    id: "radiology",
    name: "Radiology",
    description: "State-of-the-art diagnostic imaging services including X-Ray, CT Scan, MRI, and Sonography. Our advanced equipment ensures accurate diagnosis for effective treatment planning.",
    icon: "ScanLine",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
    services: ["X-Ray", "CT Scan", "MRI", "Ultrasound/Sonography", "Mammography"]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Specialized care for neurological disorders including stroke, epilepsy, Parkinson's disease, and headache disorders. Our neurologists use advanced diagnostic tools for precise treatment.",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    services: ["EEG", "Nerve Conduction Studies", "Stroke Management", "Epilepsy Treatment"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Comprehensive healthcare for infants, children, and adolescents. Our pediatricians provide vaccinations, growth monitoring, and treatment for childhood illnesses in a child-friendly environment.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
    services: ["Vaccinations", "Growth Monitoring", "Newborn Care", "Child Development Assessment"]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Expert care for bone, joint, and muscle conditions. Our orthopedic surgeons specialize in joint replacement, sports injuries, fracture management, and spine disorders.",
    icon: "Bone",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&h=400&fit=crop",
    services: ["Joint Replacement", "Sports Medicine", "Fracture Treatment", "Spine Surgery"]
  },
  {
    id: "laboratory",
    name: "Laboratory",
    description: "Fully equipped diagnostic laboratory offering a comprehensive range of blood tests, urine analysis, and specialized investigations. Quick and accurate results with quality assurance.",
    icon: "TestTube",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop",
    services: ["Blood Tests", "Urine Analysis", "Pathology", "Microbiology"]
  },
  {
    id: "surgery",
    name: "Surgery & OT",
    description: "Modern operation theatres equipped with advanced surgical equipment for various procedures. Our skilled surgeons perform minimally invasive and complex surgeries with precision.",
    icon: "Syringe",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
    services: ["General Surgery", "Laparoscopic Surgery", "Emergency Surgery", "Day Care Procedures"]
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    description: "24/7 pharmacy stocked with quality medicines and healthcare products. Our qualified pharmacists ensure proper dispensing and provide medication counseling to patients.",
    icon: "Pill",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    services: ["Prescription Medicines", "OTC Products", "Medical Supplies", "Medication Counseling"]
  }
];
