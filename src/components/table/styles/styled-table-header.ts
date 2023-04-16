/**
 * @author WMXPY
 * @namespace Components_Table_Styles
 * @description Styled Table Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { TableHeaderProps } from "../declare";
import { fixSizeProps } from "../../../util/size";

export const TableStyledTableHeader: StyledComponent<"th", BarkThemeProps, any> =
    styled.th`
        cursor: default;
        padding: ${(props: BarkThemeProps<TableHeaderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "6px";
            }
        }};
            background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
            color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
`;
