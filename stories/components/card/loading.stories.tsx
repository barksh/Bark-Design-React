/**
 * @author WMXPY
 * @namespace Card
 * @description Loading
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
import { Button, ButtonGroup, Card, LoadingContainerBorder, LoadingContainerRectangle, Theme } from "../../../src";

export default {
    title: "Card",
    component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args: any) => {

    return (<Theme>
        <div>
            Border Loading Provider
        </div>
        <Card
            {...args}
            width={350}
            height={350}
            loadingProvider={LoadingContainerBorder}
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
        <div>
            Rectangle Loading Provider
        </div>
        <Card
            {...args}
            width={350}
            height={350}
            loadingProvider={LoadingContainerRectangle}
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

export const Loading = Template.bind({});

Loading.args = {
    bodyTitle: "Card Title",
    children: "Card Content",
    loadingPlaceholder: "Loading Placeholder",
};
