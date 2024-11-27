export const getProjects = async () => {
  return mockProject;
};

const mockProject = [
  {
    name: "AI Development Project",
    duration: "6 months",
    costomers: ["Tech Innovators Inc.", "Future AI Solutions"],
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
    costomers: ["Green Energy Solutions"],
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
    costomers: ["NextGen Robotics", "Industrial Systems Ltd."],
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
    costomers: ["CloudCom LLC"],
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
    costomers: ["HealthTech Solutions", "CareTech Partners"],
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
