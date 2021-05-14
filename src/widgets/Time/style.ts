import styled from 'styled-components';

export const TimeWidget = styled.time`
  & > h1 {
    font-size: 62px;
    font-weight: 600;
    line-height: 62px;
    margin-bottom: 2px;
    border: none;
    outline: none;
  }

  & > p {
    font-size: 26px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    line-height: 32px;
  }
`;
