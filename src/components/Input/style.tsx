import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    width: 100%;
    height: 44px;
    border-radius: 5px;
    border: 1px solid #667085;
    font-family: "Avenir";
    padding: 0 24px;
    outline: none;
    &:focus-visible {
      border: 1px solid #013022;
      box-shadow: 0px 1px 6px 0px rgb(1, 48, 34, 0.26);
    }
  }
`;
