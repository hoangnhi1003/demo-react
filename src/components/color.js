import React from 'react';





class color extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      colors: ['Red', 'Yellow', 'Green', 'blue']
    }
  }
 
  OnchangeColor(color){
   this.props.OnReceiveColor(color);
  }
   render(){
    return (
         <div className="card">
            <div className="card-header">
              Colors
          </div>
            <div className="card-body">
            {   this.state.colors.map((color,index) => {
                 return (
                    <button type="button" className="btn btn-primary"
                    key={index} 
                     style={{backgroundColor: color}}
                     onClick={()=> this.OnchangeColor(color)}>
                     {color}</button>
                );
            })}
            </div>
     </div>
  );}
}

export default color;
