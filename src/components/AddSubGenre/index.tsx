import { Input, Button } from "..";
import { Checkbox, ButtonContainer } from "../../container";
import { useState, useContext } from "react";
import Data from "../../data/index.json";
import { AppContext } from "../../context/AppContext";
import { ReactComponent as BackArrowIcon } from "../../assets/images/back-arrow.svg";

export const AddSubgenre = () => {
  const { previousStep, updateSubgenre, selectedGenre } =
    useContext(AppContext);

  const [newSubgenre, setNewSubgenre] = useState({
    name: "",
    isDescriptionRequired: false,
    id: "",
  });

  const handleChange = (ev: any) => {
    const { name, value, checked } = ev.target;
    setNewSubgenre({
      ...newSubgenre,
      [name]: value,
      isDescriptionRequired: checked,
    });
  };

  const resetForm = () => {
    setNewSubgenre({ name: "", isDescriptionRequired: false, id: "" });
  };

  const getGenreId = () =>
    Data.genres.filter((genre) => genre.id === selectedGenre);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    const results = getGenreId();

    if (results && results.length) {
      const payload = { ...newSubgenre, id: results[0].subgenres.length + 1 };
      updateSubgenre(payload);
      resetForm();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Add new subgenre"
          name="name"
          required={true}
          onChange={handleChange}
          value={newSubgenre.name}
        />
        <Checkbox>
          <input
            type="checkbox"
            name="isDescriptionRequired"
            onChange={handleChange}
            checked={newSubgenre.isDescriptionRequired}
          />
          <p>Description is required for this genre </p>
        </Checkbox>
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
          <Button text="Next" variant="filled" type="submit" />
        </ButtonContainer>
      </form>
    </div>
  );
};
