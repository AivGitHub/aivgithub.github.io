import React, { Component } from "react";


class Contacts extends Component {
  constructor(props) {
    super(props);

    this.contacts = props.contactsData.contacts.map(function(contact, i){
      return <div className="border-bottom-2" key={"outer-home-map" + i}>
        <h4>{contact.name}: {contact.value}</h4>
        </div>
      });

    this.socialNetworks = props.contactsData.socialNetworks.map(function(socialNetwork, i){
      return <div className="border-bottom-2" key={"outer-home-map" + i}>
        <h4>
          {socialNetwork.name}: <a href={socialNetwork.url} target="_blank">{socialNetwork.url}</a>
        </h4>
        </div>
      });
  }

  render(){
    return (
      <div className="main-container contacts">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
{/*               <img */}
{/*                 className="img-fluid rounded mb-4 mb-lg-0" */}
{/*                 src="" */}
{/*                 alt="Image here" */}
{/*               /> */}
            </div>
            <div className="col-lg-7">
              <h1 className="font-weight-light border-bottom-5 fit-content">Contacts:</h1>
              {this.contacts}
              <h1 className="font-weight-light border-bottom-5 fit-content">Social Networks:</h1>
              {this.socialNetworks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
