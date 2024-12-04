import { DisplayObject } from "../../display/Display";
import { Detail } from "../../display/DisplayItem";
import { ItemPropertyProp } from "../../display/ItemProperty";

type ProjectDisplayProp = {
  name: string;
  duration: string;
  customers: string[];
  notes: string[];
  sales: sales[];
};

type sales = {
  name: string;
  sale: string;
};

export const projectDisplay = (
  fetch: ProjectDisplayProp[]
): DisplayObject[] => {
  let count = 0;
  const display: DisplayObject[] = fetch.map((fetch) => {
    count++;
    const details = setDetails(fetch);
    const itemPropertys = setItemProperty(fetch);
    return {
      title: fetch.name,
      count: count + "",
      detail: details,
      itemProperty: itemPropertys,
      type: "project"
    };
  });
  return display;
};

const setDetails = (fetch: ProjectDisplayProp): Detail[] => {
  const duration: Detail = { title: "Sale", value: fetch.duration };
  return [duration];
};

const setItemProperty = (fetch: ProjectDisplayProp): ItemPropertyProp[] => {
  const name: ItemPropertyProp = { title: "Name", info: [fetch.name] };
  const duration: ItemPropertyProp = {
    title: "Duration",
    info: [fetch.duration],
  };
  const customer: ItemPropertyProp = {
    title: "customers",
    info: fetch.customers,
  };
  const notes: ItemPropertyProp = { title: "Notes", info: fetch.notes };
  const sales: ItemPropertyProp = {
    title: "Sales",
    info: fetch.sales.map((sale) => `Name: ${sale.name}, Sale: ${sale.sale}`),
  };
  return [name, duration, customer, notes, sales];
};
