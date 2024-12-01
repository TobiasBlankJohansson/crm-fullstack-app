import { createCostumer, CreateDto } from "@/api/costumer";
import { ButtonCreate } from "../../create/ButtonCreate";
import { CreateObject } from "../../create/Create";
import { InputCreate } from "../../create/InputCreate";
import { addContact } from "./create/AddContact";
import { addProject } from "./create/AddProject";
import { addTag } from "./create/AddTag";
import { toast } from "@/hooks/use-toast";

const id: string[] = [
  "CostumerCreate-1",
  "CostumerCreate-2",
  "CostumerCreate-3",
  "CostumerCreate-4",
  "CostumerCreate-5",
  "CostumerCreate-6",
  "CostumerCreate-7",
];

export function costumerCreate(): CreateObject {
  const input: JSX.Element[] = inputs();
  return { input, onSubmit };
}

function inputs() {
  const company = <InputCreate id={id[0]} label="Company" type="text" />;
  const project = (
    <ButtonCreate id={id[1]} label={"Project"} click={addProject} />
  );
  const contact = (
    <ButtonCreate id={id[2]} label={"Contact"} click={addContact} />
  );
  const tag = <ButtonCreate id={id[3]} label={"Tag"} click={addTag} />;

  const address = <InputCreate id={id[4]} label="Address" type="text" />;
  const phone = <InputCreate id={id[5]} label="Phone" type="tel" />;
  const email = <InputCreate id={id[6]} label="Email" type="email" />;

  return [company, project, contact, tag, address, phone, email];
}

function onSubmit(
  e: React.FormEvent<HTMLFormElement>,
  setCreateNew: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  const list = id.map(
    (id) => (document.getElementById(id) as HTMLInputElement).value
  );
  const save: CreateDto = {
    company: list[0],
    project: JSON.parse(list[1]).map((project: project) => project.id),
    contact: JSON.parse(list[2]).map((contact: contact) => {
      return {
        name: contact.title,
        phone: contact.phone,
        email: contact.email,
      };
    }),
    tag: JSON.parse(list[3]).map((tag: tag) => tag.title),
    address: list[4],
    phone: list[5],
    email: list[6],
  };

  try {
    createCostumer(save);
    toast({
      description: "Created new costumer",
    });
    setCreateNew(() => false);
  } catch {
    toast({
      description: "Error, try again",
    });
  }

  type project = {
    title: string;
    id: string;
  };

  type contact = {
    title: string;
    phone: string;
    email: string;
  };

  type tag = {
    title: string;
  };
}
