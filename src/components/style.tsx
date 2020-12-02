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
`;

export const Metadata = styled.div`

    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    display: flex;
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