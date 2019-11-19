import React from "react";

export default function SignupForm(props) {
  return (
    <div className="signupform">
      <h3>Please sign up:</h3>
      <form onSubmit={props.onSubmit}>
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
          placeholder="email"
          className="input"
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={props.values.password}
          onChange={props.onChange}
          placeholder="password"
          className="input"
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
