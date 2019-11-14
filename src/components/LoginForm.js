import React from "react";

export default function LoginForm(props) {
  return (
    <div className="loginform">
      <h3>Please log in:</h3>
      <form onSubmit={props.onSubmit}>
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
          placeholder="email"
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={props.values.password}
          onChange={props.onChange}
          placeholder="password"
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
