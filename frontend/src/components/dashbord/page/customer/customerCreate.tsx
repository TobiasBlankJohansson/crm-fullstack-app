import { Input } from "@/components/ui/input";
import { ButtonCreate } from "../../create/ButtonCreate";
import { CreateObject } from "../../create/create";
import { InputCreate } from "../../create/InputCreate";
import { Button } from "@/components/ui/button";
import { UUID } from "crypto";

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

function addProject(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addProjectCustomer";
  setModal(() => (
    <dialog id={modalId} className="modal">
      <div className="modal-box  bg-white">
        <h3 className="font-bold text-lg">Add project</h3>
        <form method="dialog" className="grid">
          {render.map((item) => (
            <Button className="my-1" onClick={() => onClick(item)}>
              {item.title}
            </Button>
          ))}
        </form>
      </div>
    </dialog>
  ));
  (document.getElementById(modalId) as HTMLDialogElement)?.showModal();

  function onClick(item: projectInfo) {
    setObject((prev) => [...prev, { title: item.title, id: item.id }]);
  }

  type projectInfo = {
    title: string;
    id: UUID;
  };

  const render: projectInfo[] = [
    { title: "First Item", id: "c1d4a17e-8f04-46a7-9c4f-05a173c6b9c3" },
    { title: "Second Item", id: "f71e7e85-1d68-41c6-bf7c-452e1e78b9d7" },
    { title: "Third Item", id: "fb98c62b-a31a-4e4d-8b18-b0c5f0c8a5b2" },
    { title: "Fourth Item", id: "e2be2a5a-9b8d-4b7a-bca5-d8a66af4d7ea" },
  ];
}

function addContact(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addContactCustomer";
  setModal(() => (
    <dialog id={modalId} className="modal">
      <div className="modal-box  bg-white">
        <h3 className="font-bold text-lg">Add contact</h3>
        <form method="dialog">
          <label>Name</label>
          <Input id={modalId + "Name"} type="text"></Input>
          <label>Phone</label>
          <Input id={modalId + "Phone"} type="tel"></Input>
          <label>Email</label>
          <Input id={modalId + "Email"} type="email"></Input>
          <Button className="mt-2" onClick={onClick}>
            Create
          </Button>
        </form>
      </div>
    </dialog>
  ));
  (document.getElementById(modalId) as HTMLDialogElement)?.showModal();

  function onClick() {
    const name = (document.getElementById(modalId + "Name") as HTMLInputElement)
      .value;
    const phone = (
      document.getElementById(modalId + "Phone") as HTMLInputElement
    ).value;
    const email = (
      document.getElementById(modalId + "Email") as HTMLInputElement
    ).value;

    setObject((prev) => [...prev, { title: name, phone: phone, email: email }]);
  }
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
          <Input id={modalId + "Tag"} type="text"></Input>
          <Button className="mt-2" onClick={onClick}>
            Create
          </Button>
        </form>
      </div>
    </dialog>
  ));

  (document.getElementById(modalId) as HTMLDialogElement).showModal();

  function onClick() {
    setObject((prev) => [
      ...prev,
      {
        title: (document.getElementById(modalId + "Tag") as HTMLInputElement)
          .value,
      },
    ]);
  }
}

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  console.log(save);

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
