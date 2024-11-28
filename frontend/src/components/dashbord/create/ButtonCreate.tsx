type PropButtonCreate = {
  label: string;
  onClick: () => void;
};

export function ButtonCreate({ label, action }: PropButtonCreate) {
  return (
    <>
      <label>{label}</label>
      <button onClick={() => action()}>+</button>
    </>
  );
}
