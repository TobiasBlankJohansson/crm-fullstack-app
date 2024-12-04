import { CustomerInfo } from "@/components/dashboard/page/projects/create/addCustomers";
import axios from "axios";
import { UUID } from "crypto";

const path = import.meta.env.VITE_BACKEND_URL;

export type CustomerObject = {
  id: UUID;
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

export type CreateCustomerDto = {
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

export const getCustomer = async () => {
  const response = await axios.get(`${path}/api/customers`);
  return await response.data;
};

export const createCustomer = async (
  newCustomer: CreateCustomerDto
): Promise<boolean> => {
  const response = await axios.post(
    `${path}/api/customers`,
    {
      company: newCustomer.company,
      project: newCustomer.project,
      contact: newCustomer.contact,
      tag: newCustomer.tag,
      address: newCustomer.address,
      phone: newCustomer.phone,
      email: newCustomer.email,
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

export const updateCustomer = async (
  updatedCustomer: CustomerObject
): Promise<CustomerObject> => {
  const response = await axios.put(
    `${path}/api/customers/${updatedCustomer.id}`,
    {
      company: updatedCustomer.company,
      project: updatedCustomer.project,
      contact: updatedCustomer.contact,
      tag: updatedCustomer.tag,
      address: updatedCustomer.address,
      phone: updatedCustomer.phone,
      email: updatedCustomer.email,
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

export const deleteCustomer = async (customerId: UUID): Promise<boolean> => {
  const response = await axios.delete(`${path}/api/customers/${customerId}`);
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
};

export const getCustomerSelection = async (): Promise<CustomerInfo[]> => {
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
