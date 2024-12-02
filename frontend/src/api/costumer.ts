import { CostomerInfo } from "@/components/dashbord/page/projects/create/addCustomers";

export type CreateDto = {
  company: string;
  project: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  }[];
  tag: string[];
  address: string;
  phone: string;
  email: string;
};

export const getCostumer = async () => {
  return mockCostumer;
};

export const createCostumer = async (newCostumer: CreateDto) => {
  return newCostumer && true;
};

export const getCustomerSelection = async (): Promise<CostomerInfo[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Tech Innovators Inc",
          id: "00000000-0000-4000-8000-000000000000",
        },
        {
          title: "Green Energy Solutions",
          id: "00000000-0000-4000-8000-000000000001",
        },
        {
          title: "NextGen Robotics",
          id: "00000000-0000-4000-8000-000000000002",
        },
      ]);
    }, 0);
  });
};

const mockCostumer = [
  {
    company: "Tech Innovators Inc.",
    project: ["AI Development", "Web App Overhaul"],
    contact: [
      {
        name: "John Smith",
        phone: "123-456-7890",
        email: "john.smith@techinnovators.com",
      },
      {
        name: "Jane Doe",
        phone: "234-567-8901",
        email: "jane.doe@techinnovators.com",
      },
    ],
    tag: ["Technology", "Innovation", "Software"],
    address: "123 Innovation Drive, Tech City, TX 75001",
    phone: "800-555-1234",
    email: "contact@techinnovators.com",
  },
  {
    company: "Green Energy Solutions",
    project: ["Solar Panel Design", "Battery Storage System"],
    contact: [
      {
        name: "Alice Green",
        phone: "345-678-9012",
        email: "alice.green@greenenergy.com",
      },
      {
        name: "Bob Brown",
        phone: "456-789-0123",
        email: "bob.brown@greenenergy.com",
      },
    ],
    tag: ["Energy", "Sustainability", "Renewables"],
    address: "456 Eco Lane, Green Town, CA 90210",
    phone: "877-555-5678",
    email: "support@greenenergy.com",
  },
  {
    company: "NextGen Robotics",
    project: ["Autonomous Vehicle", "Robotic Arms"],
    contact: [
      {
        name: "Chris White",
        phone: "567-890-1234",
        email: "chris.white@nextgenrobotics.com",
      },
      {
        name: "Pat Black",
        phone: "678-901-2345",
        email: "pat.black@nextgenrobotics.com",
      },
    ],
    tag: ["Robotics", "Automation", "AI"],
    address: "789 Future Way, Robo City, NY 10001",
    phone: "855-555-7890",
    email: "info@nextgenrobotics.com",
  },
];
