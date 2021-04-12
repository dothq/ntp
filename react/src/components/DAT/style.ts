import styled, { css } from "styled-components"

export const StyledDAT = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-color: #8e8e8e white;
    flex-direction: column;

    & > small {
        color: black;
        font-size: 12px;
        margin-bottom: 20px;
    }
`;

export const DATPreview = styled.div`
    background-color: black;
    padding: 38px;
    border-radius: 6px;
    margin-bottom: 12px;
`;

export const CheckboxParent = styled.div`
    height: 38px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
    }
`;