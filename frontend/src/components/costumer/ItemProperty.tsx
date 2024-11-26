export type ItemPropertyProp = {
  title: string;
  info: string[];
};

export function ItemProperty({ title, info }: ItemPropertyProp) {
  return (
    <li>
      <h2>{title}:</h2>
      {info.map((info) => (
        <p>{info}</p>
      ))}
    </li>
  );
}
