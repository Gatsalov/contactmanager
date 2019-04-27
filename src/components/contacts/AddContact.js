import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
 
  onChange =(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  
  addContact = async (dispath,e)=>{
    e.preventDefault();
    const { name, email, phone, errors } = this.state;
    let errorFlag = false;
    for(let prop in this.state){
      if(this.state[prop] === ''){
        errorFlag = true;
        errors[prop] = 'This fild is required!'
      }else{
        errors[prop] = ''
      }
    }
    if(errorFlag){
      this.setState({errors})
      return;
    }

    const newContact = {
      name,
      email,
      phone
    }
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    console.log(res.data)
    dispath({type: 'ADD_CONTACT', payload: res.data})
    this.setState({
      id:'',
      name:'',
      email:'',
      phone:'',
      errors: {}
    })
    this.props.history.push('/')
    // console.log(this.state)
  }
  render() {
    const {name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value =>{
          const { dispatch } = value;
          return(
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.addContact.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={ this.onChange }
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={ this.onChange }
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={ this.onChange }
                    error={errors.phone}
                  />
                  <input type="submit" 
                    value="Edit Contact" 
                    className="btn btn-light btn-block"
                    style={{cursor: "pointer"}}/>
                </form>
              </div>
            </div>
            )
          }
        }
      </Consumer>
    );
  }
}

export default AddContact;