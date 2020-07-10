import React, {Component} from "react";
import {Navigator} from "../../components/";
import {AdvancedCounter} from "../../components/";

export default class HomePage extends Component<any, any>{
    public render() {
        return <div>
            <Navigator/>
            <AdvancedCounter/>
        </div>;
    }
}