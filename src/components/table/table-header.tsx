/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Header
 */

import * as React from "react";
import { useTableHeaderContext } from "./context";
import { TableHeaderProps } from "./declare";
import { TableStyledTableHeader } from "./styles/styled-table-header";

export const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {

    const enrichedProps: TableHeaderProps = useTableHeaderContext(props);

    return (<TableStyledTableHeader
        size={enrichedProps.size}
        className={enrichedProps.className}
    >
        {enrichedProps.children}
    </TableStyledTableHeader>);
};
