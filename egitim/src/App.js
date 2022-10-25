import { Component } from 'react';
import './App.css';
import AddUser from './component/AddUser';
import Navbar from './component/Navbar';
import Users from './component/Users';

class App extends Component {
  render(){
    return (
      <div className='container'>
        <Navbar title="User App"/>
        <hr/>
        <AddUser/>
        <Users/>
      </div>
  )};
}

export default App;
