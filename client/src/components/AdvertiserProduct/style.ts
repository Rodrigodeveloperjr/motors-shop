import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  height: 356px;
  margin-right: 40px;

  .divKmYearPrice,
  .divKmYearPrice :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .divKmYearPrice {
    justify-content: space-between;
    margin: 15px 0;
  }

  .divButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 201px;

    & > button {
      padding: 0;
    }

    & > a {
      width: 100%;
      height: 38px;
      max-width: 105px;

      background-color: transparent;
      border: 1.5px solid var(--grey1);

      font-weight: 600;
      font-size: 14px;
      color: var(--grey1);

      border-radius: 4px;
      font-weight: 600;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.5s;

      :disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      :hover {
        background-color: var(--grey1);
        color: var(--white-fixed);
      }
    }
  }

  @media (max-width: 425px) {
    margin-right: 12px;
  }
`;

export { Container };
