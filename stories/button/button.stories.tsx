/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Theme } from "../../src";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => {

  return (<Theme>
    <Button
      {...args}
    />
    <div>
      Without description
    </div>
    <Button
      {...args}
      description={undefined}
    />
  </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  description: "I am a button",
};
