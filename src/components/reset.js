import React from 'react';

class reset extends React.Component {

 onResetData(){
    this.props.onResetData();
 }

  render(){
  return (
    <button type="button" className="btn btn-primary" onClick={()=>this.onResetData()}>Reset</button>
  );}
}

export default reset;
  