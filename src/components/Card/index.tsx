import { Container } from "./style";

type CardProps = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export const Card = ({ text, active, onClick }: CardProps) => {
  return (
    <Container active={active} onClick={onClick}>
      {text}
    </Container>
  );
};
