import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-width: 200px;
`;

export const ContainerLinks = styled.div`
  @media (max-width: 630px) {
    margin-top: 20px;
  }

  a {
    margin-left: 10px;
    color: var(--color-primary);

    &:hover {
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;
