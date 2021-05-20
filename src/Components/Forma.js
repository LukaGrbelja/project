import React,{Component} from "react";

export class Forma extends Component{
    state = {
        ime : "",
        pozdrav : "Dobrodosao/la"
    }
    render(){
        return(
            <div>
                <form>
                    <input placeholder="Unesi ime" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
                </form>
                <p>{this.state.pozdrav} {this.state.ime}</p>
            </div>
        );
    }
}

export default Forma;