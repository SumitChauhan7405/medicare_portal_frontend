import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Heart, ScanLine, Brain, Baby, Bone, TestTube, Syringe, Pill, LucideIcon } from "lucide-react";
import type { Department } from "@/data/departments";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Heart,
  ScanLine,
  Brain,
  Baby,
  Bone,
  TestTube,
  Syringe,
  Pill,
};

interface DepartmentCardProps {
  department: Department;
  variant?: "default" | "compact";
}

const DepartmentCard = ({ department, variant = "default" }: DepartmentCardProps) => {
  const IconComponent = iconMap[department.icon] || Stethoscope;

  if (variant === "compact") {
    return (
      <Link
        to="/services"
        className="card-elevated flex items-center gap-4 group"
      >
        <div className="feature-icon shrink-0">
          <IconComponent size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {department.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {department.services.slice(0, 2).join(", ")}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="card-elevated group overflow-hidden">
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <IconComponent size={24} className="text-primary-foreground" />
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{department.name}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{department.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {department.services.slice(0, 3).map((service) => (
          <span
            key={service}
            className="text-xs px-2 py-1 rounded-full bg-primary-light text-primary"
          >
            {service}
          </span>
        ))}
      </div>
      
      <Link
        to="/services"
        className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default DepartmentCard;
