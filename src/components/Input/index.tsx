import { InputContainer } from "./style";

type InputProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  onChange?: (ev: any) => void;
  required?: boolean;
  value?: string | number;
};

export const Input = ({
  placeholder = "",
  type = "text",
  name = "",
  id = "",
  onChange,
  required = false,
  value,
}: InputProps) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
      />
    </InputContainer>
  );
};
