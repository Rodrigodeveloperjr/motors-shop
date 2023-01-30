import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 28px 44px;

  height: 145px;
  width: 100%;
  max-width: 751px;

  background: var(--grey10);
  border-radius: 4px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 145px;
    width: 100%;
    max-width: 658px;

    & > h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 768px) {
        -webkit-line-clamp: 3;
        height: 75px;
      }
    }

    & > div,
    & > div :where(div) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    & > div {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    height: 300px;

    & > div {
      & > h3 {
        margin-bottom: 20px;
      }

      & > div {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;

        & > div {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export { Container };
