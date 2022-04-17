import styled from 'styled-components';
import { device } from './device';

interface IStyledProps {
  loading: string | undefined;
}

const initialSearch = `
position:absolute;
top: .8rem;
right: 1rem;
font-family: 'Font Awesome 5 Free' ;
font-size: 1.5rem ;
color: rgba(0,0,0, .5);
content: '\f002';
font-weight: 900 ;
`;

const loadingSearch = `
position:absolute;
top: .9rem;
right: 1.1rem;
width: 1rem;
height: 1rem;
content: '';
border: 3px solid rgba(0,0,0, .5);
border-bottom: 3px solid transparent;
border-radius: 50%;
animation: spin 1s linear infinite;
`;

export const StyledSearchWrap = styled.div<IStyledProps>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  box-shadow: 5px 5px 16px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  input {
    color: #434550;
    border-radius: 4px;
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 80%);
    transition: all 0.3 ease-in-out;
    padding: 1rem;
    padding-right: 5rem;
    width: 100%;
    :focus {
      border: 1px solid #434343;
    }
    :focus-visible {
      outline: 0;
    }
    @media ${device.mobileL} {
      padding-right: 3rem;
    }
  }
  #searchIcon {
    /* padding-top: 1rem; */
    position: relative;
    transition: all 0.3 ease-in-out;
    ::after {
      ${(props) => (props.loading ? loadingSearch : initialSearch)}
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .country {
    &__dropdown {
      width: 120px;
    }
    &__menu {
      background-color: #fff;
      &-list {
        padding: 0;
        &::-webkit-scrollbar {
          width: 8px;
          height: 0px;
        }
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
          background: #888;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    }
    &__control {
      height: 50px;
      @media screen and (max-width: 550px) {
        height: 40px;
      }
    }
    &__placeholder,
    &__single-value,
    &__indicators {
      margin-bottom: 7px;
    }
    &__option {
      display: flex;
      align-items: center;
      gap: 10px;
      .flag {
        border-radius: 3px;
        border: 2px solid black;
        height: 20px;
        box-sizing: content-box;
      }
      span {
        font-weight: bold;
        @media ${device.mobileL} {
          display: none;
        }
      }
    }
  }
  .degreeSwitch {
    transform: rotate(90deg);
    position: absolute;
    right: 0.1rem;
    top: 1.7rem;
    @media screen and (max-width: 550px) {
      right: -1rem;
    }
  }
`;
