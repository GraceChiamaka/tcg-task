import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  height: 48px;
  background: ${({ active }) => (active ? "#013022" : "#fff")};
  border: 1px solid #013022;
  padding: 0 24px;
  color: ${({ active }) => (active ? "#fff" : " #013022")};
  font-family: "AvenirRoman";
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #bcffeb;
    color: #013022;
    border: 1px solid #bcffeb;
    box-shadow: 0px 1px 6px 0px rgb(1, 48, 34, 0.26);
  }
`;
