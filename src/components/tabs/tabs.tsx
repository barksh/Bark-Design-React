/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tabs
 */

import * as React from "react";
import { Button, ButtonGroup, ContentBlock } from "../export";
import { TabContext, TabControllerContext } from "./context";
import { TabsProps } from "./declare";
import { TabsStyledContainer } from "./styles/styled-tabs-container";
import { TabsStyledHeader } from "./styles/styled-tabs-header";
import { TabsControllerItem } from "./controller";

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {

    return (<ContentBlock
        size={props.size}
        noBorder={props.noBorder}
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
        <TabsStyledContainer
            size={props.size}
        >
            <TabsStyledHeader
                size={props.size}
            >
                <ButtonGroup
                    noBorder={true}
                >
                    {props.controller.tabs.map((tab: TabsControllerItem) => {
                        return (<Button
                            key={tab.id}
                            onClick={() => {
                                props.controller.setActiveTabId(tab.id);
                            }}
                        >
                            {tab.title}
                        </Button>);
                    })}
                </ButtonGroup>
            </TabsStyledHeader>
            <TabControllerContext.Provider
                value={{
                    controller: props.controller,
                }}
            >
                <TabContext.Provider
                    value={{
                        size: props.size,
                        noBorder: props.noBorder,
                    }}
                >
                    {props.children}
                </TabContext.Provider>
            </TabControllerContext.Provider>
        </TabsStyledContainer>
    </ContentBlock>);
};
