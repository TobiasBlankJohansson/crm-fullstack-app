import { getCustomerSelection } from "@/api/costumer";
import { Button } from "@/components/ui/button";
import { UUID } from "crypto";

export type CostomerInfo = {
  title: string;
  id: UUID;
};

export function addCustomers(
  setObject: React.Dispatch<React.SetStateAction<object[]>>,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  const modalId = "addProjectCustomer";

  let items: CostomerInfo[] = [];

  const fetchItems = async () => {
    items = await getCustomerSelection();
    renderModal();
  };

  const onClick = (item: CostomerInfo) => {
    setObject((prev) => [...prev, { title: item.title, id: item.id }]);
  };

  const renderModal = () => {
    setModal(() => (
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Add Customer</h3>
          <form method="dialog" className="grid">
            {items.map((item) => (
              <Button
                key={item.id}
                className="my-1"
                onClick={() => onClick(item)}
              >
                {item.title}
              </Button>
            ))}
          </form>
        </div>
      </dialog>
    ));

    setTimeout(() => {
      (document.getElementById(modalId) as HTMLDialogElement)?.showModal();
    }, 0);
  };

  fetchItems();
}
