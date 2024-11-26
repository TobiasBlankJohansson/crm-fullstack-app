export type ItemPropertyProp = {
  title: string;
  info: string[];
};

export function ItemProperty({ title, info }: ItemPropertyProp) {
  return (
    <li className="mt-4">
      <h2 className="text-xl font-bold">{title}:</h2>
      {info.map((info) => (
        <p className="mt-2">{info}</p>
      ))}
    </li>
  );
}
