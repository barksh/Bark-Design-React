/**
 * @author WMXPY
 * @namespace Components_Avatar_Styles
 * @description Styled Content Name
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { getColorPaletteFromName } from "../data/color-palette";
import { getTextColorByColor } from "../data/text-color";
import { AvatarProps } from "../declare";

export const AvatarStyledContentName: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${(props: BarkThemeProps<AvatarProps>) => {
            const paletteColor: string = getColorPaletteFromName(
                props.name,
                props.theme.backColor.palette,
            );
            const textColor: string = getTextColorByColor(paletteColor);
            return textColor;
        }};
        background-color: ${(props: BarkThemeProps<AvatarProps>) => {
            const paletteColor: string = getColorPaletteFromName(
                props.name,
                props.theme.backColor.palette,
            );
            return paletteColor;
        }};
        font-size: ${(props: BarkThemeProps<AvatarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "22px";
                case 'large': return "36px";
            }
        }};
`;
