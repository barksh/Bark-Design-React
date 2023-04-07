/**
 * @author WMXPY
 * @namespace Flex
 * @description Flex
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FlexLayout, LeadingStatic, Theme } from "../../../src";

export default {
    title: "Flex Layout",
    component: FlexLayout,
} as Meta<typeof FlexLayout>;

const Template: StoryFn<typeof FlexLayout> = (args: any) => {

    return (<Theme>
        <FlexLayout
            {...args}
        >
            <LeadingStatic>1</LeadingStatic>
            <LeadingStatic>2</LeadingStatic>
            <LeadingStatic>3</LeadingStatic>
        </FlexLayout>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
