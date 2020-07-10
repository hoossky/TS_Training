import React, {Component} from "react";

export default class Clock extends Component {
    public state = {time: ""}

    public tick = () => {
        setInterval(this.tick, 1000)
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
}