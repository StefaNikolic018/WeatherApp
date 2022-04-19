import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  a {
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: #434550;
    font-family: 'Brush Script MT', cursive;
    span {
      font-size: 1rem;
      font-weight: 900;
    }
    &:hover {
      color: rgba(67, 69, 80, 0.5);
    }
  }
`;
