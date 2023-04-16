/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Header
 */

import * as React from "react";
import { TableHeaderProps } from "./declare";
import { TableStyledTableHeader } from "./styles/styled-table-header";

export const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {

    return (<TableStyledTableHeader
        className={props.className}
    >
        {props.children}
    </TableStyledTableHeader>);
};
