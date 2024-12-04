import { CreateObject } from "../../create/Create";
import { InputCreate } from "../../create/InputCreate";
import { toast } from "@/hooks/use-toast";
import { SelectCreate } from "../../create/SelectCreate";
import { createSale, CreateSalesDto } from "@/api/sales";
import { selectCompany } from "./create/selectCompany";
import { selectProject } from "./create/selectProject";

const id: string[] = [
  "ProjectCreate-1",
  "ProjectCreate-2",
  "ProjectCreate-3",
  "ProjectCreate-4",
];

export function salesCreate(): CreateObject {
  const input: JSX.Element[] = inputs();
  return { input, onSubmit };
}

function inputs() {
  const name = <InputCreate id={id[0]} label="Name" type="text" />;
  const company = (
    <SelectCreate id={id[1]} label={"Company"} click={selectCompany} />
  );
  const project = (
    <SelectCreate id={id[2]} label={"Project"} click={selectProject} />
  );
  const sale = <InputCreate id={id[3]} label="Sale" type="number" />;
  return [name, company, project, sale];
}

async function onSubmit(
  e: React.FormEvent<HTMLFormElement>,
  setCreateNew: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  const list = id.map(
    (id) => (document.getElementById(id) as HTMLInputElement).value
  );
  const save: CreateSalesDto = {
    name: list[0],
    customer: list[1],
    project: list[2],
    sale: list[3],
  };

  try {
    await createSale(save);
    toast({
      description: "Created new project",
    });
    setCreateNew(() => false);
  } catch {
    toast({
      description: "Error, try again",
    });
  }
}
