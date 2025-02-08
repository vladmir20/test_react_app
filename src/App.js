import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextForm heading="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
