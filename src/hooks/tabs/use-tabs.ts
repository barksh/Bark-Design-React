/**
 * @author WMXPY
 * @namespace Hooks_Tabs
 * @description Use Tabs
 */

import * as React from "react";
import { TabsController } from "../../components/tabs/controller";

export const useTabs = (): TabsController => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [version, setVersion] = React.useState(0);

    const tabsControllerRef: React.MutableRefObject<TabsController | null> =
        React.useRef(null);

    if (!tabsControllerRef.current) {
        tabsControllerRef.current = TabsController.create(setVersion);
    }

    return tabsControllerRef.current;
};
