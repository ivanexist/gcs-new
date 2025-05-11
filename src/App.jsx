import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar1 from "./components/Navbar1";
import Routers from "./Routers";
import GCSProvider from "./context/GCSContext";
import Index1 from "./json/Index";
// import Index from ".";

function App() {
  return (
    <>
      <Router>
        <GCSProvider>
          {/* <div className="sticky top-0 z-20">
            <Navbar2 />
          </div> */}
          <Routers />
          <Index1 />
        </GCSProvider>
      </Router>
    </>
  );
}

export default App;
