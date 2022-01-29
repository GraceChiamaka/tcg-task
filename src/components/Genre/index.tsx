import Data from "../../data/index.json";
import { DisplayContainer, ButtonContainer } from "../../container";
import { Card, Button } from "../index";
import { AppContext } from "../../context/AppContext";
import { ReactComponent as BackArrowIcon } from "../../assets/images/back-arrow.svg";
import { useContext } from "react";

export const Genre = () => {
  const { selectedGenre, updateGenre, previousStep, nextStep } =
    useContext(AppContext);
  return (
    <>
      <DisplayContainer>
        {Data.genres.map(({ id, name }) => {
          return (
            <Card
              key={id}
              text={name}
              active={selectedGenre === id}
              onClick={() => updateGenre(id)}
            ></Card>
          );
        })}
      </DisplayContainer>
      <ButtonContainer>
        <Button
          variant="outline"
          text={
            <>
              <BackArrowIcon /> back
            </>
          }
          onClick={previousStep}
        ></Button>
        <Button
          variant="filled"
          text="next"
          onClick={nextStep}
          disabled={selectedGenre === null}
        ></Button>
      </ButtonContainer>
    </>
  );
};
