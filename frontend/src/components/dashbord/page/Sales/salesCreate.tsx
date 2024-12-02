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
  const name = <InputCreate id={id[0]} label="Name" type="text" />;
  const company = (
    <ButtonCreate id={id[2]} label={"Project"} click={addCustomers} />
  );
  const project = (
    <ButtonCreate id={id[2]} label={"Project"} click={addCustomers} />
  );
  const sale = <InputCreate id={id[1]} label="Sale" type="number" />;
  return [name, company, project, sale];
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
    project: list[0],
    duration: list[1] + " month",
    costumers: JSON.parse(list[2]).map((costumer: costumer) => costumer.id),
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

  type costumer = {
    title: string;
    id: string;
  };

  type notes = {
    title: string;
  };
}
