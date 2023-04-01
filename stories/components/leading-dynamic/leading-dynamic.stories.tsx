/**
 * @author WMXPY
 * @namespace LeadingDynamic
 * @description Leading Dynamic
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaMap } from "react-icons/fa";
import { LeadingDynamic, Theme } from "../../../src";

export default {
    title: "Leading",
    component: LeadingDynamic,
} as ComponentMeta<typeof LeadingDynamic>;

const Template: ComponentStory<typeof LeadingDynamic> = (args: any) => {

    return (<Theme>
        <LeadingDynamic
            {...args}
        >
            <FaMap
                size={24}
            />
        </LeadingDynamic>
    </Theme>);
};

export const Dynamic = Template.bind({});

Dynamic.args = {
};
