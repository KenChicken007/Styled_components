import { Container } from "./Huddle";
import { Button } from "./Header";
import styled from "styled-components";
import logo from "./images/logo.svg";

const PopupCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

const Popup = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  padding: 80px;
  text-align: center;
  margin-top: 5rem;
  text-transform: capitalize;
  position: absolute;

  z-index: 1;
  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
    padding: 80px 10px;
  }
`;

const FooterDesign = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 0 2rem;
  z-index: 0;
`;

const Logo = styled.img`
  height: 30px;
  margin: 2rem 0;
`;

const Flex = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-around;

  & > div,
  & > ul {
    flex: 1;
  }

  ul {
    text-align: center;
  }

  li {
    display: flex;
    list-style-type: none;
    margin-bottom: 1rem;
  }
  p {
    text-align: left;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Icon = styled.img`
  width: 10px;
  height: 15px;
  text-align: center;
  margin-top: 5px;
  margin-right: 1rem;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1rem;
  border-radius: 50px;
`;

export default function Footer() {
  return (
    <>
      <Container>
        <PopupCenter>
          <Popup>
            <h2>Ready to build your Community?</h2>
            <Button pad="1rem 4rem" bg="#ff0099" color="#fff">
              get started for free
            </Button>
          </Popup>
        </PopupCenter>
      </Container>
      <FooterDesign>
        <Container>
          <Logo src={logo} alt="huddle" />
          <Flex>
            <ul>
              <li>
                <Icon src={require(`./images/icon-location.svg`).default} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore voluptas commodi deleniti id esse quibusdam?
                </p>
              </li>
              <li>
                <Icon src={require("./images/icon-phone.svg").default} />
                <p>+1-543-123-4567</p>
              </li>
              <li>
                <Icon src={require("./images/icon-email.svg").default} />
                <p>example@huddle.com</p>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>

            <ul>
              <li>
                <SocialIcon src={require("./images/icon-email.svg").default} />
                <SocialIcon src={require("./images/icon-phone.svg").default} />
                <SocialIcon
                  src={require("./images/icon-location.svg").default}
                />
              </li>
            </ul>
          </Flex>
        </Container>
      </FooterDesign>
    </>
  );
}
