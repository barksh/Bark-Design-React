/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Body
 */

import * as React from "react";
import { TableBodyProps } from "./declare";
import { TableStyledTableBody } from "./styles/styled-table-body";

export const TableBody: React.FC<TableBodyProps> = (props: TableBodyProps) => {

    return (<TableStyledTableBody
        className={props.className}
    >
        {props.children}
    </TableStyledTableBody>);
};
