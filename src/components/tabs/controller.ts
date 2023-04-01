/**
 * @author WMXPY
 * @namespace Components_Tabs
 * @description Controller
 */

import * as React from "react";

type SetVersionMethod = React.Dispatch<React.SetStateAction<number>>;

export type TabsControllerItem = {

    readonly id: string;
    readonly title: string;
};

export class TabsController {

    public static create(
        setVersionMethod: SetVersionMethod,
        initialActiveTabId?: string,
    ): TabsController {

        return new TabsController(
            setVersionMethod,
            initialActiveTabId,
        );
    }

    private _activeTabId: string | null = null;

    private readonly _setVersionMethod: SetVersionMethod;
    private readonly _tabs: Map<string, TabsControllerItem>;

    private constructor(
        setVersionMethod: SetVersionMethod,
        initialActiveTabId?: string,
    ) {

        this._activeTabId = initialActiveTabId ?? null;

        this._setVersionMethod = setVersionMethod;
        this._tabs = new Map<string, TabsControllerItem>();
    }

    public get tabs(): TabsControllerItem[] {
        return Array.from(this._tabs.values());
    }

    public register(item: TabsControllerItem): this {

        this._tabs.set(item.id, item);

        if (this._activeTabId === null) {
            this._activeTabId = item.id;
        }

        this._updateVersion();
        return this;
    }

    public unregister(id: string): this {

        this._tabs.delete(id);

        if (this._activeTabId === id) {
            this._activeTabId = this.tabs.values().next().value?.id ?? null;
        }

        this._updateVersion();
        return this;
    }

    public getActiveTabId(): string | null {

        return this._activeTabId;
    }

    public setActiveTabId(id: string): this {

        this._activeTabId = id;
        this._updateVersion();
        return this;
    }

    private _updateVersion(): void {

        this._setVersionMethod((previous: number) => previous + 1);
    }
}
