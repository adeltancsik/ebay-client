import React from "react";
import { connect } from "react-redux";
import { createAd } from "../actions/ads";
import AddAdForm from "./AddAdForm";

class AddAdFormContainer extends React.Component {
  state = {
    title: "",
    description: "",
    url: "",
    price: "",
    email: "",
    phone: ""
  };

  onChange = ad => {
    this.setState({
      [ad.target.name]: ad.target.value
    });
  };

  onSubmit = ad => {
    ad.preventDefault();
    this.props.createAd(this.state);
    this.setState({
      title: "",
      description: "",
      url: "",
      price: "",
      email: "",
      phone: ""
    });
  };
  render() {
    return (
      <AddAdForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createAd })(AddAdFormContainer);
