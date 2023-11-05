
import React from "react";
import './style.css'; // importation style 
import Card from 'react-bootstrap/Card'; // importation card 
import photo from './myPhoto.jpg'; //importation my photo

class App extends React.Component {
// declaration state
state = {

            Person : {
            fullName :" Bacem Ghdiri",
            bio :" Student at Fullstuck developpement",
             profession : "Student",
            image : photo,
            }
,
  show : false,
  time : null ,
}


componentDidMount(){
// function claluler le temps de composant
  setInterval(()=> {

    this.setState({time:this.state.time+1})
  },1000
);
}
 //  tets  des attribiut show
testShow = () => {
  this.setState((prevState) => ({ show: !prevState.show }));
};


render() {

return (
         <div>
           <button className="bntClick" onClick={this.testShow}>Show me</button>
          
           <div className="content">
            {this.state.show && (

<div>
        <Card  className="Card" style={{ width: '18rem' }}>
      <Card.Img src={this.state.Person.image} alt="my photo" width="250" height="250"/>
      <Card.Body>
        <Card.Title>{this.state.Person.fullName}</Card.Title>
        <Card.Text>
                <p>{this.state.Person.bio}</p>
                <p>{this.state.Person.profession}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
           <h1 clasName="time"> Time : {this.state.time} second </h1>
           </div>
  )


  }
  
  </div>
  </div>
)
}
}
export default App