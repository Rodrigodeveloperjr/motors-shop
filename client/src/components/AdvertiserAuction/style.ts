import styled from "styled-components";

const Container = styled.div`
  color: var(--grey10);

  width: 735px;
  height: 388px;

  border-radius: 4px;
  position: relative;

  margin-right: 24px;

  .divCardDescription {
    height: 326px;

    & > img {
      width: 735px;
      height: 326px;
      object-fit: contain;

      background-color: var(--grey7);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .divDescription {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;

      width: 100%;
      height: 326px;
      position: absolute;
      top: 0;

      background: linear-gradient(
        180deg,
        var(--shadow4) 0%,
        var(--black-fixed) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 25px 40px;

      :hover {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.71) 0%,
          #000000 100%
        );
      }

      .divTimeAuction {
        background-color: var(--white-fixed);
        border-radius: 32px;
        padding: 5px;
        width: 123px;
        height: 36px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        time {
          font-weight: 500;
          font-size: 16px;
          color: var(--grey1);
        }
      }

      & > div {
        width: 100%;
        height: 125px;

        & > h4 {
          font-weight: 600;
          font-size: 20px;

          padding-bottom: 15px;
        }

        & > p {
          font-weight: 400;
          font-size: 16px;
          color: var(--grey5);

          padding-bottom: 20px;
        }
      }

      .divYearKMPrice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        & > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          & > p {
            font-weight: 500;
            font-size: 14px;
            color: var(--brand1);

            background-color: var(--brand4);
            border-radius: 4px;
            padding: 4px 8px;

            margin-right: 5px;
          }
        }

        span {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;

          letter-spacing: 0.5px;
        }
      }
    }
  }

  .divRedirectsToAuction {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;

    background-color: var(--brand1);
    height: 62px;
    padding: 12px 36px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

    & > button:nth-child(1) {
      margin-right: 20px;
    }

    & > button {
      padding: 0;
    }

    @media (max-width: 768px) {
      & > button {
        max-width: unset;
      }
    }
  }

  @media (max-width: 768px) {
    width: 328px;

    margin-right: 10px;

    .divCardDescription {
      height: 500px;

      & > img {
        width: 328px;
        height: 500px;

        object-fit: contain;
      }

      .divDescription {
        padding: 20px 15px;
        height: 500px;
        justify-content: unset;

        .divTimeAuction {
          margin-bottom: 60px;
        }

        & > div {
          .divYearKMPrice {
            flex-direction: column;

            & > div {
              justify-content: unset;
              padding-bottom: 15px;
            }
          }
        }
      }
    }
  }
`;

export { Container };
