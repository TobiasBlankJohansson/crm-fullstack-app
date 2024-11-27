import { DisplayObject } from "../display/Display";
import { Detail } from "../display/DisplayItem";

type CostumerDisplayProp = {
  company: string;
  project: string[];
  contact: string[];
  tag: string[];
  adress: string;
  phone: string;
  email: string;
};

export const costumerDisplay = (
  fetch: CostumerDisplayProp[]
): DisplayObject[] => {
  const display: DisplayObject[] = fetch.map((fetch) => {
    const details = setDetails(fetch);
    
  });
  return;
};

const setDetails = (fetch: CostumerDisplayProp): Detail[] => {
  const tag: Detail = { title: "Tag", value: fetch.tag.join(",") };
  const phone: Detail = { title: "Phone", value: fetch.phone };
  const email: Detail = { title: "Email", value: fetch.email };
  return [tag, phone, email];
};
