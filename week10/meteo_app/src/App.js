import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />
    </div>
  );
}
export default App;
