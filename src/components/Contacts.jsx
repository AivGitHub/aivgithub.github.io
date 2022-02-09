import React, { Component } from "react";


class Contacts extends Component {
  constructor(props) {
    super(props);

    this.contacts = props.contactsData.contacts.map(function(contact, i){
      return <div key={"outer-home-map" + i}>
        <h4>{contact.name}: {contact.value}</h4>
        </div>
      });

    this.socialNetworks = props.contactsData.socialNetworks;
  }

  render(){
    return (
      <div className="main-container contacts">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-light">Contacts:</h1>
              {this.contacts}
              <h1 className="font-weight-light">Social Networks:</h1>
              {this.socialNetworks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
