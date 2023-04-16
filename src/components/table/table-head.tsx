/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Head
 */

import * as React from "react";
import { TableProps } from "./declare";
import { TableStyledTable } from "./styles/styled-table";

export const TableHead: React.FC<TableProps> = (props: TableProps) => {

    return (<TableStyledTable
        size={props.size}
        noBorder={props.noBorder}
        noInnerBorder={props.noInnerBorder}
        noOuterBorder={props.noOuterBorder}
        fixedLayout={props.fixedLayout}
    >
        {props.children}
    </TableStyledTable>);
};
