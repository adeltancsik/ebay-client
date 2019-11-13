import React from "react";
import { connect } from "react-redux";
import DetailedAd from "./DetailedAd";
import { loadAd } from "../actions/ads";

class DetailedAdContainer extends React.Component {
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id));
  }

  render() {
    return <DetailedAd ad={this.props.ad} />;
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(mapStateToProps, { loadAd })(DetailedAdContainer);
