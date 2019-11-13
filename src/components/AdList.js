import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={`/ads/${ad.id}`}>
                  {ad.title}
                  <img src={ad.url} alt={ad.id} style={{ width: 80 }} />
                </Link>
                Price: {ad.price} €
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
