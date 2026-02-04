import type { Appointment } from "@/types/appointment";

const API_BASE_URL = "http://localhost:5000";

export const getAppointments = async (): Promise<Appointment[]> => {
  const response = await fetch(`${API_BASE_URL}/appointments`);
  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }
  return response.json();
};

export const addAppointment = async (appointment: Appointment): Promise<Appointment> => {
  const response = await fetch(`${API_BASE_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  });
  if (!response.ok) {
    throw new Error("Failed to create appointment");
  }
  return response.json();
};
