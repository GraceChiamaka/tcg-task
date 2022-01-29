import { ReactNode } from "react";
import { ButtonContainer } from "./style";

type ButtonProps = {
  text: string | ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant: "outline" | "filled";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  text,
  onClick,
  variant = "outline",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {text}
    </ButtonContainer>
  );
};
