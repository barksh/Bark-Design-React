/**
 * @author WMXPY
 * @namespace Form
 * @description Multi Input
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Form, InputText, InputTextarea, Theme, useForm } from "../../src";

export default {
    title: "Form",
    component: Form,
    subcomponents: {
        InputText,
        InputTextarea,
    },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (_args: any) => {

    const form = useForm();

    return (<Theme>
        <Form
            controller={form}
        >
            <InputText
                title="First Input"
                information="Value must be 123"
                onValidate={(value: string) => {
                    if (value !== '123') {
                        return 'Error! Value must be 123';
                    }
                    return true;
                }}
            />
            <InputTextarea
                title="Second Input"
                onValidate={(value: string) => {
                    if (!value) {
                        return 'Error! Oh No! This is long and, Value must be not empty';
                    }
                    return true;
                }}
            />
        </Form>
        <ButtonGroup>
            <Button
                onClick={() => {
                    alert(JSON.stringify(form.getFormValues(), null, 2));
                }}
            >
                Submit
            </Button>
            <Button
                onClick={() => {
                    alert(form.validateForm());
                }}
            >
                Validate
            </Button>
        </ButtonGroup>
    </Theme>);
};

export const MultiInput = Template.bind({});

MultiInput.args = {
};
