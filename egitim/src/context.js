import React, { Component } from 'react';

const UserContext=React.createContext();

const reducer=(state,action)=>{
  switch (action.type) {
    case "DELETE_USER":
      return{
        ...state,
        users:state.users.filter(user=>action.payload !==user.id)
      }
  
    default:
      return state
  }
}

export class UserProvider extends Component {
  state = {
    users:[
      {
        id:1,
        name:"ömer Can",
        surName:"Boran",
        age:21,
        salary:5000
      },
      {
        id:2,
        name:"Suna",
        surName:"Boran",
        age:17,
        salary:5000
      },
      {
        id:3,
        name:"Nisanur",
        surName:"Boran",
        age:9,
        salary:5000
      },
    ],
    dispatch:action=>{
      this.setState(state => reducer(state,action))
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;