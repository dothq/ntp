import React from "react";

import { StyledWidget } from "./style";

import { 
    WidgetAuthor,
    WidgetId, 
    WidgetName, 
    WidgetPosition, 
    WidgetScale 
} from "./types";

export interface WidgetProps {
    children?: React.ReactChild,
    visible?: boolean
}

export class Widget extends React.Component<WidgetProps> {
    public name: WidgetName = 'Widget';
    public id: WidgetId = 'co.dothq.widget';
    public author: WidgetAuthor = 'Widget <foo@example.com>';

    private _visible: boolean = false;

    private _position: WidgetPosition = ['center', 'center'];
    private _scale: WidgetScale = 1.00;

    public get visible() { return this._visible; }

    public get position() { return this._position; }
    public get scale() { return this._scale; }

    public set visible(visible: boolean) { this._visible = visible }

    public set position(position: WidgetPosition) { this._position = position }
    public set scale(scale: WidgetScale) { this._scale = scale }

    public constructor(props: WidgetProps) {
        super(props);
    }
}