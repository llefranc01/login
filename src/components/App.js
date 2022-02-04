import React from "react"
import Signup from "./Signup";
import {Container} from "react-bootstrap"
import {AuthProvider} from "../contexts/AuthContext"

function App() {
  return (
    
    <Container className="d-flex align-items-center w-100 justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Signup/>  
        </div>
    </Container>
    
  )
}

export default App;
