/**
 * @author WMXPY
 * @namespace InputTextarea
 * @description Input Textarea
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputTextarea, Theme } from "../../src";

export default {
    title: "Input Textarea",
    component: InputTextarea,
} as ComponentMeta<typeof InputTextarea>;

const Template: ComponentStory<typeof InputTextarea> = (args: any) => {

    const [value, setValue] = React.useState('');

    return (<Theme>
        <InputTextarea
            {...args}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
