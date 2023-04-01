/**
 * @author WMXPY
 * @namespace ContentBlock
 * @description Width Height
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContentBlock, Theme } from "../../../src";

export default {
    title: "Content Block",
    component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args: any) => {

    return (<Theme>
        <div>
            Width and Height
        </div>
        <ContentBlock
            {...args}
            width={200}
            height={200}
        />
        <div>
            Min Width and Min Height
        </div>
        <ContentBlock
            {...args}
            minWidth={200}
            minHeight={200}
        />
        <div>
            Max Width and Max Height
        </div>
        <ContentBlock
            {...args}
            maxWidth={200}
            maxHeight={200}
        >
            {"Content ".repeat(100)}
        </ContentBlock>
    </Theme>);
};

export const WidthHeight = Template.bind({});

WidthHeight.args = {
    children: "Content Block \n Content",
};
