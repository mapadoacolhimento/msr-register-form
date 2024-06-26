import { Grid } from "@radix-ui/themes";
import { Header, MainForm, DesktopIllustration } from "./components";

function App() {
  return (
    <main>
      <Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
        <div>
          <Header />
          <MainForm />
        </div>
        <DesktopIllustration />
      </Grid>
    </main>
  );
}

export default App;
