import React from "react";
import { loadAds } from "../actions/ads";
import { connect } from "react-redux";
import AdList from "./AdList";
import AddAdFormContainer from "./AddAdFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return (
      <div>
        {!this.props.user ? (
          <div>
            {" "}
            <SignupFormContainer /> <LoginFormContainer />
          </div>
        ) : (
          <AddAdFormContainer />
        )}
        <AdList ads={this.props.ads} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  user: state.user
});

export default connect(mapStateToProps, { loadAds })(AdListContainer);
