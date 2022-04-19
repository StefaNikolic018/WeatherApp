import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: .3rem;
  padding-bottom: .3rem;
  background: rgba(255,255,255,.2);
  text-align: center;
  a{
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;
    transition: all .3s ease-in-out;
    color: #434550;
    font-family: 'Times New Roman', Times, serif;
    &:hover{
      color: rgba(67, 69, 80, .5);
    }
  }
`;
