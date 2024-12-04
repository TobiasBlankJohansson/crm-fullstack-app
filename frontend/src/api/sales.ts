import axios from "axios";

export type CreateSalesDto = {
  name: string;
  company: string;
  project: string;
  sale: string;
};

export type UpdateSaleDto = {
  id: string;
  name: string;
  company: string;
  project: string;
  sale: string;
};

export const getSales = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/sales");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createSale = async (newSale: CreateSalesDto) => {
  return newSale && true;
};

export const updateSale = async (newSale: UpdateSaleDto) => {
  return newSale && true;
};

// const mockSales = [
//   {
//     name: "Sold AI Development Services",
//     company: "Tech Innovators Inc.",
//     project: "AI Development",
//     sale: "$150,000",
//   },
//   {
//     name: "Completed Solar Panel Deployment",
//     company: "Green Energy Solutions",
//     project: "Solar Panel Deployment",
//     sale: "$250,000",
//   },
//   {
//     name: "Provided Automated Assembly Line",
//     company: "NextGen Robotics",
//     project: "Automated Assembly Line",
//     sale: "$400,000",
//   },
//   {
//     name: "Developed Home Security App",
//     company: "Smart Home Systems",
//     project: "Home Security App",
//     sale: "$120,000",
//   },
//   {
//     name: "Integrated Blockchain Technology",
//     company: "FutureTech Labs",
//     project: "Blockchain Integration",
//     sale: "$300,000",
//   },
//   {
//     name: "Deployed Electric Vehicle Chargers",
//     company: "EcoTech Solutions",
//     project: "Electric Vehicle Charger",
//     sale: "$200,000",
//   },
//   {
//     name: "Upgraded Cloud Infrastructure",
//     company: "CloudCom LLC",
//     project: "Cloud Infrastructure Upgrade",
//     sale: "$500,000",
//   },
//   {
//     name: "Built E-Learning Platform",
//     company: "EduTech Partners",
//     project: "E-Learning Platform",
//     sale: "$350,000",
//   },
//   {
//     name: "Created Telemedicine Application",
//     company: "HealthTech Solutions",
//     project: "Telemedicine App",
//     sale: "$220,000",
//   },
//   {
//     name: "Installed Smart Irrigation System",
//     company: "AgriTech Innovations",
//     project: "Smart Irrigation System",
//     sale: "$180,000",
//   },
// ];
