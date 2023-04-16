/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table Data
 */

import * as React from "react";
import { useTableDataContext } from "./context";
import { TableDataProps } from "./declare";
import { TableStyledTableData } from "./styles/styled-table-data";

export const TableData: React.FC<TableDataProps> = (props: TableDataProps) => {

    const enrichedProps: TableDataProps = useTableDataContext(props);

    return (<TableStyledTableData
        size={enrichedProps.size}
        noBorder={enrichedProps.noBorder}
        noInnerBorder={enrichedProps.noInnerBorder}
        className={enrichedProps.className}
    >
        {enrichedProps.children}
    </TableStyledTableData>);
};
