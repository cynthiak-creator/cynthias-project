import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavbarComponent from "./components/Navbar";
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Container>
    <NavbarComponent>

    </NavbarComponent>
    </Container>
  );
}
export default App;
