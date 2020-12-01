import styled, { css } from 'styled-components';

export const MountEverest = styled.main`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const BackgroundDisplay = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: 0.7s opacity, 0.7s transform, 0.2s filter;

    @keyframes fade { 
        from: {
            opacity: 0;
        }

        to {
            opacity: 0.8;
        }
    }

    ${({ loaded, dimmed }: { loaded: boolean; dimmed: boolean }) => css`
        opacity: ${dimmed ? 0.2 : loaded ? 0.8 : 0};
        transform: scale(${dimmed ? 1.01 : 1});
    `};
`;

export const Metadata = styled.div`
    opacity: 0;
    transition: 0.7s opacity ease-out 1s;

    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    display: flex;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
    `};
`;

export const MetadataContent = styled.div`
    padding: 16px 22px;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    transition: 0.7s color;
    color: #b8b8b8a3;

    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 22px;

    &:hover {
        color: #ffffffb0;
    }

    &:hover > a {
        color: white;
    }

    &:hover > a:hover {
        box-shadow: 0px 2px 0px 0px white;
    }

    a {
        color: #f2f2f2a3;
        text-decoration: none;
        box-shadow: 0px 0px 0px 0px transparent;
        transition: 0.15s box-shadow, 0.7s color;
        font-weight: 600;
        margin: 0 4px;
    }

    a:hover {
        box-shadow: 0px 2px 0px 0px #f2f2f2a3;
    }
`;

export const Attribution = styled(MetadataContent)`
    left: 0;
`;

export const Geolocation = styled(MetadataContent)`
    right: 0;
    margin-left: auto;
`;