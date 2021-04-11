import styled, { css } from "styled-components";

export const SettingsPanel = styled.aside`
    position: fixed;
    z-index: 100;
    width: 550px;
    height: 100vh;
    right: 0;
    top: 0;
    transition: 0.3s transform cubic-bezier(.79,.14,.15,.86);
    background-color: white;

    ${({ visible }: { visible: boolean }) => css`
        transform: translateX(${visible ? 0 : 750}px);
    `};
`;

export const Container = styled.div`
    padding: 0 50px;
    height: calc(100vh - 50px * 2);
`;

export const SettingsHeader = styled.header`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
`;

export const Close = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:before {
        content: "";
        width: 16px;
        height: 16px;
        mask-image: url(${require("../../assets/close.svg")});
        mask-size: 16px;
        mask-repeat: no-repeat;
        background-color: currentColor;
    }
`;

export const Section = styled.section`
    margin-bottom: 38px;
`;

export const SectionHeader = styled.header`
    height: 38px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 18px;
`;

export const SectionTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    height: 38px;
    color: #000000;
`;

export const CategoryBackgroundIcon = styled.i`
    width: 14px;
    height: 14px;
    margin-right: 10px;
    display: flex;

    mask-image: url(${require("../../assets/settings/categories/category-background.svg")});
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: #AFAFAF;
`;