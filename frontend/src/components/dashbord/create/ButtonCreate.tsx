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
  const [objects, setObject] = useState<object[]>([{ title: 10 }]);
  const [modal, setModal] = useState<JSX.Element>(<></>);

  return (
    <>
      <label className="flex items-center">{label}</label>
      <div className="flex p-2">
        <input
          className="hidden"
          id={id}
          value={JSON.stringify(objects)}
        ></input>
        {objects?.map((obj) => (
          <label className="mr-2 bg-gray rounded-full px-4 flex justify-center items-center">
            {obj.title}
          </label>
        ))}
        <button
          className="bg-gray rounded-full px-2 flex justify-center items-center"
          onClick={() => click(setObject, setModal)}
        >
          +
        </button>
        {modal}
      </div>
    </>
  );
}
