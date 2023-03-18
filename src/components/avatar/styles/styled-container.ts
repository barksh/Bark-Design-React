/**
 * @author WMXPY
 * @namespace Components_Avatar_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { AvatarProps } from "../declare";

const getRawWidthHeight = (props: BarkThemeProps<AvatarProps>): number => {

    const fixedSize = fixSizeProps(props.size);
    switch (fixedSize) {
        case 'small': return 32;
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        case 'regular': return 48;
        case 'large': return 64;
    }
};

const getWidthHeight = (props: BarkThemeProps<AvatarProps>): string => {

    const widthHeight: number = getRawWidthHeight(props);
    if (props.noBorder) {
        return `${widthHeight}px`;
    }

    const fixedSize = fixSizeProps(props.size);
    switch (fixedSize) {
        case 'small': return `${widthHeight + 2 * 2}px`;
        case 'regular': return `${widthHeight + 2 * 2}px`;
        case 'large': return `${widthHeight + 4 * 2}px`;
    }
};

export const AvatarStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        border: ${(props: BarkThemeProps<AvatarProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "2px";
                case 'large': return "4px";
            }
        }} solid ${(props: BarkThemeProps<AvatarProps>) => {
            return props.theme.borderColor.primary;
        }};
        width: ${(props: BarkThemeProps<AvatarProps>) => {
            return getWidthHeight(props);
        }};
        height: ${(props: BarkThemeProps<AvatarProps>) => {
            return getWidthHeight(props);
        }};
`;
