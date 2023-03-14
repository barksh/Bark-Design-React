/**
 * @author WMXPY
 * @namespace Components_Form_Context
 * @description Controller
 */

import { CommonInputProps } from "../../input/declare";

type SetVersionMethod = React.Dispatch<React.SetStateAction<number>>;

export class FormContextController {

    public static create(): FormContextController {

        return new FormContextController();
    }

    private readonly _setVersionMap: Map<string, SetVersionMethod>;
    private readonly _inputs: Map<string, CommonInputProps>;
    private readonly _values: Map<string, Partial<CommonInputProps>>;

    private constructor() {

        this._setVersionMap = new Map<string, SetVersionMethod>();
        this._inputs = new Map<string, CommonInputProps>();
        this._values = new Map<string, Partial<CommonInputProps>>();
    }

    public getValues(): Record<string, any> {

        const results: any = {};
        for (const [key, value] of this._values) {
            results[key] = value;
        }

        return results;
    }

    public registerInput(
        key: string,
        props: CommonInputProps,
        setVersionMethod: SetVersionMethod,
    ): void {

        this._setVersionMap.set(key, setVersionMethod);
        this._inputs.set(key, props);
        this._values.set(key, {
            value: props.value ?? props.defaultValue,
        });

        this._updateVersion(key);
    }

    public unregisterInput(key: string): void {

        this._setVersionMap.delete(key);
        this._inputs.delete(key);
        this._values.delete(key);
    }

    public getInputProps(key: string): CommonInputProps {

        const inputValues: CommonInputProps = this._inputs.get(key) ?? {};
        const modifiedValue: Partial<CommonInputProps> = this._values.get(key) ?? {};

        return {
            ...inputValues,
            onChange: (value: any) => {
                this._onChangeMethod(key, value);
            },
            ...modifiedValue,
        };
    }

    public validate(applyInformation: boolean): boolean {

        let valid: boolean = true;
        for (const [key, props] of this._inputs) {

            if (typeof props.onValidate === 'function') {

                const value: Partial<CommonInputProps> = this._values.get(key) ?? {};
                const validateResult: true | string = props.onValidate(value.value);

                if (typeof validateResult === 'string') {
                    valid = false;

                    if (applyInformation) {
                        this._emitError(key, validateResult);
                    }
                } else if (validateResult === true) {

                    if (applyInformation) {
                        this._clearErrorAndWarning(key);
                    }
                }
            }
        }

        return valid;
    }

    private _onChangeMethod(key: string, value: any): void {

        this._values.set(key, {
            ...this._values.get(key),
            value,
        });
        this._updateVersion(key);
    }

    private _emitError(key: string, information: string): void {

        this._values.set(key, {
            ...this._values.get(key),
            error: information,
        });
        this._updateVersion(key);
    }

    private _emitWarning(key: string, information: string): void {

        this._values.set(key, {
            ...this._values.get(key),
            warning: information,
        });
        this._updateVersion(key);
    }

    private _clearErrorAndWarning(key: string): void {

        this._values.set(key, {
            ...this._values.get(key),
            error: undefined,
            warning: undefined,
        });
        this._updateVersion(key);
    }

    private _updateVersion(key: string): void {

        if (this._setVersionMap.has(key)) {

            const setVersionMethod = this._setVersionMap.get(key) as SetVersionMethod;
            setVersionMethod((oldVersion: number) => {
                return oldVersion + 1;
            });
        }
    }
}
