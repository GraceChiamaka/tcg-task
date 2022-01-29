import styled from "styled-components";

export const ButtonContainer = styled.button<{
  variant: "outline" | "filled";
}>`
  height: 48px;
  background: ${({ variant }) => (variant === "filled" ? "#013022" : "#fff")};
  border: 1px solid #013022;
  padding: 0 24px;
  color: ${({ variant }) => (variant === "filled" ? "#fff" : "#013022")};
  font-family: "AvenirRoman";
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    height: 14px;
  }

  &:hover {
    background: ${({ variant }) =>
      variant === "outline" ? "#013022" : "#bcffeb"};
    color: ${({ variant }) => (variant === "outline" ? "#fff" : "#013022")};
    border: 1px solid #bcffeb;
    box-shadow: 0px 1px 6px 0px rgb(1, 48, 34, 0.26);
    svg {
      path {
        fill: #fff;
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
