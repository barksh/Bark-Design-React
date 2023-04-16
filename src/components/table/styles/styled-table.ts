/**
 * @author WMXPY
 * @namespace Components_Table_Styles
 * @description Styled Table
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { TableProps } from "../declare";

export const TableStyledTable: StyledComponent<"table", BarkThemeProps, any> =
    styled.table`
        ${parseLogicalCSSProperty("width")}: 100%;
        border-collapse: collapse;
        table-layout: ${(props: BarkThemeProps<TableProps>) => {
            if (props.fixedLayout) {
                return "fixed";
            }
            return "auto";
        }};
        border-width: ${(props: BarkThemeProps<TableProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }};
        border-style: ${(props: BarkThemeProps<TableProps>) => {
            if (props.noOuterBorder) {
                return "hidden";
            }
            return "solid";
        }};
        border-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
