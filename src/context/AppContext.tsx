import { createContext, useState } from "react";

type ContextProps = {
  currentStep: number;
  addNewSubgenre: boolean;
  nextStep: () => void;
  previousStep: () => void;
  selectedGenre: number | null;
  updateGenre: (id: number) => void;
  addStep: () => void;
  stepList: string[];
  updateSubgenre: (data: any) => void;
  reset: () => void;
  selectedSubgenre: null | {
    id: string;
    name: string;
    isDescriptionRequired: boolean;
  };
  completed: boolean;
  updateStatus: () => void;
};

export const AppContext = createContext({} as ContextProps);

const AppContextProvider = ({ children }: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [addNewSubgenre, setaddNewSubgenre] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<null | number>(null);
  const [selectedSubgenre, setSelectedSubgenre] = useState(null);
  const [stepList, setStepList] = useState([
    "Genre",
    "Subgenre",
    "Information",
  ]);
  const [completed, setCompleted] = useState(false);

  const reset = () => {
    setCompleted(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const updateGenre = (genreId: number) => {
    setSelectedGenre(genreId);
  };
  const addStep = () => {
    stepList.splice(2, 0, "Add new subgenre");
    setStepList([...stepList]);
    setaddNewSubgenre(true);
    setCurrentStep(currentStep + 1);
  };
  const updateStatus = () => {
    setCompleted(true);
  };

  const updateSubgenre = (data: any) => {
    setSelectedSubgenre(null);
    setSelectedSubgenre(data);
    nextStep();
  };
  return (
    <AppContext.Provider
      value={{
        currentStep,
        addNewSubgenre,
        nextStep,
        previousStep,
        selectedGenre,
        updateGenre,
        addStep,
        stepList,
        updateSubgenre,
        selectedSubgenre,
        reset,
        completed,
        updateStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
