import { Button } from "@/components/ui/button";
import { UUID } from "crypto";

export function addProject(
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
