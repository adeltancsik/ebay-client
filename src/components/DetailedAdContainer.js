import React from "react";
import { connect } from "react-redux";
import DetailedAd from "./DetailedAd";
import { loadAd, deleteAd, editAd } from "../actions/ads";
import AddAdForm from "./AddAdForm";

class DetailedAdContainer extends React.Component {
  state = { editMode: false };
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id));
  }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        title: this.props.ad.title,
        description: this.props.ad.description,
        url: this.props.ad.url,
        price: this.props.ad.price,
        email: this.props.ad.email,
        phone: this.props.ad.phone
      }
    });
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    const id = this.props.ad.id;
    this.props.editAd(id, this.state.formValues);
  };

  onDelete = () => {
    this.props.deleteAd(this.props.ad.id);
    this.props.history.push("/");
  };

  render() {
    return this.state.editMode ? (
      <AddAdForm
        onEdit={this.onEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state.formValues}
      />
    ) : (
      <DetailedAd
        ad={this.props.ad}
        onDelete={this.onDelete}
        onEdit={this.onEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state.formValues}
      />
    );
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(mapStateToProps, { loadAd, deleteAd, editAd })(
  DetailedAdContainer
);
