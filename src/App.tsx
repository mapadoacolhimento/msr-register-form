import { Grid } from "@radix-ui/themes";
import { Header, MainForm, DesktopIllustration, Steps } from "./components";

function App() {
  const currentStep = 2;
  const totalSteps = 3;
  const progress = (100 * currentStep) / totalSteps;
  return (
    <main>
      <Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
        <div>
          <Header />
          <MainForm />
        </div>
        <DesktopIllustration />
      </Grid>
      <Steps
        stepName="Seus dados"
        stepNumber={1}
        onClick={() => true}
        isValid
        progress={progress}
      />
    </main>
  );
}

export default App;
