import styled, { css } from "styled-components"

export const StyledBackgrounds = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BackgroundItem = styled.a`
    margin-right: 28px;

    & > p {
        margin: 14px;
        display: flex;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000;
    }
`;

export const BackgroundImage = styled.picture`
    width: 182px;
    height: 118px;
    display: flex;
    border-radius: 4px;

    ${({ src }: { src: any }) => css`
        background-image: url(${src});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `};
`;