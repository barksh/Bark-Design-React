/**
 * @author WMXPY
 * @namespace ButtonGroup
 * @description Button Group
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonGroup, Theme } from "../../../src";

export default {
    title: "Button Group",
    component: ButtonGroup,
    subcomponents: {
        Button,
    },
} as Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args: any) => {

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
        <div>
            Balanced Border
        </div>
        <ButtonGroup
            {...args}
            balancedBorder
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
        <div>
            Keep Visible
        </div>
        <ButtonGroup
            {...args}
            keepVisible
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
        <div>
            Keep Visible and Very Long
        </div>
        <ButtonGroup
            {...args}
            keepVisible
        >
            <Button
                description={"This is Button 1 ".repeat(3)}
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
