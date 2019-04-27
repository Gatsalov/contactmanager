import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
state = {
  showContatInfo: false
};
onShowClick(e){
  this.setState({
    showContatInfo: !this.state.showContatInfo
  })
}
deleteClickHandler = async (dispatch, id)=>{
  // try{
    // debugger
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({type: 'DELETE_CONTACT', payload: id})
  // }catch{
    // dispatch({type: 'DELETE_CONTACT', payload: id})
  // }
}
  render() {
    const { id, name, email, phone} = this.props.contact;
    const { showContatInfo } = this.state;
    return (
      <Consumer>
        {context=>{
          const {dispatch} = context;
          return(
            <div  className="card card-body mb-3">
              <h4> {name} 
                <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
                <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.deleteClickHandler.bind(this, dispatch, id)}></i>
                <Link to={`/contacts/edit/${id}`}>
                  <i className="fas fa-pencil-alt" style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i>
                </Link>
              </h4>
              { showContatInfo ? <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul> : null}
              
            </div>
            )
          }
        }
      </Consumer>
    );
  }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired
  }
export default Contact;

