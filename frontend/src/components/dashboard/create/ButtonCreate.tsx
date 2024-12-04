import { useState } from "react";

type PropButtonCreate = {
  id: string;
  label: string;
  click: (
    setObject: React.Dispatch<React.SetStateAction<object[]>>,
    setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
  ) => void;
};

export function ButtonCreate({ id, label, click }: PropButtonCreate) {
  const [objects, setObject] = useState<object[]>([]);
  const [modal, setModal] = useState<JSX.Element>(<></>);

  return (
    <>
      <label className="flex items-center text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center gap-2">
        {/* Hidden input for storing object values */}
        <input className="hidden" id={id} value={JSON.stringify(objects)} />

        {/* Render objects as labels */}
        {objects?.map((obj, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-2 py-1 text-sm font-medium text-gray-700"
          >
            {obj.title}
          </span>
        ))}

        {/* Circular "+" Button */}
        <button
          className="bg-black/70 text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold hover:bg-black/90"
          onClick={() => click(setObject, setModal)}
        >
          +
        </button>
        {modal}
      </div>
    </>
  );
}