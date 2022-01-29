import styled from "styled-components";
export const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 575px) {
    gap: 10px;
  }
`;

export const Checkbox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 30px;
    height: 30px;
    border: 0.3px solid #667085;
  }
  input:checked {
    border: 1px solid #013022;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 2rem;
`;
