import { Component } from 'react'
import './index.css'

class RandomNumberGenerator extends Component{
    state={value:0}
     
    generate=()=>{
        const number=Math.ceil(Math.random()*100)
        this.setState({value:number})

    }

    render(){
        const {value}=this.state
        return(
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Random Number</h1>
                    <p className="description">Generate a random number in the range of 0 to 100</p>
                    <button type="button" className="btn" onClick={this.generate}>Generate</button>
                    <h1 className="heading">{value}</h1>
                </div>
            </div>
        )
    }
}


export default RandomNumberGenerator