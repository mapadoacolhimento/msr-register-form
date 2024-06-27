import { Grid } from "@radix-ui/themes";
import {
  Header,
  MultiPageForm,
  DesktopIllustration,
  StepsController,
} from "./components";
import { useState } from "react";

const Fields = () => <div>Fields!</div>;
const isValid = () => true;

const STEPS = [
  {
    title: "Seus dados",
    StepFields: <Fields />,
    isValid,
  },
  {
    title: "Sobre o acolhimento",
    subtitle: "Você aceitaria ser atendida online?",
    StepFields: <Fields />,
    isValid,
  },
  {
    title: "Sobre o acolhimento",
    subtitle: "Que tipo de acolhimento você precisa?",
    StepFields: <Fields />,
    isValid,
  },
];

function App() {
  const [totalSteps] = useState(STEPS.length - 1);
  const [currentStepIndex, setStepIndex] = useState(0);
  const progress = (100 * currentStepIndex) / totalSteps;

  const goBack = () => {
    if (currentStepIndex >= 1)
      return setStepIndex((prevStepIndex) => prevStepIndex - 1);
    return setStepIndex(0);
  };

  const goNextStep = () => {
    const isStepValid = STEPS[currentStepIndex].isValid();
    if (!isStepValid) return null;
    setStepIndex((prevStepIndex) => prevStepIndex + 1);
  };

  return (
    <main>
      <Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
        <div>
          <Header />
          <MultiPageForm
            goBack={goBack}
            currentStepIndex={currentStepIndex}
            {...STEPS[currentStepIndex]}
          />
        </div>
        <DesktopIllustration />
      </Grid>
      <StepsController
        stepName={STEPS[currentStepIndex].title}
        stepNumber={currentStepIndex + 1}
        onClick={goNextStep}
        isValid
        progress={progress}
      />
    </main>
  );
}

export default App;
