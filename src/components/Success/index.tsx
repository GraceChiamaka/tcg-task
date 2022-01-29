import { Container, Icon } from "./style";
import { Button } from "../Button";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const SuccessPage = () => {
  const { reset } = useContext(AppContext);
  return (
    <Container>
      <Icon>
        <CheckIcon />
      </Icon>
      <h3>Book added succesfully</h3>
      <Button
        text="Add another book"
        variant="filled"
        onClick={() => reset()}
      />
    </Container>
  );
};
