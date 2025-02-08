import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";

function App() {
  const [statusMode, setMode] = useState("light");
  const toggleMode = () => {
    if (statusMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#080808";
      document.body.style.transition = "background-color 0.5s ease";
      document.querySelector("div").style.color = "white";
      document.querySelector("div").style.backgroundColor = "black";
      document.querySelector("div").style.transition =
        "background-color 0.5s ease";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "background-color 0.5s ease";
      document.querySelector("div").style.color = "black";
      document.querySelector("div").style.backgroundColor = "white";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Navbar mode={statusMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
      </div>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
