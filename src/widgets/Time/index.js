import React from "react";

import { Widget, WidgetProps } from "..";
import { StyledWidget } from "../style";

import { StyledTime } from "./style";

export class Time<WidgetProps> extends Widget {
    private timeIntervalId: number;

    public props: WidgetProps;

    public state = {
        time: ''
    }

    public constructor(props: WidgetProps) {
        super(props);

        this.name = 'Time';
        this.id = 'co.dothq.time';
        this.author = 'Dot HQ <contact@dothq.co>';
    }

    public componentDidMount() {
        this.timeIntervalId = setInterval(() => this.tick(), 500);
    }

    public componentWillUnmount() {
        clearInterval(this.timeIntervalId);
    }

    public tick() {
        const d = new Date();
	
        const getH = () => {
            return d.getHours().toString().length == 1 ? "0" + d.getHours() : d.getHours()
        }

        const getM = () => {
            return d.getMinutes().toString().length == 1 ? "0" + d.getMinutes() : d.getMinutes()
        }

        const getS = () => {
            return d.getSeconds().toString().length == 1 ? "0" + d.getSeconds() : d.getSeconds()
        }

        this.setState({ time: [getH(), getM(), getS()].join(":") })

        if(!this.visible) this.visible = true;
    }

    public render() {
        return (
            <StyledWidget visible={this.visible} position={this.position}>
                <StyledTime>
                    {this.state.time}
                </StyledTime>
            </StyledWidget>
        );
    }
}
