/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Head
 */

import * as React from "react";
import { TableHeadProps } from "./declare";
import { TableStyledTableHead } from "./styles/styled-table-head";

export const TableHead: React.FC<TableHeadProps> = (props: TableHeadProps) => {

    return (<TableStyledTableHead
        className={props.className}
    >
        {props.children}
    </TableStyledTableHead>);
};
