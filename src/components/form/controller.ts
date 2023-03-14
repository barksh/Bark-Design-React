/**
 * @author WMXPY
 * @namespace Components_Form
 * @description Controller
 */

import { FormContextController } from "./context/controller";

export class FormController {

    public static create(): FormController {

        return new FormController();
    }

    private readonly _contextController: FormContextController;

    private constructor() {

        this._contextController = FormContextController.create();
    }

    public getFormValues(): Record<string, any> {

        return this._contextController.getValues();
    }

    public validateForm(applyInformation: boolean = true): boolean {

        return this._contextController.validate(applyInformation);
    }
}
