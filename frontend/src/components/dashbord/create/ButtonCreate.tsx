import { useState } from "react";

type PropButtonCreate = {
  id: string;
  label: string;
  click: (setObject: React.Dispatch<React.SetStateAction<object[]>>) => void;
};

export function ButtonCreate({ id, label, click }: PropButtonCreate) {
  const [objects, setObject] = useState<object[]>([{ title: 10 }]);

  return (
    <>
      <label>{label}</label>
      <div id={id} value={objects} className="flex">
        {objects?.map((obj) => (
          <label className="mr-2 bg-gray rounded-full px-4 flex justify-center items-center">
            {obj.title}
          </label>
        ))}
        <button
          className="bg-gray rounded-full px-2 flex justify-center items-center"
          onClick={() => click(setObject)}
        >
          +
        </button>
      </div>
    </>
  );
}
