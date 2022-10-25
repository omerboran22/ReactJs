import React, { Component } from 'react'
import PropTypes from "prop-types";
import UserConsumer from '../context';

class User extends Component {
  constructor(props){
    super(props);

    this.state={
      isVisible:false,
    }
  }
  static defaultProps ={
    name:"Veri Yok",
    surName:"Veri Yok",
    age:"Veri Yok",
    salary:"Veri Yok",
  }
  onClickEvent=(e)=>{
    this.setState({
      isVisible:!this.state.isVisible
    })
  }
  onDeleteUser=(dispatch,e)=>{
    const {id}=this.props
    dispatch({type:"DELETE_USER",payload:id})
  }

  render() {
    const {name,surName,age,salary,id}=this.props;
    const {isVisible}=this.state;
    return(
      <UserConsumer>{
        value=>{
          const {dispatch}=value
          return (
            <div className='card my-1'>
              <div onClick={this.onClickEvent.bind(this)} className="card-header d-flex justify-content-between">
                <div> {name} {surName} </div>
                <div> <button onClick={this.onDeleteUser.bind(this,dispatch)} className='btn btn-outline-danger'>Sil</button> </div>
              </div>
              {
                isVisible ?
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Yaş : {age} </li>
                <li className='list-group-item'>Maaş  :{salary} </li>
              </ul> : null
              }
            </div>
          )
        }
      }
      </UserConsumer>
    )
  }
}


User.propTypes={
  name:PropTypes.string.isRequired,
  surName:PropTypes.string.isRequired,
  age:PropTypes.string.isRequired,
  salary:PropTypes.string.isRequired,
}


export default User;