import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';
import axios from 'axios';

class Contacts extends Component {
 
  deleteContact (id){
    // console.log(this)
   return 'qweretyu' + id
  }
  render() {
    return (
      <Consumer>
        {(context)=>{
          const { contacts } = context;
          return(
              <React.Fragment>
              <h1 className="display-4">
                <span className="text-danger">Contact</span> List
              </h1>
                {contacts.map(contact=>(
                      <Contact key={contact.id} contact={contact} deleteClick={this.deleteContact.bind(this,contact.id)}/>
                ))}
              </React.Fragment>
            )
          }
        }
      </Consumer>
    );
  }
}
export default Contacts;