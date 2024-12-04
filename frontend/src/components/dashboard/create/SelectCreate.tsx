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
      <label className="flex items-center text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center gap-2">
        {/* Hidden input for storing the selected value */}
        <input className="hidden" id={id} value={(objects as any).id}></input>

        {/* Select Button with black background and transparency */}
        <button
          className="bg-black bg-opacity-60 text-white rounded-full h-8 px-4 flex items-center justify-center text-sm font-medium hover:bg-opacity-80"
          type="button"
          onClick={() => click(setObject, setModal)}
        >
          {(objects as any).title}
        </button>
        {modal}
      </div>
    </>
  );
}
