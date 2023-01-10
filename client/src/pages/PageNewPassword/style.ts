import styled from "styled-components";

const Container = styled.div`
  & > main {
    width: 100%;
    margin-top: 50px;

    height: 790px;
    background-color: #f1f3f5;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
  }
  
  @media (min-width: 1921px) {
    & > main {
      height: 100vh;
    }
  }

  @media (max-width: 425px) {
    & > main {
      margin-top: 10px;
    }
  }

  @media (min-height: 1050px) {
    & > main {
      height: 100vh;
    }
  }
`;

export { Container };
