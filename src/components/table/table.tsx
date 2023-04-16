/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Table
 */

import * as React from "react";
import { TableDataContext, TableHeaderContext } from "./context";
import { TableProps } from "./declare";
import { TableStyledTable } from "./styles/styled-table";

export const Table: React.FC<TableProps> = (props: TableProps) => {

    return (<TableStyledTable
        size={props.size}
        noBorder={props.noBorder}
        noInnerBorder={props.noInnerBorder}
        noOuterBorder={props.noOuterBorder}
        fixedLayout={props.fixedLayout}
    >
        <TableHeaderContext.Provider
            value={{
                size: props.size,
            }}
        >
            <TableDataContext.Provider
                value={{
                    size: props.size,
                    noBorder: props.noBorder,
                    noInnerBorder: props.noInnerBorder,
                }}
            >
                {props.children}
            </TableDataContext.Provider>
        </TableHeaderContext.Provider>
    </TableStyledTable>);
};
