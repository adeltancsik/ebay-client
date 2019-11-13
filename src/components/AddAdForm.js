import React from "react";

export default function AddAdForm(props) {
  return (
    <div className="adform">
      <h3>Add a new advertisement:</h3>
      <form onSubmit={props.onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
          placeholder="title"
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
          placeholder="description"
        />
        <label>URL:</label>
        <input
          type="text"
          name="url"
          value={props.values.url}
          onChange={props.onChange}
          placeholder="url"
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={props.values.price}
          onChange={props.onChange}
          placeholder="price"
        />
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
          placeholder="email"
        />
        <label>Phone number:</label>
        <input
          type="text"
          name="phone"
          value={props.values.phone}
          onChange={props.onChange}
          placeholder="phone"
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
