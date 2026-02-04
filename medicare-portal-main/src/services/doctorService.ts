import type { Doctor } from "@/types/doctor";

const API_BASE_URL = "http://localhost:5000";

export const getDoctors = async (): Promise<Doctor[]> => {
  const response = await fetch(`${API_BASE_URL}/doctors`);
  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }
  return response.json();
};

export const getDoctorById = async (id: string): Promise<Doctor | null> => {
  const response = await fetch(`${API_BASE_URL}/doctors/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch doctor");
  }
  return response.json();
};
