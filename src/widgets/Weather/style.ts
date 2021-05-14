import styled, { css } from 'styled-components';

export const WeatherWidget = styled.div`
  & > h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 4px;
  }

  & > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const WeatherIcon = styled.i`
  width: 26px;
  height: 20px;
  margin-bottom: 14px;
  display: flex;

  ${({ icon }: { icon: string }) => css`
    mask-image: url(${icon});
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: currentColor;
  `};
`;
