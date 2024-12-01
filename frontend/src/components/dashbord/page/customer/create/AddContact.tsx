import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function addContact(
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
  setTimeout(() => {
  (document.getElementById(modalId) as HTMLDialogElement)?.showModal();
  },0);
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
