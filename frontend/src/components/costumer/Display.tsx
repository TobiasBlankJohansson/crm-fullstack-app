import { DisplayItemProp, DisplayItem } from "./DisplayItem";

type DisplayProp = {
  title: string;
  displayItems: DisplayItemProp[];
};

export function Display({ title, displayItems }: DisplayProp) {
  return (
    <section className="pt-20 pl-14 bg-slate-300 w-full h-full">
      <h2 className="text-4xl">My {title}</h2>
      <main>
        <h3 className="ml-4 mt-8 font-bold">Listed {title}</h3>
        <hr className="border-gray-400 border-b mt-1 w-40"/>
        <ol className="ml-4">
          {displayItems.map((item) => {
            return (
              <DisplayItem
                title={item.title}
                detail={item.detail}
                count={item.count}
                itemProperty={item.itemProperty}
              />
            );
          })}
        </ol>
      </main>
    </section>
  );
}
