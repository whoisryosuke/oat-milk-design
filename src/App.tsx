import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Heading from "./components/Text/Heading/Heading";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Heading type="h1">App</Heading>
        <ButtonGroup
          labels={["2D", "3D", "4D"]}
          currentLabel="3D"
          setCurrentLabel={() => {}}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
