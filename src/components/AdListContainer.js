import React from "react";
import { loadAds } from "../actions/ads";
import { connect } from "react-redux";
import AdList from "./AdList";
import AddAdFormContainer from "./AddAdFormContainer";

class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return (
      <div>
        <AddAdFormContainer />
        <AdList ads={this.props.ads} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(mapStateToProps, { loadAds })(AdListContainer);
