/**
 * @author WMXPY
 * @namespace SidePanel
 * @description Side Panel
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { Button, SidePanel, Theme, TitleProps } from "../../src";

export default {
    title: "Side Panel",
    component: SidePanel,
} as ComponentMeta<typeof SidePanel>;

const Template: ComponentStory<typeof SidePanel> = (args: any) => {

    return (<Theme>
        <Button>Test</Button>
        <SidePanel
            {...args}
        >
            Hello World
        </SidePanel>
    </Theme>);
};

export const Primary: ComponentStory<React.FC<TitleProps>> = Template.bind({});

Primary.args = {
};
