import styled from 'styled-components';

export const StyledInput = styled.input`
  background: 0;
  border:0;
  border-bottom: solid 2px rgba(255,255,255,0.5);
  color: white;
  font-size: 1.4em;
  outline: 0;
  text-align: left;
  // transition: border-bottom 0.3s;
  padding: 10px;
  
  &::-moz-placeholder {
    opacity: 1;
    color: rgba(255,255,255,0.5);
    transition: color 0.3s;
  }

  &:focus::-moz-placeholder {
    color: rgba(255,255,255,1);
  }

  &::-webkit-input-placeholder {
    color: rgba(255,255,255,0.5);
    transition: color 0.3s;
  }

  &:focus::-webkit-input-placeholder {
    color: rgba(255,255,255,1);
  }

  &:focus {
    border-bottom: solid 2px white;
  }
`;
