import { Routes, Route } from "react-router-dom"
import { Form } from "./form"


export const RoutePage = () => {
    return(
   <Routes>
     <Route
      path="cadastro"
      element={<Form  />} 
     />
  </Routes> 
  ) 
}