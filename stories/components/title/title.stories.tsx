/**
 * @author WMXPY
 * @namespace Title
 * @description Title
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Theme, Title, TitleProps } from "../../../src";

export default {
    title: "Title",
    component: Title,
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args: any) => {

    return (<Theme>
        <div>Level 1</div>
        <Title
            {...args}
            level={1}
        />
        <div>Level 2</div>
        <Title
            {...args}
            level={2}
        />
        <div>Level 3</div>
        <Title
            {...args}
            level={3}
        />
        <div>Level 4</div>
        <Title
            {...args}
            level={4}
        />
        <div>Level 5</div>
        <Title
            {...args}
            level={5}
        />
        <div>Level 6</div>
        <Title
            {...args}
            level={6}
        />
    </Theme>);
};

export const Primary: StoryFn<React.FC<TitleProps>> = Template.bind({});

Primary.args = {
    children: 'Hello World',
};
