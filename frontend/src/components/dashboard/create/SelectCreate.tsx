import { useState } from "react";

type PropButtonCreate = {
  id: string;
  label: string;
  click: (
    setObject: React.Dispatch<React.SetStateAction<object>>,
    setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
  ) => void;
};

export function SelectCreate({ id, label, click }: PropButtonCreate) {
  const [objects, setObject] = useState<object>({ title: "select" });
  const [modal, setModal] = useState<JSX.Element>(<></>);

  return (
    <>
      <label className="flex items-center">{label}</label>
      <div className="flex p-2">
        <input className="hidden" id={id} value={objects.id}></input>
        <button
          className="bg-gray rounded-full px-2 flex justify-center items-center"
          type="button"
          onClick={() => click(setObject, setModal)}
        >
          {objects.title}
        </button>
        {modal}
      </div>
    </>
  );
}
