import { createCostumer, CreateDto } from "@/api/costumer";
import { ButtonCreate } from "../../create/ButtonCreate";
import { CreateObject } from "../../create/Create";
import { InputCreate } from "../../create/InputCreate";
import { toast } from "@/hooks/use-toast";

const id: string[] = [
  "ProjectCreate-1",
  "ProjectCreate-2",
  "ProjectCreate-3",
  "ProjectCreate-4",
];

export function projectsCreate(): CreateObject {
  const input: JSX.Element[] = inputs();
  return { input, onSubmit };
}

function inputs() {
  const project = <InputCreate id={id[0]} label="Company" type="text" />;
  const duration = <InputCreate id={id[1]} label="Company" type="number" />;
  const costumers = (
    <ButtonCreate id={id[2]} label={"Contact"} click={addCostumers} />
  );
  const notes = <ButtonCreate id={id[3]} label={"Tag"} click={addNotes} />;
  return [project, duration, costumers, notes];
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
function addNotes(setObject: Dispatch<SetStateAction<object[]>>, setModal: Dispatch<SetStateAction<Element>>): void {
  throw new Error("Function not implemented.");
}

