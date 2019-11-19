import React from "react";
import { loadAds } from "../actions/ads";
import { connect } from "react-redux";
import AdList from "./AdList";
import AddAdFormContainer from "./AddAdFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import { Link } from "react-router-dom";

class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return (
      <div className="adlist">
        {!this.props.user ? (
          <div>
            <p>If you don't have an account yet, please sign up!</p>
            <Link to={`/signup`}>Sign up</Link>
            <LoginFormContainer />
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
