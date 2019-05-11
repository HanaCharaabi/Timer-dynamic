import React, { Component } from 'react'
import './App.css'
import Timer from'./components/timer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      input:''
    })
  }
  timeree=(e)=>{
    if (e.target.value < 86400 ){
    this.setState({
     input:e.target.value
    })}
    else if(e.target.value >= 86400){
        e.target.value=this.state.input
        alert("opss !! we are now talking about days");
    }
    else{alert("opss !! Please enter an integer: ");
      e.target.value=this.state.input}
  }
  render() {

    return ( 
      <div>
        
        <input type='text' value={this.state.value} onChange={this.timeree}/>
        <Timer time={this.state.input} className="App"/>
     </div>
     );
  }
}
 
export default App;