/**
 * @author WMXPY
 * @namespace Card
 * @description Card With Actions
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
import { Button, ButtonGroup, Card, Theme } from "../../../src";

export default {
    title: "Card",
    component: Card,
    subcomponents: {
        Button,
        ButtonGroup,
    },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args: any) => {

    return (<Theme>
        <Card
            {...args}
            actions={<Button>
                Button 1
            </Button>}
        />
        <div>
            With ButtonGroup
        </div>
        <Card
            {...args}
            actions={<ButtonGroup>
                <Button>
                    Button 1
                </Button>
                <Button>
                    Button 2
                </Button>
            </ButtonGroup>}
        />
        <div>
            With Prefix and Suffix
        </div>
        <Card
            {...args}
            bodyPrefix={<FaBoxOpen
                size={40}
            />}
            bodySuffix={<Button>
                <FaArrowRight
                    size={25}
                />
            </Button>}
            actions={<ButtonGroup>
                <Button>
                    Button 1
                </Button>
                <Button>
                    Button 2
                </Button>
            </ButtonGroup>}
        />
    </Theme>);
};

export const WithActions = Template.bind({});

WithActions.args = {
    bodyTitle: "Card Title",
    children: "Card Content",
    loadingPlaceholder: "Loading Placeholder",
};
