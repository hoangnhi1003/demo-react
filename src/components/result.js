import React from 'react';

class result extends React.Component {
 
  setStyle(){
    console.log(this.props)
    return{
      color: this.props.style,
      fontSize: this.props.size
    }
  }
 
  render(){
  return (
     <div className="card" id="result">
          <div className="card-header">
            Featured
        </div>
          <div className="card-body">
          
          <div className="input-group mb-3">
          <div className="input-group-prepend">
           <span className="input-group-text" id="inputGroup-sizing-default" style={this.setStyle()}>Default</span>
          </div>
           <input type="text"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          </div>
          </div>
  );}
}

export default result;
