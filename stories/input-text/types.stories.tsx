/**
 * @author WMXPY
 * @namespace InputText
 * @description Types
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputText, Theme } from "../../src";

export default {
    title: "Input Text",
    component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args: any) => {

    const [value, setValue] = React.useState('');

    return (<Theme>
        <InputText
            {...args}
            title="Text"
            type="text"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Date"
            type="date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Time"
            type="time"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Password"
            type="password"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Email"
            type="email"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Number"
            type="number"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Telephone"
            type="telephone"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
        <InputText
            {...args}
            title="Url"
            type="url"
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    </Theme>);
};

export const Types = Template.bind({});

Types.args = {
};
