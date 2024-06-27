import { Grid } from "@radix-ui/themes";
import { Header, MultiStepForm, DesktopIllustration } from "./components";

function App() {
  return (
    <main>
      <Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
        <div>
          <Header />
          <MultiStepForm />
        </div>
        <DesktopIllustration />
      </Grid>
    </main>
  );
}

export default App;
