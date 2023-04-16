/**
 * @author WMXPY
 * @namespace Components_Table
 * @description Context
 */

import * as React from "react";
import { TableDataProps, TableHeaderProps } from "./declare";

export const TableHeaderContext: React.Context<Partial<TableHeaderProps>> =
    React.createContext<Partial<TableHeaderProps>>({
    });

export const useTableHeaderContext = (props: TableHeaderProps): TableHeaderProps => {

    const context: Partial<TableHeaderProps> = React.useContext(TableHeaderContext);
    const enrichedProps: TableHeaderProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};

export const TableDataContext: React.Context<Partial<TableDataProps>> =
    React.createContext<Partial<TableDataProps>>({
    });

export const useTableDataContext = (props: TableDataProps): TableDataProps => {

    const context: Partial<TableDataProps> = React.useContext(TableDataContext);
    const enrichedProps: TableDataProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
