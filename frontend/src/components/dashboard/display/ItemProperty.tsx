export type ItemPropertyProp = {
  title: string;
  info: string[];
};

export function ItemProperty({ title, info }: ItemPropertyProp) {
  return (
    <li className="">
      <h2 className="text-xl font-bold">{title}:</h2>
      {info.map((info) => (
        <p className="pb-4">{info}</p>
      ))}
    </li>
  );
}
