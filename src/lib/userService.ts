// Mock user service
export interface UserData {
  scheduleId: string;
  location: string;
  vendor: string;
  driver: string;
  workers: string;
}

export const getUserData = (): UserData => {
  // This would normally be fetched from an API/backend
  return {
    scheduleId: "SCH-2024-001",
    location: "Jalan Ampang - City Center",
    vendor: "Alam Flora Sdn Bhd",
    driver: "Ahmad Razak",
    workers: "Team A: Ali, Abu, Siti"
  };
}; 