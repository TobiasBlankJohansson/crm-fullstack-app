import { DisplayObject } from "../../display/Display";
import { Detail } from "../../display/DisplayItem";
import { ItemPropertyProp } from "../../display/ItemProperty";

type salesDisplayProp = {
  name: string;
  company: string;
  project: string;
  sale: string;
};

export const salesDisplay = (fetch: salesDisplayProp[]): DisplayObject[] => {
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
    };
  });
  return display;
};

const setDetails = (fetch: salesDisplayProp): Detail[] => {
  const sale: Detail = { title: "Sale", value: fetch.sale };
  return [sale];
};

const setItemProperty = (fetch: salesDisplayProp): ItemPropertyProp[] => {
  const name: ItemPropertyProp = { title: "Name", info: [fetch.name] };
  const company: ItemPropertyProp = { title: "Company", info: [fetch.company] };
  const project: ItemPropertyProp = {
    title: "Project",
    info: [fetch.project],
  };
  const sale: ItemPropertyProp = { title: "Sales", info: [fetch.sale] };
  return [name, company, project, sale];
};
