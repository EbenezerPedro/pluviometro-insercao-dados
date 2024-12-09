import { Form } from './components/form';
import Home from './components/home';
import { Routes, Route } from "react-router-dom"
import { Login } from './components/login';
import DadosColectPage from './components/DadosColectPage';
import CadastrarDados from './components/CadastrarDados';
import VerMais from './components/VerMais';

function App() {
  return (
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route
     path="cadastro" 
     element={<Form  />} 
    /> 
    <Route
     path="acessar" 
     element={<Login  />} 
    />  
    <Route 
      path='DadosColect'
      element={<DadosColectPage/>}    
    />
    <Route 
      path='CadastrarDados'
      element={<CadastrarDados/>}    
    />
    <Route 
      path='VerMais'
      element={<VerMais/>}    
    />
    </Routes>  
  );
}

export default App;