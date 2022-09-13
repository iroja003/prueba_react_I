//import './App.css';
//import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Formulario from "./Components/Formulario/Formulario";
import Header from "./Components/Header/Header";
import Showapi from "./Components/Showapi/Showapi";

function App() {
     const [nombreaBuscar, setNombreaBuscar] = useState("");

  return (
   <div className="container">
     <Header />
     <Formulario setNombreaBuscar={setNombreaBuscar}/>
     <Showapi nombreaBuscar={nombreaBuscar}/>
   </div>
  );
}

export default App;
