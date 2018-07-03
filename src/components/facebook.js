import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export class Facebook extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    isLoggedIn : false,
    userID : '',
    email: '',
    name : '',
    picture : ''
  }
responseFacebook = response => {

  // console.log(response)

  this.setState({
    isLoggedIn : true,
    userID : response.userID,
    email: response.email,
    name : response.name,
    picture : response.picture.data.url
  })
}


// Arrow functions used to avoid implementing bind.

componentClicked = () => console.log('clicked')

  render() {

let fbContent;

if(this.state.isLoggedIn) {

  fbContent = <div style={{
      width : '400px' ,
      margin : 'auto',
      background : 'gray',
      padding : '20px'
    }}>
<img style={{
    width : '200px' ,

  }} src={this.state.picture} alt={this.state.name} />
<h2> Welcome {this.state.name}</h2>
Email : {this.state.email}
  </div> ;

}
else {
  // app Id from developers.facebook.com
  fbContent = (<FacebookLogin
    appId="123456789012345"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />)
}
    return (
      <div>{fbContent}</div>
    );
  }
}



export default Facebook;
