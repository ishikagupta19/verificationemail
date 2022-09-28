
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Emailsent from "./components/Emailsent";
import Emailverified from "./components/Emailverified";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Emailsent />
      <Emailverified/>
      <Routes>
      
        <Route
          exact
          path="/emailverified"
          element={
            <Emailverified/>
          }
        />

        
      </Routes>
    </div>
  
  </BrowserRouter>
  )
}

export default App;
