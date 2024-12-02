import { ProjectInfo } from "@/components/dashboard/page/customer/create/AddProject";

export type CreateProjectDto = {
  project: string;
  duration: string;
  costumers: string[];
  notes: string[];
};

export const getProjects = async () => {
  return mockProject;
};

export const createProject = async (newProject: CreateProjectDto) => {
  return newProject && true;
};

export const getProjectSelection = async (): Promise<ProjectInfo[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Project Alpha",
          id: "00000000-0000-4000-8000-000000000000",
        },
        {
          title: "Project Beta",
          id: "00000000-0000-4000-8000-000000000001",
        },
        {
          title: "Project Gamma",
          id: "00000000-0000-4000-8000-000000000002",
        },
      ]);
    }, 0);
  });
};

const mockProject = [
  {
    name: "AI Development Project",
    duration: "6 months",
    customers: ["Tech Innovators Inc.", "Future AI Solutions"],
    notes: [
      "Focus on advanced AI algorithms.",
      "Deliver by end of Q2.",
      "Collaborate with internal data science team.",
    ],
    sales: [
      { name: "AI Module Development", sale: "$120,000" },
      { name: "Model Optimization", sale: "$30,000" },
    ],
  },
  {
    name: "Solar Panel Installation",
    duration: "3 months",
    customers: ["Green Energy Solutions"],
    notes: [
      "Install 500 panels across 10 sites.",
      "Ensure compliance with local regulations.",
      "Include maintenance training.",
    ],
    sales: [
      { name: "Panel Installation", sale: "$200,000" },
      { name: "Maintenance Package", sale: "$50,000" },
    ],
  },
  {
    name: "Automated Assembly Line",
    duration: "8 months",
    customers: ["NextGen Robotics", "Industrial Systems Ltd."],
    notes: [
      "Integrate advanced robotics with existing setup.",
      "Minimize downtime during deployment.",
      "Provide user manuals and staff training.",
    ],
    sales: [
      { name: "Robotics System", sale: "$300,000" },
      { name: "Integration Support", sale: "$100,000" },
    ],
  },
  {
    name: "Cloud Infrastructure Upgrade",
    duration: "5 months",
    customers: ["CloudCom LLC"],
    notes: [
      "Enhance scalability for peak traffic.",
      "Ensure zero data loss during migration.",
      "Implement robust security protocols.",
    ],
    sales: [
      { name: "Infrastructure Upgrade", sale: "$400,000" },
      { name: "Support Services", sale: "$100,000" },
    ],
  },
  {
    name: "Telemedicine Platform",
    duration: "4 months",
    customers: ["HealthTech Solutions", "CareTech Partners"],
    notes: [
      "Build a HIPAA-compliant platform.",
      "Implement video calling and EHR integration.",
      "Provide patient feedback collection tools.",
    ],
    sales: [
      { name: "Platform Development", sale: "$180,000" },
      { name: "Maintenance Contract", sale: "$40,000" },
    ],
  },
];
