import styled from 'styled-components';

interface IStyledProps {
  bg: string | undefined;
}

export const StyledContainer = styled.div<IStyledProps>`
  width: 100%;
  height: 100vh;
  padding-inline: 10%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background: ${(props) => props.bg};
  .dataWrap {
    margin-top: 2rem;
    .spinner {
      margin-top: 5rem;
    }
  }
`;
