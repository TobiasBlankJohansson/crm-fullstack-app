import { CustomerInfo } from "@/components/dashboard/page/projects/create/addCustomers";
import axios from "axios";
import { UUID } from "crypto";

const path = import.meta.env.VITE_BACKEND_URL;

export type CustomerObject = {
  id: UUID;
  company: string;
  project: string[];
  contact: {
    id: UUID;
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
  companyName: string;
  project: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  }[];
  tag: string[];
  address: string;
  phoneNumber: string;
  email: string;
};

export const getCustomer = async () => {
  const response = await axios.get(`${path}/api/customers`);
  console.log(response.data);
  return await response.data;
};

export const createCustomer = async (
  newCustomer: CreateCustomerDto
): Promise<boolean> => {
  console.log(newCustomer);
  const response = await axios.post(
    `${path}/api/customers`,
    {
      companyName: newCustomer.companyName,
      projects: newCustomer.project,
      contacts: newCustomer.contact,
      tags: newCustomer.tag,
      address: newCustomer.address,
      phoneNumber: newCustomer.phoneNumber,
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
  const response = await axios.get(`${path}/api/customers/select`);
  return await response.data;
};
