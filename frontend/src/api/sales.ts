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

export type UpdateSaleDto = {
  id: string;
  name: string;
  company: string;
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
  updatedSale: UpdateSaleDto
): Promise<saleObject> => {
  console.log("upd  : " + updatedSale.sale);

  const response = await fetch(`${path}/api/sales/${updatedSale.id}`, {
    method: "PUT",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: updatedSale.name,
      customer: updatedSale.company,
      project: updatedSale.project,
      sale: Number(updatedSale.sale),
    }),
  });

  if (!response.ok) {
    throw new Error(`Unexpected response status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
};

export const deleteSale = async (saleId: UUID): Promise<boolean> => {
  const response = await axios.delete(`${path}/api/sales/${saleId}`);
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
};
