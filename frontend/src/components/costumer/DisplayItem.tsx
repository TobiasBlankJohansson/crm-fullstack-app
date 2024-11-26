export type DisplayItemProp = {
  title: string;
  count: string;
  detail: Detail[];
};

export type Detail = {
  title: string;
  value: string;
};

export function DisplayItem({
  title,
  count,
  detail,
}: DisplayItemProp) {
  return (
    <li>
      <h4 className="mt-4 text-blue-700 font-bold">
        {count}. {title}
      </h4>
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
