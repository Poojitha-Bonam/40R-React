import { Component } from "react";
export class Child1 extends Component{
    render(){
        return <div>
            <p>Child1 Component</p>
            <h2>Name: {this.props.name}</h2>
        </div>
    }
}
