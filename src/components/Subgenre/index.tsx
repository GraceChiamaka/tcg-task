import Data from "../../data/index.json";
import { DisplayContainer, ButtonContainer } from "../../container";
import { AppContext } from "../../context/AppContext";
import { useContext, useState, useEffect } from "react";
import { Card, Button } from "../index";
import { ReactComponent as BackArrowIcon } from "../../assets/images/back-arrow.svg";

export const Subgenre = () => {
  const {
    selectedGenre,
    addStep,
    updateSubgenre,
    previousStep,
    nextStep,
    selectedSubgenre,
  } = useContext(AppContext);
  const [subgenresData, setSubgenresData] = useState<any[]>([]);

  useEffect(() => {
    getSubgenres();

    // eslint-disable-next-line
  }, []);

  const getSubgenres = () => {
    const res = Data.genres.filter((genre) => genre.id === selectedGenre);
    if (res) {
      setSubgenresData(res[0].subgenres);
    }
  };

  const saveSubgenre = (data: any) => {
    updateSubgenre(data);
  };

  return (
    <>
      <DisplayContainer>
        {subgenresData.map((item) => (
          <Card
            text={item.name}
            active={false}
            key={item.id}
            onClick={() => saveSubgenre(item)}
          ></Card>
        ))}
        <Button text="Add New" variant="outline" onClick={() => addStep()} />
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
          disabled={selectedSubgenre === null}
        ></Button>
      </ButtonContainer>
    </>
  );
};
