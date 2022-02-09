// Librarys
import { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import Lottie from "react-lottie";

// Components

import api from "../../Services/Api";
import SigninValidation from "../../Utils/Validation/SigninValidation";
import Message from "../../Components/Message";
import { Container, Form, Input, Button, ShowP, Img, Signup, Span, ForgotPassword } from "./style";

import Logo from "../../Assets/Images/logo-overstack.png";

// Animations

import * as animationData from "../../Assets/Animations/loading.json";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ----- Show Password --------------------

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  // ----- Handle Submit --------------------

  async function HandleSubmit() {
    setLoading(true);
    const data = { email, password };

    let validation = await SigninValidation(data);
    if (validation) {
      await api
        .post("/signin", data)
        .then((response) => {

          localStorage.setItem("over_name", response.data.user.name)
          localStorage.setItem("over_token", response.data.token)

          Message(response);
          setTimeout(() => {
            setLoading(false);
            handleAuthenticated()
          }, 2000);
        })
        .catch((error) => {
          Message("Erro ao tentar fazer login", "error");
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    } else {
      Message(
        "Preencha um email válido, e/ou uma senha de no minímo 6 caracteres",
        "info"
      );
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  async function handleAuthenticated(){
    let token = await localStorage.getItem("over_token")

    if(token){
      window.location = "/"
    }
  }

  useEffect(()=>{
    handleAuthenticated()
  }, [])

  return (
    <Container>
      <Form>
        <ToastContainer />
        <Img src={Logo} alt="Logo OverStack" />
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ShowP>
          {showPassword ? (
            <HiEyeOff height={22} onClick={tooglePassword} />
          ) : (
            <HiEye height={22} onClick={tooglePassword} />
          )}
          <h6>Mostrar senha...</h6>
        </ShowP>
        <ForgotPassword href="/forgotPassword">Esqueceu sua senha?</ForgotPassword>
        <Button onClick={HandleSubmit}>
          {loading ? (
            <Lottie options={defaultOptions} height={70} width={70} />
          ) : (
            "Entrar"
          )}
        </Button>
        <Signup href="/signup">Ainda não tem cadastro? <Span>Cadastre-se!</Span></Signup>
      </Form>
    </Container>
  );
}

export default Signin;
