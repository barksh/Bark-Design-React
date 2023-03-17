/**
 * @author WMXPY
 * @namespace ContentBlock
 * @description Content Block
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContentBlock, Theme } from "../../src";

export default {
    title: "ContentBlock",
    component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args: any) => {

    return (<Theme>
        <ContentBlock
            {...args}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content Block Content",
};
