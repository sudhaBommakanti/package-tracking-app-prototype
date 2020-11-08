import React from "react";
import moment from "moment";

export default function Card({ data }) {
  const { status, eta, location_name, user_name } = data;

  const iconSize = {
    width: "24px !important",
    height: "24px !important",
  };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{user_name}</b>
        </h4>
        <hr />
        <p>
          <span className="dot">Status</span>
          <span className="span-card-item">{status}</span>
        </p>
        <p>
          <span className="dot">ETA</span>
          <span className="span-card-item">
            {moment(eta).zone("+03:30").format("YYYY-MM-DD HH:mm")}
          </span>
        </p>
        <hr />
        <p className="map-icon">
          <i
            className="fas fa-2x fa-map-marker-alt mapIcon dot"
            style={iconSize}
          ></i>
          <span className="span-card-item">{location_name}</span>
        </p>
      </div>
    </div>
  );
}
