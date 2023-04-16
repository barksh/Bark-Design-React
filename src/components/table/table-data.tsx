/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Data
 */

import * as React from "react";
import { TableDataProps } from "./declare";
import { TableStyledTableData } from "./styles/styled-table-data";

export const TableData: React.FC<TableDataProps> = (props: TableDataProps) => {

    return (<TableStyledTableData
        className={props.className}
    >
        {props.children}
    </TableStyledTableData>);
};
