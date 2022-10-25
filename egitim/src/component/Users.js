import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from '../context';
import User from './User';


class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value=>{
            const {users}=value;
            return (
              <div>{
              users.map(user=>{
                  return(
                    <User key={user.id} id={user.id} name={user.name} surName={user.surName} 
                    age={user.age.toString()} salary={user.salary.toString()} />
                  )
                })}
              </div>
            )
          }
        }
      </UserConsumer>
    );
  }
}

export default Users;