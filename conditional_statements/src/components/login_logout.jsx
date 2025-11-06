import { Component } from "react";

class Loggedin extends Component{
    constructor(){
        super()
        this.state = ({isLoggedin : false})
    }

    handleLogin = () =>{
        this.setState({isLoggedin : true })
    }

    handleLogout = () =>{
        this.setState({isLoggedin : false})
    }

    render(){
        return <div style={{textAlign:"center"}}>
            {this.state.isLoggedin ? 
                <>
                <h2 style={{ backgroundColor:"lightblue",padding:"20px"}}>Logged in</h2>
                <button style={{backgroundColor:"red"}}onClick={this.handleLogout}>Logout</button>
                </>
            :
                <>
                <h2 style={{ backgroundColor:"lightpink",padding:"20px"}}>please login</h2>
                <button style={{backgroundColor:"green"}} onClick={this.handleLogin}>Login</button>
                </>
            }

        </div> 
    }
}
export default Loggedin