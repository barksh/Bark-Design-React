/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaAngleRight, FaBaseballBall } from "react-icons/fa";
import { Button, Theme } from "../../../src";

export default {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: any) => {

    return (<Theme>
        <Button
            {...args}
        />
        <div>
            Square
        </div>
        <Button
            {...args}
            square={true}
            description={undefined}
        >
            <FaAngleRight
                size={24}
            />
        </Button>
        <div>
            Without description
        </div>
        <Button
            {...args}
            description={undefined}
        />
        <div>
            With Prefix
        </div>
        <Button
            {...args}
            prefix={<div>Prefix</div>}
        />
        <div>
            With Suffix
        </div>
        <Button
            {...args}
            suffix={<div>Suffix</div>}
        />
        <div>
            With Prefix and Suffix
        </div>
        <Button
            {...args}
            prefix={<FaBaseballBall
                size={24}
            />}
            suffix={<FaAngleRight
                size={30}
            />}
        />
        <div>
            With Prefix and Suffix and Disabled
        </div>
        <Button
            {...args}
            disabled
            prefix={<FaBaseballBall
                size={24}
            />}
            suffix={<FaAngleRight
                size={30}
            />}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Button",
    description: "I am a button",
};
