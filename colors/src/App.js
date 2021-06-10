import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from "./seedColors"

function App() {
  console.log(generatePalette(seedColors[0]))
  return (
    <div className="App">
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
