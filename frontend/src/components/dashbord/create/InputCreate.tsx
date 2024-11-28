import { Input } from "@/components/ui/input";

type InputCreateProp = {
  label: string;
  type: "text" | "email" | "tel";
  id: string;
};

export function InputCreate({ id, label, type }: InputCreateProp) {
  return (
    <>
      <label className="flex items-center">{label}</label>
      <div className="flex items-center">
        <Input type={type} id={id}></Input>
      </div>
    </>
  );
}
