import { Phone } from "lucide-react";

const EmergencyBar = () => {
  return (
    <div className="emergency-bar">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="animate-pulse">
            <Phone size={18} />
          </div>
          <span className="font-semibold">Emergency?</span>
        </div>
        <a
          href="tel:+919054277510"
          className="font-bold text-lg hover:underline"
        >
          Call +91 90542 77510
        </a>
      </div>
    </div>
  );
};

export default EmergencyBar;
