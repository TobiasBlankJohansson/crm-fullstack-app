import { DisplayItemProp, DisplayItem } from "./DisplayItem";
import { ItemProperty, ItemPropertyProp } from "./ItemProperty";

type DisplayProp = {
  title: string;
  displayItems: DisplayItemProp[];
  itemProperty: ItemPropertyProp[];
};

export function Display({ title, displayItems, itemProperty }: DisplayProp) {
  return (
    <section className="pt-20 pl-14 bg-slate-300 w-full h-full">
      <main className="flex h-full">
        <section className="w-1/2 pl-5">
          <h2 className="text-4xl">My {title}</h2>
          <h3 className="ml-4 mt-8 font-bold">Listed {title}</h3>
          <hr className="border-gray-400 border-b mt-1 w-48" />
          <ol className="ml-4">
            {displayItems.map((item) => {
              return (
                <DisplayItem
                  title={item.title}
                  detail={item.detail}
                  count={item.count}
                />
              );
            })}
          </ol>
        </section>
        <section className="w-1/3 mr-20 h-4/5 bg-white rounded-2xl">
          <ol className="m-5">
            {itemProperty.map((item) => (
              <ItemProperty title={item.title} info={item.info} />
            ))}
          </ol>
        </section>
      </main>
    </section>
  );
}
