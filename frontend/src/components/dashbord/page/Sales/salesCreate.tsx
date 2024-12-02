import { CreateObject } from "../../create/Create";
import { InputCreate } from "../../create/InputCreate";
import { toast } from "@/hooks/use-toast";
import { SelectCreate } from "../../create/SelectCreate";
import { createSale, CreateSalesDto } from "@/api/sales";
import { selectCompany } from "./create/selectCompany";

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
    <SelectCreate id={id[2]} label={"Company"} click={selectCompany} />
  );
  const project = (
    <SelectCreate id={id[2]} label={"Project"} click={selectProject} />
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
  const save: CreateSalesDto = {
    name: list[0],
    company: JSON.parse(list[1]).map((company: costumer) => company.id),
    project: JSON.parse(list[2]).map((project: project) => project.id),
    sale: list[3],
  };

  try {
    createSale(save);
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

  type project = {
    title: string;
    id: string;
  };
}
