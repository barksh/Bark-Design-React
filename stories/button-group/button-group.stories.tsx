/**
 * @author WMXPY
 * @namespace ButtonGroup
 * @description Button Group
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Theme } from "../../src";

export default {
    title: "Button Group",
    component: ButtonGroup,
    subcomponents: {
        Button,
    },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: any) => {

    return (<Theme>
        <ButtonGroup
            {...args}
        >
            <Button
                description="This is Button 1"
            >
                Button
            </Button>
            <Button>
                Button 2
            </Button>
            <Button>
                Button 3
            </Button>
        </ButtonGroup>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
