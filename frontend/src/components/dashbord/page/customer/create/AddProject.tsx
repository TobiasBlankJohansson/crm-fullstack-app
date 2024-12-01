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

  const render = async () => {
    return (
      <Button className="my-1" onClick={() => onClick(item)}>
        {item.title}
      </Button>
    );
  };
}
