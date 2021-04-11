import styled, { css } from "styled-components";

export const NTP = styled.main`
    padding: 78px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 78px * 2);

    ${({ backgroundSrc, ready }: { backgroundSrc: string; ready: boolean }) => css`
        --ntp-opacity: ${ready ? 1 : 0};
        --ntp-bg-transform: ${ready ? `scale(1)` : `scale(1.1)`};

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -100;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 53.65%, rgba(0, 0, 0, 0.35) 100%), url(backgrounds/unsplash/${backgroundSrc}.jpeg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            transition: 0.5s opacity ease-in-out, 0.3s transform ease-in-out;
            opacity: var(--ntp-opacity);
            transform: var(--ntp-bg-transform);
            overflow: hidden;
        }
    `};
`;

export const OpenSettings = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    margin: 50px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.4);
    }

    &:before {
        content: "";
        width: 18px;
        height: 18px;
        mask-image: url(${require("../../assets/edit.svg")});
        mask-size: 18px;
        mask-repeat: no-repeat;
        background-color: white;
    }
`;