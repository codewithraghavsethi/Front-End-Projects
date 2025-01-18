import {Sidebar} from "../src/components/Sidebar"
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen ">
      <div className="h-[90%] flex">
        <Sidebar />
        <Navbar/>
      </div>
    </div>
  );
};

export default App;
