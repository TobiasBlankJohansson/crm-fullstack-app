import { DisplayObject } from "../../display/Display";
import { Detail } from "../../display/DisplayItem";
import { ItemPropertyProp } from "../../display/ItemProperty";

type CustomerDisplayProp = {
  companyName: string;
  projects: string[];
  contacts: contact[];
  tags: string[];
  address: string;
  phoneNumber: string;
  email: string;
};

type contact = {
  name: string;
  phone: string;
  email: string;
};

export const customerDisplay = (
  fetch: CustomerDisplayProp[]
): DisplayObject[] => {
  let count = 0;
  const display: DisplayObject[] = fetch.map((fetch) => {
    count++;
    const details = setDetails(fetch);
    const itemPropertys = setItemProperty(fetch);
    return {
      title: fetch.companyName,
      count: count + "",
      detail: details,
      itemProperty: itemPropertys,
    };
  });
  return display;
};

const setDetails = (fetch: CustomerDisplayProp): Detail[] => {
  const tag: Detail = { title: "Tag", value: fetch.tags.join(", ") };
  const phone: Detail = { title: "Phone", value: fetch.phoneNumber };
  const email: Detail = { title: "Email", value: fetch.email };
  return [tag, phone, email];
};

const setItemProperty = (fetch: CustomerDisplayProp): ItemPropertyProp[] => {
  const company: ItemPropertyProp = {
    title: "Company",
    info: [fetch.companyName],
  };
  const project: ItemPropertyProp = {
    title: "Project",
    info: [fetch.projects.join(", ")],
  };
  const contact: ItemPropertyProp = {
    title: "Contacs",
    info: fetch.contacts.map(
      (person) =>
        `Name: ${person.name}, Phone: ${person.phone}, Email: ${person.email}`
    ),
  };
  const tag: ItemPropertyProp = { title: "Tag", info: [fetch.tags.join(", ")] };
  const address: ItemPropertyProp = { title: "Address", info: [fetch.address] };
  const phone: ItemPropertyProp = { title: "Phone", info: [fetch.phoneNumber] };
  const email: ItemPropertyProp = { title: "Email", info: [fetch.email] };
  return [company, project, contact, tag, address, phone, email];
};
