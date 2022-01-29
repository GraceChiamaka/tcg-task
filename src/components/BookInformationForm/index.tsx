import { Input, Button } from "../index";
import { FormGroup } from "./style";
import { ButtonContainer } from "../../container";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ReactComponent as BackArrowIcon } from "../../assets/images/back-arrow.svg";

export const BookInformationForm = () => {
  const [formDetails, setFormDetails] = useState({
    book_title: "",
    author: "",
    isbn: "",
    publisher: "",
    published_date: "",
    pages: "",
    format: "",
    edition: "",
    edition_language: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { previousStep, selectedSubgenre, updateStatus } =
    useContext(AppContext);

  const handleInputChange = (ev: any) => {
    const { name, value } = ev.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleFormSubmit = (ev: any) => {
    ev.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      updateStatus();
    }, 3000);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormGroup>
        <label htmlFor="">Book Title</label>
        <Input
          placeholder="Book Title"
          name="book_title"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Author</label>
        <Input
          placeholder="Author"
          name="author"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">ISBN</label>
        <Input
          placeholder="ISBN"
          name="isbn"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Publisher</label>
        <Input
          placeholder="Publisher"
          name="publisher"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Date Published</label>
        <Input
          type="date"
          placeholder="DD/MM/YYYY"
          name="published_date"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Number of pages</label>
        <Input
          placeholder="Number of pages"
          name="pages"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Format </label>
        <Input
          placeholder="format"
          name="format"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Edition </label>
        <Input
          placeholder="Edition"
          name="edition"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Edition Language</label>
        <Input
          name="edition_language"
          placeholder="Edition language"
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      {selectedSubgenre?.isDescriptionRequired && (
        <FormGroup>
          <label htmlFor="">Description </label>
          <textarea
            name="description"
            onChange={handleInputChange}
            required
          ></textarea>
        </FormGroup>
      )}
      <FormGroup>
        <ButtonContainer>
          <Button
            variant="outline"
            text={
              <>
                <BackArrowIcon /> back
              </>
            }
            type="button"
            onClick={previousStep}
          ></Button>
          <Button
            text={isSubmitting ? "Submitting..." : "Complete"}
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          />
        </ButtonContainer>
      </FormGroup>
    </form>
  );
};
