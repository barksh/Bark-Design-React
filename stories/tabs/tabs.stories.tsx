/**
 * @author WMXPY
 * @namespace Tabs
 * @description Tabs
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tab, Tabs, Theme } from "../../src";
import { useTabs } from "../../src/hooks/tabs/use-tabs";

export default {
    title: "Tabs",
    component: Tabs,
    subcomponents: {
        Tab,
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: any) => {

    const controller = useTabs();

    return (<Theme>
        <Tabs
            {...args}
            controller={controller}
        >
            <Tab
                title="Tab 1"
            >
                <div>Tab 1</div>
            </Tab>
            <Tab
                title="Tab 2"
            >
                <div>Tab 2</div>
            </Tab>
            <Tab
                title="Tab 3"
            >
                <div>Tab 3</div>
            </Tab>
        </Tabs>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
