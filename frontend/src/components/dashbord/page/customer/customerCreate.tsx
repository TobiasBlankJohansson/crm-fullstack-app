import { ButtonCreate } from "../../create/ButtonCreate";
import { CreateObject } from "../../create/create";
import { InputCreate } from "../../create/InputCreate";

const id: string[] = [
  "CostumerCreate-1",
  "CostumerCreate-2",
  "CostumerCreate-3",
  "CostumerCreate-4",
  "CostumerCreate-5",
  "CostumerCreate-6",
  "CostumerCreate-7",
];

type CreateDto = {
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

export function costumerCreate(): CreateObject {
  const input: JSX.Element[] = inputs();
  return { input, onSubmit };
}

function inputs() {
  const company = <InputCreate id={id[0]} label="Company" type="text" />;
  const project = (
    <ButtonCreate
      id={id[1]}
      label={"Project"}
      click={function (
        setObject: React.Dispatch<React.SetStateAction<object[]>>
      ): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const contact = (
    <ButtonCreate
      id={id[2]}
      label={"Contact"}
      click={function (
        setObject: React.Dispatch<React.SetStateAction<object[]>>
      ): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const tag = (
    <ButtonCreate
      id={id[3]}
      label={"Tag"}
      click={(setObject) => {
        setObject((prev) => [...prev, { title: 10 }]);
      }}
    />
  );

  const address = <InputCreate id={id[4]} label="Address" type="text" />;
  const phone = <InputCreate id={id[5]} label="Phone" type="tel" />;
  const email = <InputCreate id={id[6]} label="Email" type="email" />;

  return [company, project, contact, tag, address, phone, email];
}

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const list = id.map((id) => document.getElementById(id).value);
  const save: CreateDto = {
    company: list[0],
    project: list[1],
    contact: list[2],
    tag: list[3],
    address: list[4],
    phone: list[5],
    email: list[6],
  };
  console.log(save);
}
