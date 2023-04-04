/**
 * @author WMXPY
 * @namespace Tabs
 * @description Tabs
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Tab, Tabs, Theme, useTabs } from "../../../src";

export default {
    title: "Tabs",
    component: Tabs,
    subcomponents: {
        Tab,
    },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args: any) => {

    const controller = useTabs();

    return (<Theme>
        <Tabs
            {...args}
            controller={controller}
            minWidth={512}
            minHeight={512}
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
