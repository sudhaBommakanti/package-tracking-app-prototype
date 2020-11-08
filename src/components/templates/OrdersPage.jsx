import React from 'react';
import Card from '../molecules/Card';

export default function OrdersPage({ match, information }) {
    console.log("Match", match, information);
    const id = Number(match.params.query); 
    console.log("id",id);

    const query = new RegExp(match.params.query, "i");
    const results = information.filter((item) => item.parcel_id.match(query));
    console.log("the results",results);

    const Cards = results.map((item) => {
        return <Card key={item.id} data={item} />;
    })
  
    return(
        <div>
            <h1>orders here</h1>
            {Cards.length > 0} ? {Cards} : <p>Loading....</p>     
        </div>
    );
}