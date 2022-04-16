import styled from 'styled-components';

export const StyledDisplayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  p {
    color: #434550;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.6rem;
  }
  h1 {
    color: #fff;
    font-weight: 900;
  }
  .average {
    text-align: center;
    p {
      margin-top: 2rem;
    }
    h1 {
      font-size: 7rem;
      line-height: 8rem;
      span {
        font-size: 3rem;
        font-weight: bold;
        vertical-align: text-top;
      }
    }
  }
  .daily {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    text-align: center;
    margin-top: 1rem;
    h1 {
      margin-top: 0rem;
      font-size: 2.5rem;
      line-height: 2rem;
      span {
        font-size: 1rem;
        font-weight: bold;
        vertical-align: super;
      }
    }
  }
`;
