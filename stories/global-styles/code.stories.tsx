/**
 * @author WMXPY
 * @namespace GlobalStyles
 * @description Core
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "../../src";

export default {
    title: "Global Styles",
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (_args: any) => {

    return (<Theme>
        <div>
            Code Block
        </div>
        <pre>
            <code
                data-lang="shell"
            >
                make run-code
            </code>
        </pre>
        <div>
            Inline Code like <code>
                Hello_World
            </code> between two words
        </div>
    </Theme>);
};

export const Code = Template.bind({});

Code.args = {
};
