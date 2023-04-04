/**
 * @author WMXPY
 * @namespace ButtonGroup
 * @description No Border
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
            noBorder
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
            No Separator
        </div>
        <ButtonGroup
            {...args}
            noSeparator
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
            Left
        </div>
        <ButtonGroup
            {...args}
            noBorderLeft
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
            Right
        </div>
        <ButtonGroup
            {...args}
            noBorderRight
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
            Top
        </div>
        <ButtonGroup
            {...args}
            noBorderTop
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
            Bottom
        </div>
        <ButtonGroup
            {...args}
            noBorderBottom
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

export const NoBorder = Template.bind({});

NoBorder.args = {
    keepVisible: true,
};
