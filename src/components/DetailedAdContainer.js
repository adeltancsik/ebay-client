import React from "react";
import { connect } from "react-redux";
import DetailedAd from "./DetailedAd";
import { loadAd, deleteAd } from "../actions/ads";

class DetailedAdContainer extends React.Component {
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteAd(this.props.ad.id);
    this.props.history.push("/");
  };

  render() {
    return <DetailedAd ad={this.props.ad} onDelete={this.onDelete} />;
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(mapStateToProps, { loadAd, deleteAd })(
  DetailedAdContainer
);
