import styled, { css } from "styled-components";

import { WidgetPosition } from "./types";

export const StyledWidget = styled.div`
    transition: 0.7s opacity;
        
    ${({ visible, position }: { visible: boolean; position: WidgetPosition }) => css`
        opacity: ${visible ? 1 : 0};
    `};
`;