import {
  Container,
  Sidebar,
  PageContent,
  Logo,
  Heading,
  Step,
  Steps,
  Content,
} from "./style";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  AddSubgenre,
  Genre,
  Subgenre,
  BookInformationForm,
  SuccessPage,
} from "../../components";

export const Books = () => {
  const { currentStep, addNewSubgenre, completed, stepList } =
    useContext(AppContext);

  const handleCurrentDisplay = () => {
    if (currentStep === 1) {
      return <Genre />;
    } else if (currentStep === 2) {
      return <Subgenre />;
    } else if (currentStep === 3 && addNewSubgenre) {
      return <AddSubgenre />;
    } else {
      return <BookInformationForm />;
    }
  };

  return (
    <Container>
      <Sidebar>
        <Logo>
          <h2>LibraryWizz</h2>
        </Logo>
        <Steps>
          {stepList.map((item, index) => (
            <Step
              key={index}
              active={currentStep === index + 1}
              visited={currentStep > index + 1}
            >
              <span>{index + 1}</span>
              <p>{item}</p>
            </Step>
          ))}
        </Steps>
      </Sidebar>
      <PageContent>
        {!completed && (
          <>
            <Heading>
              <h3>Add Book - New Book</h3>
            </Heading>
            <Content>{handleCurrentDisplay()}</Content>
          </>
        )}
        {completed && <SuccessPage />}
      </PageContent>
    </Container>
  );
};
