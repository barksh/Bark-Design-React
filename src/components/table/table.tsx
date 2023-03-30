/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table
 */

import * as React from "react";
import { TableProps } from "./declare";
import { TableStyledTable } from "./styles/styled-table";

export const Table: React.FC<TableProps> = (props: TableProps) => {

    return (<TableStyledTable
        size={props.size}
        noBorder={props.noBorder}
        fixedLayout={props.fixedLayout}
    >
        {props.children}
    </TableStyledTable>);
};
