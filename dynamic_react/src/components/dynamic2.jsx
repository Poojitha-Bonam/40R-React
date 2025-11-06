import { Component } from "react";

export class Dynamic2Comp extends Component{
    // reset using constructor
    constructor(){
        super();
        this.state={count:0}
        this.resetbtn = this.reset.bind(this)
    }

    // arrow function with render
    increment(){
        this.setState({count:this.state.count+1})
    }

    // decrement using arrow function
    decrement = () =>{
        this.setState({count:this.state.count-1})
    }

    // reset using constructor
    reset(){
        this.setState({count:0})
    }
    
    render (){
        return <div>
            <h2>Dynamic 2 Component</h2>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={this.resetbtn}>Reset</button>
            <button onClick={this.decrement}>Decrement</button>  {/* no need arrow function in onclick while writing method in arrow function with render */}
            
        </div>
    }
}

export class Calculator extends Component{
    constructor(){
        super()
        this.state = {inputbox1:0,inputbox2:0,sum:0}
    }

    input1(e){
        this.setState({inputbox1:e.target.value})
    }

    input2(e){
        this.setState({inputbox2:e.target.value})
    }

    sum(){
        this.setState({sum:Number(this.state.inputbox1) + Number(this.state.inputbox2)}) 
        // by default input tag takes values as string so we need to convert them as number
        // or
        // this.setState({sum:(this.state.inputbox1*1) + (this.state.inputbox2*1)}) 
    }

    render(){
        return <div>
            <h1>Calculate Sum of two numbers</h1>
            <label htmlFor="">input1</label>
            <input type="number" onChange={(e)=>this.input1(e)}/><br/><br/>
            <label htmlFor="">input2</label>
            <input type="number" onChange={(e)=>this.input2(e)}/><br/><br/>

            <button onClick={()=>this.sum()}>Calculate sum of two numbers</button><br/>
            <p>sum of two numbers {this.state.sum}</p>
        </div>
    }
}
