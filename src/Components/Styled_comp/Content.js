import styled from "styled-components";
import { GridOutline, GridImg } from "./Header";

const Style = styled.div`
  padding: 1rem 3rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5rem;
  order: ${({ even }) => even};
  h1 {
    margin-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    text-align: center;
    margin: 0;
    margin-top: 2rem;
    font-size: 1.1rem;
  }
`;

export default function Content({ item: { id, title, body, image } }) {
  return (
    <>
      <Style>
        <GridOutline margin="1.5rem" flex="flex">
          <BoxContent>
            <h1>{title}</h1>
            <p>{body}</p>
          </BoxContent>
          <GridImg
            width="80%"
            src={require(`./images/${image}`)}
            alt="Content"
          />
        </GridOutline>
      </Style>
    </>
  );
}
