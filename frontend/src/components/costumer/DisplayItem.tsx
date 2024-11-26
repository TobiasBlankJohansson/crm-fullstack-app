export type DisplayItemProp = {
  title: string;
  count: string;
  detail: Detail[];
  selected: number;
  SetSelected: React.Dispatch<React.SetStateAction<number>>;
};

export type Detail = {
  title: string;
  value: string;
};

export function DisplayItem({
  title,
  count,
  detail,
  selected,
  SetSelected,
}: DisplayItemProp) {
  return (
    <li>
      <button
        onClick={() =>
          SetSelected(() => {
            const number = Number(count);
            return number != selected ? number : 0;
          })
        }
        className="mt-4 text-blue-700 font-bold"
      >
        {count}. {title}
      </button>
      {detail.map((detail) => {
        return (
          <p className="ml-4">
            {detail.title}: {detail.value}
          </p>
        );
      })}
    </li>
  );
}
