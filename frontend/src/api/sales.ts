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

export const deleteSale = async (saleId: UUID): Promise<boolean> => {
  const response = await axios.delete(`${path}/api/sales/${saleId}`);
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
};