import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function addNotes(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addNoteProject";
  setModal(() => (
    <dialog id={modalId} className="modal">
      <div className="modal-box  bg-white">
        <h3 className="font-bold text-lg">Add note</h3>
        <form method="dialog" className="">
          <label>Note</label>
          <Input id={modalId + "Note"} type="text"></Input>
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
        title: (document.getElementById(modalId + "Note") as HTMLInputElement)
          .value,
      },
    ]);
  }
}
