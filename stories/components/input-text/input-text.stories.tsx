/**
 * @author WMXPY
 * @namespace InputText
 * @description Input Text
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputText, Theme } from "../../../src";

export default {
    title: "Input Text",
    component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args: any) => {

    const [value, setValue] = React.useState('');

    return (<Theme>
        <InputText
            {...args}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <div>Disabled</div>
        <InputText
            {...args}
            disabled
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
    value: 'Hello World',
};
