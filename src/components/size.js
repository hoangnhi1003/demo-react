import React from 'react';
class App extends React.Component {

  onChangeSize(value){
     this.props.onReceiveSize(value);
  }


  render(){
  return (
  
            <div className="card">
              <div className="card-header">
                 Kich co hien tai: {this.props.fontSize}
        </div>
              <div className="card-body">
              <button type="button" className="btn btn-primary" onClick={()=>this.onChangeSize(2)}>Tang</button>
              <button type="button" className="btn btn-primary" onClick={()=>this.onChangeSize(-2)}>Giam</button>
              </div>
            </div>
         
  );}
}

export default App;
