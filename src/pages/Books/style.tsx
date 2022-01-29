import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  height: 100vh;
  background: #013022;
  position: fixed;
  left: 0;
  @media screen and (max-width: 575px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`;
export const Logo = styled.div`
  padding: 36px 24px;
  h2 {
    color: #fff;
    font-family: "AvenirRoman";
  }
`;

export const PageContent = styled.div`
  width: 70%;
  padding: 80px 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  @media screen and (max-width: 575px) {
    position: relative;
    width: 100%;
    padding: 40px 40px;
  }
`;

export const Heading = styled.div`
  h3 {
    font-size: 24px;
    color: #101828;

    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-family: "Avenir";
    text-align: center;
    color: #667085;
  }
`;
export const Steps = styled.div`
  margin-top: 2rem;
  padding: 0 24px;
  @media screen and (max-width: 575px) {
    display: flex;
    overflow-x: scroll;
  }
`;

export const Step = styled.div<{ active: boolean; visited?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-bottom: 2rem;
  opacity: ${({ active, visited }) => (active ? "1" : visited ? "1" : "0.3")};

  span {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid #bcffeb;
    align-items: center;
    justify-content: center;
    color: ${({ visited }) => (visited ? "#013022" : "#bcffeb")};
    fnt-weight: 600;
    font-family: "AvenirRoman";
    font-size: 16px;
    background: ${({ visited }) => (visited ? "#bcffed" : "#013022")};
  }
  p {
    color: #bcffeb;
    font-family: "AvenirRoman";
  }
  &:after {
    content: "";
    height: 93%;
    border: 1px solid #bcffeb;
    position: absolute;
    left: 16px;
    top: 32px;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  @media screen and (max-width: 575px) {
    flex: 1;
    min-width: 200px;
    &:after {
      width: 90%;
      left: 0;
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  margin-top: 3rem;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
