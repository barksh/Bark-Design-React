/**
 * @author WMXPY
 * @namespace LeadingStatic
 * @description Leading Static
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaMap } from "react-icons/fa";
import { LeadingStatic, Theme } from "../../../src";

export default {
    title: "Leading",
    component: LeadingStatic,
} as ComponentMeta<typeof LeadingStatic>;

const Template: ComponentStory<typeof LeadingStatic> = (args: any) => {

    return (<Theme>
        <LeadingStatic
            {...args}
        >
            <FaMap
                size={24}
            />
        </LeadingStatic>
    </Theme>);
};

export const Static = Template.bind({});

Static.args = {
};
