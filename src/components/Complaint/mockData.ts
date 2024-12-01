import { format, subDays, subHours } from 'date-fns';

// Utility function to generate random dates within a range
const getRandomDate = (start: number, end: number) => {
  return format(
    subDays(new Date(), Math.floor(Math.random() * (end - start) + start)),
    'dd/MM/yyyy'
  );
};

// Utility function to generate random times
const getRandomTime = () => {
  return format(
    subHours(new Date(), Math.floor(Math.random() * 24)),
    'HH:mm'
  );
};

export const iTegurComplaints = [
  {
    id: "IT-2024-001",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Tun Razak, Kampung Baru",
    status: "New",
    category: "Faulty Light",
    description: "Street light not working for past 3 days",
    priority: "High",
    reporter: {
      name: "Ahmad Bin Ismail",
      phone: "012-345-6789",
      email: "ahmad@email.com"
    }
  },
  {
    id: "IT-2024-002",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Ampang, KLCC Area",
    status: "In Progress",
    category: "Dim Light",
    description: "Multiple street lights very dim at night",
    priority: "Medium",
    reporter: {
      name: "Sarah Lee",
      phone: "013-456-7890",
      email: "sarah@email.com"
    }
  },
  {
    id: "IT-2024-003",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Bukit Bintang",
    status: "Resolved",
    category: "Flickering Light",
    description: "Street light flickering causing distraction",
    priority: "Low",
    reporter: {
      name: "Raj Kumar",
      phone: "014-567-8901",
      email: "raj@email.com"
    }
  },
  {
    id: "IT-2024-004",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Sultan Ismail",
    status: "New",
    category: "Damaged Pole",
    description: "Light pole appears to be tilting",
    priority: "High",
    reporter: {
      name: "John Tan",
      phone: "015-678-9012",
      email: "john@email.com"
    }
  },
  {
    id: "IT-2024-005",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Pudu",
    status: "In Progress",
    category: "Exposed Wiring",
    description: "Exposed electrical wires on light pole",
    priority: "High",
    reporter: {
      name: "Mary Wong",
      phone: "016-789-0123",
      email: "mary@email.com"
    }
  },
  {
    id: "IT-2024-006",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Imbi",
    status: "Pending",
    category: "Faulty Light",
    description: "Three consecutive lights not working",
    priority: "Medium",
    reporter: {
      name: "Ali Abu Bakar",
      phone: "017-890-1234",
      email: "ali@email.com"
    }
  },
  {
    id: "IT-2024-007",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Raja Chulan",
    status: "Resolved",
    category: "Timer Issue",
    description: "Lights turning on too late in evening",
    priority: "Low",
    reporter: {
      name: "Lisa Chen",
      phone: "018-901-2345",
      email: "lisa@email.com"
    }
  },
  {
    id: "IT-2024-008",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan P Ramlee",
    status: "New",
    category: "Broken Cover",
    description: "Light fixture cover missing",
    priority: "Medium",
    reporter: {
      name: "David Lim",
      phone: "019-012-3456",
      email: "david@email.com"
    }
  },
  {
    id: "IT-2024-009",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Hang Tuah",
    status: "In Progress",
    category: "Faulty Light",
    description: "Light keeps turning on and off",
    priority: "High",
    reporter: {
      name: "Siti Aminah",
      phone: "012-123-4567",
      email: "siti@email.com"
    }
  },
  {
    id: "IT-2024-010",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Alor",
    status: "Pending",
    category: "Dim Light",
    description: "Street too dark due to dim lights",
    priority: "Medium",
    reporter: {
      name: "Michael Yap",
      phone: "013-234-5678",
      email: "michael@email.com"
    }
  }
];

export const ePBTComplaints = [
  {
    id: "EPBT-2024-001",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Masjid India",
    status: "New",
    type: "Infrastructure",
    category: "Street Lighting",
    description: "Multiple lights out in busy area",
    assignedTo: "Team A",
    priority: "High",
    zone: "Zone 1"
  },
  {
    id: "EPBT-2024-002",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Tuanku Abdul Rahman",
    status: "In Progress",
    type: "Maintenance",
    category: "Street Lighting",
    description: "Scheduled replacement needed for old lights",
    assignedTo: "Team B",
    priority: "Medium",
    zone: "Zone 2"
  },
  {
    id: "EPBT-2024-003",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Chow Kit",
    status: "Completed",
    type: "Emergency",
    category: "Street Lighting",
    description: "Fallen light pole after vehicle collision",
    assignedTo: "Team C",
    priority: "High",
    zone: "Zone 1"
  },
  {
    id: "EPBT-2024-004",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Ipoh",
    status: "Pending",
    type: "Infrastructure",
    category: "Street Lighting",
    description: "New installation request for dark area",
    assignedTo: "Team A",
    priority: "Medium",
    zone: "Zone 3"
  },
  {
    id: "EPBT-2024-005",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Pahang",
    status: "In Progress",
    type: "Maintenance",
    category: "Street Lighting",
    description: "Wiring inspection after power surge",
    assignedTo: "Team D",
    priority: "High",
    zone: "Zone 2"
  },
  {
    id: "EPBT-2024-006",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Raja Laut",
    status: "New",
    type: "Infrastructure",
    category: "Street Lighting",
    description: "Upgrade request for LED conversion",
    assignedTo: "Team B",
    priority: "Low",
    zone: "Zone 4"
  },
  {
    id: "EPBT-2024-007",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Dang Wangi",
    status: "Completed",
    type: "Emergency",
    category: "Street Lighting",
    description: "Power supply restoration after outage",
    assignedTo: "Team C",
    priority: "High",
    zone: "Zone 1"
  },
  {
    id: "EPBT-2024-008",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Sultan Ismail",
    status: "In Progress",
    type: "Maintenance",
    category: "Street Lighting",
    description: "Timer adjustment for dawn/dusk",
    assignedTo: "Team A",
    priority: "Medium",
    zone: "Zone 2"
  },
  {
    id: "EPBT-2024-009",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Ampang",
    status: "Pending",
    type: "Infrastructure",
    category: "Street Lighting",
    description: "Relocation of light poles for road widening",
    assignedTo: "Team D",
    priority: "Medium",
    zone: "Zone 3"
  },
  {
    id: "EPBT-2024-010",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Pudu",
    status: "New",
    type: "Emergency",
    category: "Street Lighting",
    description: "Electrical hazard from damaged wiring",
    assignedTo: "Team B",
    priority: "High",
    zone: "Zone 1"
  }
];

export const sisPAAComplaints = [
  {
    id: "SP-2024-001",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Petaling",
    status: "New",
    department: "Engineering",
    category: "Electrical",
    subCategory: "Street Light",
    description: "Power supply issue to street lights",
    priority: "High",
    estimatedCost: "RM 2,500",
    assignedContractor: "ABC Electric Sdn Bhd"
  },
  {
    id: "SP-2024-002",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Bangsar",
    status: "In Progress",
    department: "Maintenance",
    category: "Infrastructure",
    subCategory: "Light Pole",
    description: "Replacement of rusted light poles",
    priority: "Medium",
    estimatedCost: "RM 15,000",
    assignedContractor: "Steel Works Engineering"
  },
  {
    id: "SP-2024-003",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Kg Pandan",
    status: "Completed",
    department: "Engineering",
    category: "Electrical",
    subCategory: "Wiring",
    description: "Underground cable replacement",
    priority: "High",
    estimatedCost: "RM 8,750",
    assignedContractor: "PowerGrid Solutions"
  },
  {
    id: "SP-2024-004",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Cochrane",
    status: "Pending Approval",
    department: "Planning",
    category: "Development",
    subCategory: "New Installation",
    description: "New street light installation project",
    priority: "Medium",
    estimatedCost: "RM 45,000",
    assignedContractor: "Urban Light Systems"
  },
  {
    id: "SP-2024-005",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Loke Yew",
    status: "In Progress",
    department: "Engineering",
    category: "Electrical",
    subCategory: "Control System",
    description: "Smart controller installation",
    priority: "High",
    estimatedCost: "RM 12,300",
    assignedContractor: "Smart City Solutions"
  },
  {
    id: "SP-2024-006",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Syed Putra",
    status: "New",
    department: "Maintenance",
    category: "Emergency",
    subCategory: "Street Light",
    description: "Storm damage repair",
    priority: "High",
    estimatedCost: "RM 5,800",
    assignedContractor: "Rapid Response Electric"
  },
  {
    id: "SP-2024-007",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Klang Lama",
    status: "In Progress",
    department: "Engineering",
    category: "Upgrade",
    subCategory: "LED Conversion",
    description: "LED upgrade project phase 1",
    priority: "Medium",
    estimatedCost: "RM 85,000",
    assignedContractor: "Green Light Technologies"
  },
  {
    id: "SP-2024-008",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Cheras",
    status: "Pending Approval",
    department: "Planning",
    category: "Infrastructure",
    subCategory: "Relocation",
    description: "Light pole relocation for MRT project",
    priority: "High",
    estimatedCost: "RM 32,000",
    assignedContractor: "Metro Infrastructure Works"
  },
  {
    id: "SP-2024-009",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Genting Klang",
    status: "Completed",
    department: "Maintenance",
    category: "Preventive",
    subCategory: "Inspection",
    description: "Annual maintenance inspection",
    priority: "Low",
    estimatedCost: "RM 3,500",
    assignedContractor: "Quality Assurance Services"
  },
  {
    id: "SP-2024-010",
    date: getRandomDate(1, 30),
    time: getRandomTime(),
    location: "Jalan Kepong",
    status: "In Progress",
    department: "Engineering",
    category: "Electrical",
    subCategory: "Power Supply",
    description: "Solar power integration project",
    priority: "Medium",
    estimatedCost: "RM 95,000",
    assignedContractor: "Solar Energy Solutions"
  }
];