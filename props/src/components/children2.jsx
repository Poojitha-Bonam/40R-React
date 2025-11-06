import { Component } from "react";

export class Child2 extends Component{
    render(){
        return <div>
            <h1>Child2 Component</h1>
            <h3>This is {this.props.name}</h3>
        </div>
    }
}