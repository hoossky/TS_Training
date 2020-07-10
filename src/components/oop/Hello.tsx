import React,{Component} from "react";

interface HelloProps {
    name:string
}
class Hello extends Component<HelloProps>{
    public state = {name: ""}
}
export default Hello