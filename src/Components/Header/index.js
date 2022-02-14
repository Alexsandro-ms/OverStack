import { useEffect } from "react";

import { Container, Image, ContainerLinks } from "./styles";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/logo-overstack.png";

function Header() {
  //   async function handleAuthenticated() {
  //     let token = localStorage.getItem("over_token");

  //     if (!token) {
  //       window.location = "/signin";
  //     }
  //   }

  async function handleLogout() {
    localStorage.clear();
    // handleAuthenticated();
  }

  //   useEffect(() => {
  //     handleAuthenticated();
  //   }, []);

  return (
    <Container>
      <Link to="/">
        <Image src={Logo} alt="OverStack Logo" />
      </Link>
      <ContainerLinks>
        <Link to="/course">Novo Curso</Link>
        <Link to="/course">Novo Curso</Link>
        <Link onclick={handleLogout} to="#">
          Sair
        </Link>
      </ContainerLinks>
    </Container>
  );
}

export default Header;
