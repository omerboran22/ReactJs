import React, { Component } from 'react';
import { animated, useSpring } from '@react-spring/web'

const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity:isVisible ? 1 : 0,
    y: isVisible ? 0: 1,
    height: isVisible ? 500  : 0
  })

  return <animated.div style={styles}>{children}</animated.div>
}

class AddUser extends Component {
  state={
    visible:true
  }
  changeVisibility=(e)=>{
    this.setState({visible:!this.state.visible})
  }
  render() {
    const {visible}=this.state;
    return (
      <div className='container'>
      <button type="button" onClick={this.changeVisibility} className="btn btn-info col-12 my-2">
      {visible ? "hide Form": "Show Form"}
      </button>
      <FadeIn isVisible={visible}>
      <div className='card'>
          <div className='card-header'>
            <h4>Add User</h4>
          </div>
          <div className='card-body'>
            <form>
                <div className="form-group">
                  <label htmlFor="name1">Name</label>
                  <input type="text" id="name1"
                    className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="surname1">Sur Name</label>
                  <input type="text" id="surname1"
                    className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="age1">age</label>
                  <input type="text" id="age1"
                    className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="salary">salary</label>
                  <input type="text" id="salary"
                    className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary col-12">Add User</button>
            </form>

          </div>
        </div>
      </FadeIn>
      </div>
    );
  }
}

export default AddUser;




