
import React, { Component } from 'react';
import UserForm from './components/UserForm'
import User from './components/User';


class App extends Component{
  constructor(props) { 
    super(props);
    this.state = {
      users: [
        {
        name: "Bless Benedict" ,
        email: "afetb@mail.com",
        gen : "1"
        },
        {
          name: "Eben Sampson",
          email: "eben@mail.com",
          gen : "1"
          },
          {
            name: "Mike Mensah",
            email: "afetb@mail.com",
            gen : "1"
            },
      ]
    }
  }
  handleAddUser =(newUser) => {
    this.setState({
      users: [newUser, ...this.state.users]
    })
  }

  render(){
    const users = this.state.users.map((user, index) => {
      return (
          <User user={user} index={index} />
      ) 
    })

    return (
      <div style ={{margin: '50px'}} >
        <UserForm  addUser={this.handleAddUser}/>
        {users}
      
      </div>
    );
  }
}
export default App