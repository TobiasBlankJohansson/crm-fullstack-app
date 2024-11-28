type InputCreateProp = {
  label: string;
  type: "text" | "email" | "tel";
  id: string;
};

export function InputCreate({ id, label, type }: InputCreateProp) {
  return (
    <>
      <label>{label}</label>
      <input type={type} id={id}></input>
    </>
  );
}
