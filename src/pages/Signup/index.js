// Librarys

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Lottie from "react-lottie";

// Components

import api from "../../Services/Api";
import SignupValidation from "../../Utils/Validation/SignupValidation";
import Message from "../../Components/Message";
import {
  Container,
  Form,
  Input,
  Button,
  ShowP,
  Img,
  Signin,
  Span,
  Title,
  TitleAnimation,
  AnimationContainer,
  AnimationLink,
} from "./style";

// Animations / Images

import Logo from "../../Assets/Images/logo-overstack.png";
import checkAnimation from "../../Assets/Animations/loading.json";
import successAnimation from "../../Assets/Animations/check.json";

function SignUp() {
  const [name, setName] = useState(""); //Name
  const [phone, setPhone] = useState(""); //Number Phone
  const [email, setEmail] = useState(""); //Email
  const [password, setPassword] = useState(""); //Password
  const [showPassword, setShowPassword] = useState(false); //Show password
  const [loading, setLoading] = useState(false); //Button Animation loading
  const [success, setSuccess] = useState(false); //Button Animation loading

  // Loading Animation

  const optionsLoading = {
    loop: true,
    autoplay: true,
    animationData: checkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Check Animation

  const optionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ----- Show Password -------------------- >

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  // ----- Handle Submit -------------------- >

  async function HandleSubmit() {
    const data = { name, email, phone, password };
    setLoading(true);

    try {
      await SignupValidation(data);
      handleRequest(data);
    } catch (err) {
      setLoading(false);
      Message(err.errors[0], "error");
    }
  }

  async function handleRequest(data) {
    await api
      .post("/user", data)
      .then((response) => {
        Message(response.data.message);
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000);
      })
      .catch((error) => {
        Message(error.response.data.message, "warn");
      });
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  }

  async function handleAuthenticated() {
    let token = await localStorage.getItem("over_token");

    if (token) {
      window.location = "/";
    }
  }

  useEffect(() => {
    handleAuthenticated();
  }, []);

  return (
    <Container>
      {success ? (
        <AnimationContainer>
          <TitleAnimation>Cadastrado com sucesso!</TitleAnimation>
          <Lottie options={optionsSuccess} height={70} width={70} />
          <br />
          <Link to="/signin">
            <AnimationLink>
              Faça Login!
              <FaSignInAlt style={{ margin: "0 8px" }} />
            </AnimationLink>
          </Link>
        </AnimationContainer>
      ) : (
        <Form>
          <ToastContainer /> {/* Card Icons */}
          <Img src={Logo} alt="Logo OverStack" />
          <Title>Cadastre-se!</Title>
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Celular"
            onChange={(e) => setPhone(e.target.value)}
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
          <Button onClick={HandleSubmit}>
            {loading ? (
              <Lottie options={optionsLoading} height={70} width={70} />
            ) : (
              "Cadastrar"
            )}
          </Button>
          <Signin>
            Já tem cadastro?
            <Link to="/signin">
              <Span> Faça login!</Span>
            </Link>
          </Signin>
        </Form>
      )}
    </Container>
  );
}

export default SignUp;
