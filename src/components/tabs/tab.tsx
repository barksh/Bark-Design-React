/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tab
 */

import { randomUnique } from "@sudoo/random";
import * as React from "react";
import { ContentBlock } from "../content-block/content-block";
import { TabControllerProps, useTabContext, useTabControllerContext } from "./context";
import { TabsController } from "./controller";
import { TabProps } from "./declare";

export const Tab: React.FC<TabProps> = (props: TabProps) => {

    const idRef: React.MutableRefObject<string> = React.useRef(props.tabId ?? null as any);

    if (idRef.current === null) {
        idRef.current = randomUnique();
    }

    const controllerContext: TabControllerProps = useTabControllerContext();
    const enrichedProps: TabProps = useTabContext(props);

    const controller: TabsController = controllerContext.controller;

    React.useEffect(() => {

        controller.register({
            id: idRef.current,
            title: props.title,
        });

        return () => {
            controller.unregister(idRef.current);
        };
    }, [props.tabId]);

    if (controller.getActiveTabId() !== idRef.current) {
        return null;
    }

    return (<ContentBlock
        size={enrichedProps.size}
        noBorder={true}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
    >
        {enrichedProps.children}
    </ContentBlock>);
};
