/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tabs
 */

import * as React from "react";
import { ButtonGroup, ContentBlock } from "../export";
import { TabContext, TabControllerContext } from "./context";
import { TabsControllerItem } from "./controller";
import { TabsProps } from "./declare";
import { TabsStyledContainer } from "./styles/styled-tabs-container";
import { TabsStyledHeader } from "./styles/styled-tabs-header";
import { TabsStyledHeaderButton } from "./styles/styled-tabs-header-button";
import { limitSizeProps } from "../../util/size";

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
                    keepVisible={true}
                >
                    {props.controller.tabs.map((tab: TabsControllerItem) => {
                        return (<TabsStyledHeaderButton
                            barSize={props.size}
                            activated={tab.id === props.controller.getActiveTabId()}
                            size={limitSizeProps(
                                props.size,
                                ["small", "regular"],
                                "regular",
                            )}
                            key={tab.id}
                            onClick={() => {
                                props.controller.setActiveTabId(tab.id);
                            }}
                        >
                            {tab.title}
                        </TabsStyledHeaderButton>);
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
