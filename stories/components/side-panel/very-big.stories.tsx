/**
 * @author WMXPY
 * @namespace SidePanel
 * @description Side Panel
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Button, Menu, MenuItem, SidePanel, SidePanelProps, Theme } from "../../../src";

export default {
    title: "Side Panel",
    component: SidePanel,
} as Meta<typeof SidePanel>;

const Template: StoryFn<typeof SidePanel> = (args: any) => {

    return (<Theme>
        <Button>Test</Button>
        <SidePanel
            {...args}
        >
            <Menu
                noBorder
                maximizeWidth
            >
                <MenuItem
                    title="Menu Item 1"
                >
                    <MenuItem
                        title="Menu Item 1.1"
                    />
                    <MenuItem
                        title="Menu Item 1.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 2"
                >
                    <MenuItem
                        title="Menu Item 2.1"
                    />
                    <MenuItem
                        title="Menu Item 2.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 1"
                >
                    <MenuItem
                        title="Menu Item 1.1"
                    />
                    <MenuItem
                        title="Menu Item 1.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 2"
                >
                    <MenuItem
                        title="Menu Item 2.1"
                    />
                    <MenuItem
                        title="Menu Item 2.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 1"
                >
                    <MenuItem
                        title="Menu Item 1.1"
                    />
                    <MenuItem
                        title="Menu Item 1.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 2"
                >
                    <MenuItem
                        title="Menu Item 2.1"
                    />
                    <MenuItem
                        title="Menu Item 2.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 1"
                >
                    <MenuItem
                        title="Menu Item 1.1"
                    />
                    <MenuItem
                        title="Menu Item 1.2"
                    />
                </MenuItem>
                <MenuItem
                    title="Menu Item 2"
                >
                    <MenuItem
                        title="Menu Item 2.1"
                    />
                    <MenuItem
                        title="Menu Item 2.2"
                    />
                </MenuItem>
            </Menu>
        </SidePanel>
    </Theme>);
};

export const VeryBig: StoryFn<React.FC<SidePanelProps>> = Template.bind({});

VeryBig.args = {
    align: "left",
};
