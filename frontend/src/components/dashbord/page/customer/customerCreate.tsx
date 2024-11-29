import { Input } from "@/components/ui/input";
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
    <ButtonCreate id={id[2]} label={"Contact"} click={addContact} />
  );
  const tag = (
    <ButtonCreate id={id[3]} label={"Tag"} click={addTag}></ButtonCreate>
  );

  const address = <InputCreate id={id[4]} label="Address" type="text" />;
  const phone = <InputCreate id={id[5]} label="Phone" type="tel" />;
  const email = <InputCreate id={id[6]} label="Email" type="email" />;

  return [company, project, contact, tag, address, phone, email];
}

function addTag(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addTagCustomer";
  setModal(() => (
    <dialog id={modalId} className="modal">
      <div className="modal-box  bg-white">
        <h3 className="font-bold text-lg">Add tag</h3>
        <form method="dialog" className="">
          <label>Tag</label>
          <Input id={modalId+"Tag"} type="text"></Input>
          <button 
          className="btn mt-3" 
          onClick={()=>setObject((prev=>[...prev,{ title: {document.getElementById(modalId+"Tag").value} }]))} >
            Close
          </button>
        </form>
      </div>
    </dialog>
  ));
  document.getElementById(modalId).showModal();
}
function addContact(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addContactCustomer";
  setModal(() => (
    <dialog id={modalId} className="modal">
      <div className="modal-box  bg-white">
        <h3 className="font-bold text-lg">Add tag</h3>
        <form method="dialog">
          <label>Name</label>
          <Input type="text"></Input>
          <label>Phone</label>
          <Input type="tel"></Input>
          <label>Email</label>
          <Input type="email"></Input>
          <button className="btn mt-3" onClick={() => {}}>
            Close
          </button>
        </form>
      </div>
    </dialog>
  ));
  document.getElementById(modalId).showModal();
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
