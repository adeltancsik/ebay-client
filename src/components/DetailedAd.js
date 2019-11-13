import React from "react";

export default function DetailedAd(props) {
  return (
    <div className="detailedad">
      {!props.ad ? (
        "Loading..."
      ) : (
        <div>
          <h1>{props.ad.title}</h1>
          <p>Description: {props.ad.description}</p>
          <i>Price: {props.ad.price} €</i>
          <img
            src={props.ad.url}
            alt={props.ad.id}
            style={({ width: 120 }, { borderRadius: 40 })}
          />
          {/* <button onClick={props.onDelete}>Delete</button> */}
        </div>
      )}
    </div>
  );
}
