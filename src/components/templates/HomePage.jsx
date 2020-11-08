import React from "react";
import Card from "../molecules/Card";

export default function HomePage({ information }) {
  const Cards = information.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  return (
    <div className="home-page">
      <h1 className="check">Packages</h1>
      <div className="grid">{Cards}</div>
    </div>
  );
}
