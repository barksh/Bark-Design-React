/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Tabs
 */

import * as React from "react";
import { useUnderlayZIndex } from "../../hooks/export";
import { limitSizeProps } from "../../util/size";
import { ButtonGroup, ContentBlock } from "../export";
import { TabContext, TabControllerContext } from "./context";
import { TabsControllerItem } from "./controller";
import { TabsProps } from "./declare";
import { TabsStyledContainer } from "./styles/styled-tabs-container";
import { TabsStyledHeader } from "./styles/styled-tabs-header";
import { TabsStyledHeaderButton } from "./styles/styled-tabs-header-button";

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {

    const afterButtonZIndex: number = useUnderlayZIndex();

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
        balancedBorder={props.balancedBorder}
    >
        <TabsStyledContainer
            size={props.size}
        >
            <TabsStyledHeader
                size={props.size}
                noHeaderBottomMargin={props.noHeaderBottomMargin}
            >
                <ButtonGroup
                    keepVisible={true}
                    noBorderTop
                    noBorderBottom
                    noBorderLeft
                    noBorderRight={props.noHeaderEndingBorder}
                >
                    {props.controller.tabs.map((tab: TabsControllerItem) => {
                        return (<TabsStyledHeaderButton
                            key={tab.id}
                            barSize={props.size}
                            activated={tab.id === props.controller.getActiveTabId()}
                            afterButtonZIndex={afterButtonZIndex}
                            size={limitSizeProps(
                                props.size,
                                ["small", "regular"],
                                "regular",
                            )}
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
