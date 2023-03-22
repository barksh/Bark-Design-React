/**
 * @author WMXPY
 * @namespace Hooks_ZIndex
 * @description Controller
 */

const START_VALUE: number = 1000;

export class ZIndexController {

    private static _instance: ZIndexController | null = null;

    public static getInstance(): ZIndexController {

        if (!this._instance) {
            this._instance = new ZIndexController();
        }
        return this._instance;
    }

    private _itemOverlays: number;
    private _itemUnderlays: number;

    private constructor() {

        this._itemOverlays = 0;
        this._itemUnderlays = 0;
    }

    public getOverlayZIndex(): number {

        this._itemOverlays += 1;
        return this._itemOverlays + START_VALUE;
    }

    public getUnderlayZIndex(): number {

        this._itemUnderlays += 1;
        return START_VALUE - 1 - this._itemUnderlays;
    }
}
