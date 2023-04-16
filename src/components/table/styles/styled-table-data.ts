/**
 * @author WMXPY
 * @namespace Components_Table_Styles
 * @description Styled Table Data
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { TableDataProps } from "../declare";
import { fixSizeProps } from "../../../util/size";

export const TableStyledTableData: StyledComponent<"td", BarkThemeProps, any> =
    styled.td`
        padding: ${(props: BarkThemeProps<TableDataProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "6px";
            }
        }};
        border-width: ${(props: BarkThemeProps<TableDataProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            return "1px";
        }};
        border-style: ${(props: BarkThemeProps<TableDataProps>) => {
            if (props.noInnerBorder) {
                return "hidden";
            }
            return "solid";
        }};
        border-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
