import axios from "axios";
import { UUID } from "crypto";

const path = import.meta.env.VITE_BACKEND_URL;

export type CreateSalesDto = {
  name: string;
  customer: string;
  project: string;
  sale: string;
};

export type saleObject = {
  Id: UUID;
  name: string;
  customer: string;
  project: string;
  sale: string;
};

export const getSales = async (): Promise<saleObject[]> => {
  const response = await axios.get(`${path}/api/sales`);
  return await response.data;
};

export const createSale = async (newSale: CreateSalesDto): Promise<boolean> => {
  const response = await axios.post(
    `${path}/api/sales`,
    {
      name: newSale.name,
      customer: newSale.customer,
      project: newSale.project,
      sale: Number(newSale.sale),
    },
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.data}`);
  }
};

export const updateSale = async (
  updatedSale: saleObject
): Promise<saleObject> => {
  const response = await axios.put(
    `${path}/api/sales/${updatedSale.Id}`,
    {
      name: updatedSale.name,
      customer: updatedSale.customer,
      project: updatedSale.project,
      sale: Number(updatedSale.sale),
    },
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
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
