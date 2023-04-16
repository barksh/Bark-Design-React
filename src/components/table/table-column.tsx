/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Column
 */

import * as React from "react";
import { TableColumnProps } from "./declare";
import { TableStyledTableColumn } from "./styles/styled-table-column";

export const TableColumn: React.FC<TableColumnProps> = (props: TableColumnProps) => {

    return (<TableStyledTableColumn
        className={props.className}
    >
        {props.children}
    </TableStyledTableColumn>);
};
