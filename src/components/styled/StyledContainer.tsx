import styled from 'styled-components';
import { device } from './device';

interface IStyledProps {
  bg: string | undefined;
}

export const StyledContainer = styled.div<IStyledProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-inline: 10%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background: ${(props) => props.bg};
  .dataWrap {
    margin-top: 2rem;
    .message {
      width: 100%;
      text-align: center;
      color: #434550;
      margin-top: 5rem;
    }
    .spinner {
      display: flex;
      height: 20rem;
      justify-content: center;
      align-items: center;
    }
  }
  .chart {
    position: relative;
    margin: auto;
    width: 99%;
    margin-bottom: 2rem;
  }
  .dailyWrap {
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
      .daily {
        order: 2;
        margin-bottom: 2rem;
      }
      .chart {
        order: 1;
        margin-bottom: 1rem;
      }
    }
  }
  @media ${device.tablet} {
    padding-inline: 5%;
  }
`;
