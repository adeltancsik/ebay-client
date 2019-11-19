import React from "react";
import { Link } from "react-router-dom";
import "./styling/AdList.css";

export default function AdList(props) {
  return (
    <div className="adlist">
      {!props.ads ? (
        "Loading..."
      ) : (
        <ul>
          {props.ads.map(ad => {
            return (
              <li className="ad" key={ad.id}>
                <Link to={`/ads/${ad.id}`} className="link">
                  {ad.title}
                  <img
                    src={ad.url}
                    alt={ad.id}
                    style={{
                      width: 90,
                      display: "block",
                      position: "center",
                      margin: "auto"
                    }}
                  />
                </Link>
                <small>Price: {ad.price} € </small>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
