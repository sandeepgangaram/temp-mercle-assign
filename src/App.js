import RowContainer from "./components/RowContainer";
import { allData } from "./allData";

function App() {
  return (
    <div>
      <RowContainer allData={allData} />
    </div>
  );
}

export default App;
