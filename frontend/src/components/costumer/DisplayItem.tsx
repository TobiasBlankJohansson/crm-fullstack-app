export type DisplayItemProp = {
  title: string;
  count: string;
  itemProperty: ItemProperty[];
  detail: Detail[];
};

export type Detail = {
  title: string;
  value: string;
};

export function DisplayItem({
  title,
  count,
  itemProperty,
  detail,
}: DisplayItemProp) {
  return (
    <li>
      <h4>
        {count}. {title}
      </h4>
      {detail.map((detail) => {
        return (
          <p>
            {detail.title}. {detail.value}
          </p>
        );
      })}
    </li>
  );
}
