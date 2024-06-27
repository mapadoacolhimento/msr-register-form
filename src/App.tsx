import { Grid } from "@radix-ui/themes";
import { Header, MainForm, DesktopIllustration, Steps } from "./components";
import { useState } from "react";

const Fields = () => <div>Fields!</div>;
const isValid = () => true;

const STEPS = [
  {
    title: "Seus dados",
    Fields: <Fields />,
    isValid,
  },
  {
    title: "Sobre o acolhimento",
    subtitle: "Você aceitaria ser atendida online?",
    Fields: <Fields />,
    isValid,
  },
  {
    title: "Sobre o acolhimento",
    subtitle: "Que tipo de acolhimento você precisa?",
    Fields: <Fields />,
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
          <MainForm goBack={goBack} {...STEPS[currentStepIndex]} />
        </div>
        <DesktopIllustration />
      </Grid>
      <Steps
        stepName="Seus dados"
        stepNumber={1}
        onClick={goNextStep}
        isValid
        progress={progress}
      />
    </main>
  );
}

export default App;
