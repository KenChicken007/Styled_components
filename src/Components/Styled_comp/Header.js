import styled from "styled-components";
import { Container } from "./Huddle";
import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
`;

const Nav = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

const Logo = styled.img`
  height: 25px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem 4rem;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${({ pad }) => pad};
  }
`;

export const GridOutline = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  grid-gap: ${({ gap }) => gap};
  margin-bottom: ${({ margin }) => margin};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ flex }) => flex};
    flex-direction: column-reverse;
  }
`;

export const GridInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 3.3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    text-align: center;
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export const GridImg = styled.img`
  width: ${({ width }) => width};
  text-align: center;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Nav>
            <Logo src={logo} alt="huddle" />
            <Button pad="0.5rem 2rem">Try it free</Button>
          </Nav>
          <GridOutline gap="5rem">
            <GridInfo>
              <h1>Build The Community Your fans will love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button pad="1rem 4rem" bg="#ff0099" color="#fff">
                get started for free
              </Button>
            </GridInfo>
            <GridImg src={mockup} alt="Nav Mockup" />
          </GridOutline>
        </Container>
      </StyledHeader>
    </>
  );
}
