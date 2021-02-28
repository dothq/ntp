import styled from 'styled-components';

export const StyledSettingsBackground = styled.div`
  height: 100vh;
  background-color: white;
  width: 412px;
  max-width: 50vw;
  position: absolute;
  right: 0px;
`;

export const StyledSettingsInnerBacksheet = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 25px;
`;

export const StyledSettingsH2 = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #000;
`;

export const StyledSettingsP = styled.p`
  margin: 0;
`;

export const StyledLeftSide = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0px;
  min-width: 50vw;
  width: calc(100vw - 412px);
`;
