import React from "react";
import { loadAds } from "../actions/ads";
import { connect } from "react-redux";
import AdList from "./AdList";

class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return <AdList ads={this.props.ads} />;
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(mapStateToProps, { loadAds })(AdListContainer);
