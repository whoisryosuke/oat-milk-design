import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Heading from "./components/Text/Heading/Heading";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Heading type="h1">App</Heading>
        <ButtonGroup
          buttons={["2D", "3D", "4D"]}
          currentButton="3D"
          setCurrentButton={() => {}}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
