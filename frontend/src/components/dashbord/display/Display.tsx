import { useState } from "react";
import { DisplayItem, Detail } from "./DisplayItem";
import { ItemProperty, ItemPropertyProp } from "./ItemProperty";

type DisplayProp = {
  title: string;
  displayItems: DisplayObject[];
};

export type DisplayObject = {
  title: string;
  count: string;
  detail: Detail[];
  itemProperty: ItemPropertyProp[];
};

export function Display({ title, displayItems }: DisplayProp) {
  const [selected, SetSelected] = useState<number>(0);

  return (
    <section className="pt-20 pb-10 pl-14 w-full h-full">
      <main className="flex h-full w-full justify-between">
        <section className="w-1/2 h-full pl-5 flex flex-col">
          <h2 className="text-4xl font-semibold">My {title}</h2>
          <h3 className="ml-4 mt-4 font-bold">Listed {title}</h3>
          <hr className="border-gray-400 border-b mt-1 w-48" />
          <div className="w-fit h-full overflow-y-auto no-scrollbar">
            <ol className="ml-4 h-0">
              {displayItems.map((item) => {
                return (
                  <DisplayItem
                    title={item.title}
                    detail={item.detail}
                    count={item.count}
                    selected={selected}
                    SetSelected={SetSelected}
                  />
                );
              })}
            </ol>
          </div>
        </section>

        {selected > 0 && (
          <section className="w-1/2 h-full mr-20 bg-white rounded-2xl">
            <div className="h-full w-full p-5 overflow-y-auto no-scrollbar">
              <ol className="h-0">
                {displayItems[selected - 1].itemProperty.map((item) => (
                  <ItemProperty title={item.title} info={item.info} />
                ))}
              </ol>
            </div>
          </section>
        )}
      </main>
    </section>
  );
}
