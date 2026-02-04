import { useState, useEffect } from "react";
import { getDoctors } from "@/services/doctorService";
import DoctorCard from "@/components/DoctorCard";
import { Search, Loader2 } from "lucide-react";
import type { Doctor } from "@/types/doctor";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const data = await getDoctors();
        setDoctors(data);
        setError(null);
      } catch (err) {
        setError("Failed to load doctors. Please ensure the HMS server is running.");
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const departments = ["all", ...new Set(doctors.map((d) => d.department))];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.education.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Doctors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our team of experienced and compassionate healthcare professionals 
            dedicated to providing you with the best medical care.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search doctors by name, department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-12"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedDepartment === dept
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {dept === "all" ? "All Departments" : dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container-custom">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Loading doctors...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="glass-card max-w-md mx-auto">
                <p className="text-lg text-destructive mb-4">{error}</p>
                <p className="text-sm text-muted-foreground">
                  Make sure your HMS server is running at http://localhost:5000
                </p>
              </div>
            </div>
          ) : filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No doctors found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorsList;
