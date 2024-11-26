type DisplayItem = {
  title: string;
  count: string;
  itemProperty: ItemProperty[];
  Detail: Detail[];
};

type Detail = {
  title: string;
  value: string;
};

export function DisplayItem({
  title,
  count,
  itemProperty,
  Detail,
}: DisplayItem) {
  return (
    <li>
      <h4>
        {count}. {title}
      </h4>
      {Detail.map((detail) => {
        return (
          <p>
            {detail.title}. {detail.value}
          </p>
        );
      })}
    </li>
  );
}
