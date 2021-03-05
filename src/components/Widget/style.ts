import styled from 'styled-components';
import icons from '../../icons';

export const StyledWidget = styled.div`
  position: absolute;
  --pad-top: 20px;
  --pad-left: 38px;
  --spacing: calc(72px - var(--pad-left));

  padding: var(--pad-top) var(--pad-left);
  border-radius: 8px;

  transition: 0.2s background-color;

  display: flex;
  flex-direction: row;

  // &:hover {
  //   background-color: #0000001f;
  // }

  & > * {
    user-select: none;
    user-drag: none;
  }

  &.top-left {
    top: 0;
    left: 0;
    margin: var(--spacing) 0 0 var(--spacing);
  }

  &.top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: var(--spacing) 0 0 0;
  }
  &.search-default {
    top: 50%;
    left: 0;
    transform: translateY(-210%);
    margin: 0 0 0 var(--spacing);
  }
  &.top-right {
    top: 0;
    right: 0;
    margin: var(--spacing) var(--spacing) 0 0;
  }

  &.center-left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0 0 0 var(--spacing);
  }

  &.center-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.center-right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin: 0 var(--spacing) 0 0;
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    margin: 0 0 var(--spacing) var(--spacing);
  }

  &.bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 0 var(--spacing) 0;
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    margin: 0 var(--spacing) var(--spacing) 0;
  }

  & i {
    opacity: 0;
    width: 24px;
    height: 24px;
    margin-left: 18px;
    transition: 0.1s opacity;
  }

  &:hover > i {
    background-image: url(data:image/svg+xml;utf8,${encodeURIComponent(
      icons.more_horizontal
    )});
    display: flex;
    background-size: 34px;
    filter: invert(1);
    background-position: center;
    opacity: 0.8;
  }

  & > i:hover {
    opacity: 1;
  }
`;
