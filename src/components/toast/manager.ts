/**
 * @author WMXPY
 * @namespace Components_Toast
 * @description Manager
 */

export class ToastManager {

    private static _topRightInstance: ToastManager | null = null;
    private static _topLeftInstance: ToastManager | null = null;
    private static _bottomRightInstance: ToastManager | null = null;
    private static _bottomLeftInstance: ToastManager | null = null;

    public static getTopRightHtmlElement(zIndex: number): ToastManager {

        if (this._topRightInstance) {
            this._topRightInstance.element.style.zIndex = `${zIndex}`;
            return this._topRightInstance;
        }

        const element: HTMLElement = this._createToastElement(
            undefined,
            0,
            0,
            undefined,
        );
        element.style.alignItems = 'flex-end';
        element.style.zIndex = `${zIndex}`;

        document.body.appendChild(element);

        this._topRightInstance = new ToastManager(element);
        return this._topRightInstance;
    }

    public static getTopLeftHtmlElement(zIndex: number): ToastManager {

        if (this._topLeftInstance) {
            this._topLeftInstance.element.style.zIndex = `${zIndex}`;
            return this._topLeftInstance;
        }

        const element: HTMLElement = this._createToastElement(
            0,
            undefined,
            0,
            undefined,
        );
        element.style.alignItems = 'flex-start';
        element.style.zIndex = `${zIndex}`;

        document.body.appendChild(element);

        this._topLeftInstance = new ToastManager(element);
        return this._topLeftInstance;
    }

    public static getBottomRightHtmlElement(zIndex: number): ToastManager {

        if (this._bottomRightInstance) {
            this._bottomRightInstance.element.style.zIndex = `${zIndex}`;
            return this._bottomRightInstance;
        }

        const element: HTMLElement = this._createToastElement(
            undefined,
            0,
            undefined,
            0,
        );
        element.style.alignItems = 'flex-end';
        element.style.zIndex = `${zIndex}`;

        document.body.appendChild(element);

        this._bottomRightInstance = new ToastManager(element);
        return this._bottomRightInstance;
    }

    public static getBottomLeftHtmlElement(zIndex: number): ToastManager {

        if (this._bottomLeftInstance) {
            this._bottomLeftInstance.element.style.zIndex = `${zIndex}`;
            return this._bottomLeftInstance;
        }

        const element: HTMLElement = this._createToastElement(
            0,
            undefined,
            undefined,
            0,
        );
        element.style.alignItems = 'flex-start';
        element.style.zIndex = `${zIndex}`;

        document.body.appendChild(element);

        this._bottomLeftInstance = new ToastManager(element);
        return this._bottomLeftInstance;
    }

    private static _createToastElement(
        left: number | undefined,
        right: number | undefined,
        top: number | undefined,
        bottom: number | undefined,
    ): HTMLElement {

        const element: HTMLElement = document.createElement('div');

        element.style.position = 'fixed';

        element.style.margin = '12px';

        element.style.rowGap = '8px';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';

        if (typeof left === 'number') {
            element.style.left = `${left}px`;
        }
        if (typeof right === 'number') {
            element.style.right = `${right}px`;
        }
        if (typeof top === 'number') {
            element.style.top = `${top}px`;
        }
        if (typeof bottom === 'number') {
            element.style.bottom = `${bottom}px`;
        }

        return element;
    }

    private readonly _element: HTMLElement;

    private constructor(element: HTMLElement) {

        this._element = element;
    }

    public get element(): HTMLElement {
        return this._element;
    }
}
