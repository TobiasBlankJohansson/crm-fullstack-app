import { ButtonCreate } from "../../create/ButtonCreate";
import { CreateObject } from "../../create/Create";
import { InputCreate } from "../../create/InputCreate";
import { toast } from "@/hooks/use-toast";
import { addCustomers } from "./create/addCustomers";
import { addNotes } from "./create/addNotes";
import { createProject, CreateProjectDto } from "@/api/project";

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
  const project = <InputCreate id={id[0]} label="Name" type="text" />;
  const duration = <InputCreate id={id[1]} label="Duration" type="number" />;
  const customers = (
    <ButtonCreate id={id[2]} label={"Customer"} click={addCustomers} />
  );
  const notes = <ButtonCreate id={id[3]} label={"Notes"} click={addNotes} />;
  return [project, duration, customers, notes];
}

function onSubmit(
  e: React.FormEvent<HTMLFormElement>,
  setCreateNew: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  const list = id.map(
    (id) => (document.getElementById(id) as HTMLInputElement).value
  );
  const save: CreateProjectDto = {
    name: list[0],
    duration: list[1],
    customers: JSON.parse(list[2]).map((customer: customer) => customer.id),
    notes: JSON.parse(list[3]).map((note: notes) => note.title),
  };

  try {
    createProject(save);
    toast({
      description: "Created new project",
    });
    setCreateNew(() => false);
  } catch {
    toast({
      description: "Error, try again",
    });
  }

  type customer = {
    title: string;
    id: string;
  };

  type notes = {
    title: string;
  };
}
