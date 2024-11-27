import { DisplayObject } from "../../display/Display";
import { Detail } from "../../display/DisplayItem";
import { ItemPropertyProp } from "../../display/ItemProperty";

type CostumerDisplayProp = {
  company: string;
  project: string[];
  contact: contact[];
  tag: string[];
  address: string;
  phone: string;
  email: string;
};

type contact = {
  name: string;
  phone: string;
  email: string;
};

export const costumerDisplay = (
  fetch: CostumerDisplayProp[]
): DisplayObject[] => {
  let count = 0;
  const display: DisplayObject[] = fetch.map((fetch) => {
    count++;
    const details = setDetails(fetch);
    const itemPropertys = setItemProperty(fetch);
    return {
      title: fetch.company,
      count: count + "",
      detail: details,
      itemProperty: itemPropertys,
    };
  });
  return display;
};

const setDetails = (fetch: CostumerDisplayProp): Detail[] => {
  const tag: Detail = { title: "Tag", value: fetch.tag.join(", ") };
  const phone: Detail = { title: "Phone", value: fetch.phone };
  const email: Detail = { title: "Email", value: fetch.email };
  return [tag, phone, email];
};

const setItemProperty = (fetch: CostumerDisplayProp): ItemPropertyProp[] => {
  const company: ItemPropertyProp = { title: "Company", info: [fetch.company] };
  const project: ItemPropertyProp = {
    title: "Project",
    info: [fetch.project.join(", ")],
  };
  const contact: ItemPropertyProp = {
    title: "Contacs",
    info: fetch.contact.map(
      (person) =>
        `Name: ${person.name}, Phone: ${person.phone}, Email: ${person.email}`
    ),
  };
  const tag: ItemPropertyProp = { title: "Tag", info: [fetch.tag.join(", ")] };
  const address: ItemPropertyProp = { title: "Address", info: [fetch.address] };
  const phone: ItemPropertyProp = { title: "Phone", info: [fetch.phone] };
  const email: ItemPropertyProp = { title: "Email", info: [fetch.email] };
  return [company, project, contact, tag, address, phone, email];
};
