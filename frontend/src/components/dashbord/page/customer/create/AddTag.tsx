import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function addTag(
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

  setTimeout(() => {
    (document.getElementById(modalId) as HTMLDialogElement)?.showModal();
  }, 0);
  
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
