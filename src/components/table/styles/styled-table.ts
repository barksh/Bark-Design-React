/**
 * @author WMXPY
 * @namespace Components_Table_Styles
 * @description Styled Table
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { TableProps } from "../declare";

export const TableStyledTable: StyledComponent<"table", BarkThemeProps, any> =
    styled.table`
       width: 100%;
       border-collapse: collapse;
       table-layout: ${(props: BarkThemeProps<TableProps>) => {
            if (props.fixedLayout) {
                return "fixed";
            }
            return "auto";
        }};
       border: ${(props: BarkThemeProps<TableProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};

        & th {

            cursor: default;
            padding: ${(props: BarkThemeProps<TableProps>) => {
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
        }

        & td {

            padding: ${(props: BarkThemeProps<TableProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "6px";
            }
        }};
            border: ${(props: BarkThemeProps<TableProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            return "1px";
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
        }
`;
