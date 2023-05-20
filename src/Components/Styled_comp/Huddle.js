import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Content from "./Content";
import content from "./paras";
import Footer from "./Footer";
import { GlobalStyles } from "./Global.styled";

export const Container = styled.div`
  max-width: 100%;
  padding: 5vh 50px;
  margin: 0 auto;
`;

const theme = {
  colors: {
    header: "#ebfbff",
    body: "blue",
    footer: "#003333",
  },
  mobile: "768px",
};
export default function Huddle() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Content key={index} item={item} />;
          })}
          ;
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
