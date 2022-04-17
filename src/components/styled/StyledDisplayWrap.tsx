import styled from 'styled-components';
import { device } from './device';

export const StyledDisplayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media ${device.laptop} {
    width: 100%;
    align-items: unset;
  }
  p {
    color: #434550;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.6rem;
    @media ${device.laptopL} {
      font-size: 1.5rem;
    }
    @media ${device.laptop} {
      font-size: 1.8rem;
    }
    @media ${device.tablet} {
      font-size: 1.3rem;
    }
  }
  h1 {
    color: #fff;
    font-weight: 900;
  }
  .average {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    padding: 1rem;
    h1 {
      font-size: 6rem;
      line-height: 7rem;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      span {
        font-size: 3rem;
        font-weight: bold;
        vertical-align: text-top;
      }
    }
    @media ${device.laptopL} {
      h1 {
        font-size: 5rem;
        line-height: 6rem;
        span {
          font-size: 2.5rem;
        }
      }
    }
    @media ${device.laptop} {
      margin-top: 0;
      margin-bottom: 2rem;
      h1 {
        font-size: 6rem;
        line-height: 7rem;
        span {
          font-size: 3rem;
        }
      }
    }
    @media ${device.tablet} {
      margin-bottom: 1rem;
      border-radius: 1rem;
      h1 {
        margin-top: 0rem;
        font-size: 4rem;
        line-height: 5rem;
        span {
          font-size: 1.6rem;
          font-weight: bold;
          vertical-align: super;
        }
      }
    }
  }
  .daily {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    @media ${device.laptop} {
      flex-direction: column;
    }
    h1 {
      margin-top: 0rem;
      font-size: 2.5rem;
      line-height: 2rem;
      position: relative;
      img {
        position: absolute;
        left: 55%;
        top: 0.9rem;
        width: 50px;
        height: 50px;
      }
      span {
        font-size: 1rem;
        font-weight: bold;
        vertical-align: super;
      }
    }
    @media ${device.laptopL} {
      h1 {
        font-size: 2rem;
      }
    }
    @media ${device.laptop} {
      h1 {
        margin-top: 0rem;
        font-size: 2.5rem;
        line-height: 2rem;
        img {
          position: absolute;
          left: 61%;
          top: -0.5rem;
          width: 50px;
          height: 50px;
        }
        span {
          font-size: 1rem;
          font-weight: bold;
          vertical-align: super;
        }
      }
    }
    @media ${device.tablet} {
      h1 {
        margin-top: 0rem;
        font-size: 2rem;
        line-height: 1.6rem;
        span {
          font-size: 1rem;
          font-weight: bold;
          vertical-align: super;
        }
      }
    }
  }
`;
