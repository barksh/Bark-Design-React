/**
 * @author WMXPY
 * @namespace AppBar
 * @description App Bar
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaAngleRight, FaBaseballBall } from "react-icons/fa";
import { AppBar, Button, Theme } from "../../src";

export default {
    title: "App Bar",
    component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args: any) => {

    return (<Theme>
        <AppBar
            {...args}
        />
        <div>
            With Prefix
        </div>
        <AppBar
            {...args}
            prefix={<div>Prefix</div>}
        />
        <div>
            With Suffix
        </div>
        <AppBar
            {...args}
            suffix={<div>Suffix</div>}
        />
        <div>
            With Prefix and Suffix
        </div>
        <AppBar
            {...args}
            prefix={<Button
                noBorder
            >
                <FaBaseballBall
                    size={24}
                />
            </Button>}
            suffix={<FaAngleRight
                size={30}
            />}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    title: "Header",
};
