import { BetStatusDashboard } from "./components/BetStatusDashboard";
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <BetStatusDashboard />
    </>
  );
}

export default App;
