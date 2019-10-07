import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";

import './App.css';
import Color from './components/color'
import Size from './components/size'
import Result from './components/result'
import Reset from './components/reset'
import Nav from './components/nav'





class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    color: 'Red',
    size: 20
  }

  this.changeColor = this.changeColor.bind(this)
  this.changeSize = this.changeSize.bind(this)
  this.resetData = this.resetData.bind(this)
}

resetData(){
   this.setState({
     color: 'Red',
     size: 20 
   })
}

changeColor(newColor){
  this.setState({color: newColor});
}

changeSize(newSize){
  this.setState({size: this.state.size + newSize})
}

 render(){
  return (
    <Route>
    <div className="App">
    <Switch>
    <Route path="/nav"><Nav></Nav></Route>
    <Route path="/">
       <div className="row">
          <div className="col">
             <Color OnReceiveColor={this.changeColor}></Color>
          </div>
        <div className="col">
          <div className="row">  <Size fontSize = {this.state.size} onReceiveSize={this.changeSize}></Size></div>
          <div className="row">  <Reset onResetData={this.resetData}></Reset></div>
       </div>
       </div>
      <div className="row">
          <Result style={this.state.color} size={this.state.size}></Result>
      </div>
    </Route>
    </Switch>
  </div>
  </Route>
  );}
}

export default App;
