import { Button } from "@/components/ui/button";

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
      <Button
        variant="link"
        onClick={() =>
          SetSelected(() => {
            const number = Number(count);
            return number != selected ? number : 0;
          })
        }
        className="text-blue-700 font-bold pb-0 pl-0"
      >
        {count}. {title}
      </Button>
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
