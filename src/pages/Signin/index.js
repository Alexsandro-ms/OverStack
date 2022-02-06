import { useState } from "react";

import { Container, Form, Input, Button } from "./style";
import api from '../../Services/Api'
import SigninValidation from '../../Utils/Validation/SigninValidation'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function HandleSubmit() {
      const data = { email, password }
      
      let validation = await SigninValidation(data);
      if(validation){
          await api.post("/user", data)
            .then( (response) => {
              console.log(response);
            })
            .catch(error => {
              alert('Erro ao tentar fazer login');
            });
      }else{
          alert('Preencha um email válido, e/ou uma senha de no minímo 6 caracteres')
      }

  }

  return (
    <Container>
      <Form>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="Password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button onClick={HandleSubmit}>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Signin;
