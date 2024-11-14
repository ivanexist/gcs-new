import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Routers from "./Routers";
import GCSProvider from "./context/GCSContext";

function App() {
  return (
    <>
      <Router>
        <GCSProvider>
          {/* <div className="sticky top-0 z-20">
            <Navbar2 />
          </div> */}
          <Routers />
        </GCSProvider>
      </Router>
    </>
  );
}

export default App;
