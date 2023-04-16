/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Row
 */

import * as React from "react";
import { TableRowProps } from "./declare";
import { TableStyledTableRow } from "./styles/styled-table-row";

export const TableRow: React.FC<TableRowProps> = (props: TableRowProps) => {

    return (<TableStyledTableRow
        className={props.className}
    >
        {props.children}
    </TableStyledTableRow>);
};
