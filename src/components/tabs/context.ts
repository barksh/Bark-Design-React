/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Context
 */

import * as React from "react";
import { TabProps } from "./declare";
import { TabsController } from "./controller";

export const TabContext: React.Context<Partial<TabProps>> =
    React.createContext<Partial<TabProps>>({
    });

export const useTabContext = (props: TabProps): TabProps => {

    const context: Partial<TabProps> = React.useContext(TabContext);
    const enrichedProps: TabProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};

export type TabControllerProps = {

    readonly controller: TabsController;
};

export const TabControllerContext: React.Context<TabControllerProps> =
    React.createContext<TabControllerProps>({
        controller: null as any,
    });

export const useTabControllerContext = (): TabControllerProps => {

    const context: TabControllerProps = React.useContext(TabControllerContext);
    return context;
};
