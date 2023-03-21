/**
 * @author WMXPY
 * @namespace ContentBlock
 * @description Content Block
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContentBlock, LoadingContainerBorder, Theme } from "../../src";

export default {
    title: "Content Block",
    component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args: any) => {

    return (<Theme>
        <ContentBlock
            {...args}
        />
        <div>With Loading Config</div>
        <ContentBlock
            {...args}
            loadingProvider={LoadingContainerBorder}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content Block Content",
    loadingPlaceholder: "Loading Placeholder",
};
