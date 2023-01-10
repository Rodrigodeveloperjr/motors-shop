import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 412px;

  background-color: #fdfdfd;
  border-radius: 4px;

  padding: 44px 50px;

  & > h2 {
    font-weight: 500;
    font-size: 22px;
  }

  & > div {
    margin: 20px 0;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div, & > button {
      max-width: unset;
    }
  }
`;

export { Container };