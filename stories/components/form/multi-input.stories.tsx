/**
 * @author WMXPY
 * @namespace Form
 * @description Multi Input
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Form, InputSelect, InputText, InputTextarea, Theme, useForm } from "../../../src";

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
            <InputSelect
                title="Third Input"
                options={[{
                    type: 'group',
                    label: 'Option 1',
                    children: [{
                        label: 'Option 1.1',
                        value: 'option-1.1',
                    }, {
                        label: 'Option 1.2',
                        value: 'option-1.2',
                    }],
                }, {
                    type: 'element',
                    label: 'Option 2',
                    value: 'option-2',
                }, {
                    type: 'element',
                    label: 'Option 3',
                    value: 'option-3',
                }]}
                information="Value must be under Option 1"
                onValidate={(value: string) => {
                    if (value !== 'option-1.1' && value !== 'option-1.2') {
                        return 'Error! Value must be under Option 1';
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
