/**
 * @author WMXPY
 * @namespace Code
 * @description In Tabs
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Code, Tab, Tabs, Theme, useTabs } from "../../../src";

export default {
    title: "Code",
    component: Code,
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args: any) => {

    const controller = useTabs();

    return (<Theme>
        <Tabs
            controller={controller}
            minWidth={512}
            minHeight={512}
            noHeaderBottomMargin
        >
            <Tab
                title="Code Tab 1"
            >
                <Code
                    {...args}
                />
            </Tab>
            <Tab
                title="Code Tab 2"
            >
                <Code
                    {...args}
                />
            </Tab>
        </Tabs>
    </Theme>);
};

export const InTabs = Template.bind({});

InTabs.args = {
    language: "raw",
    wrap: true,
    break: false,
    noBorder: true,
    noPadding: false,
    noMargin: true,
    children: "Content ".repeat(100),
};
