import React, { useState } from "react";

export default function ProfilePage() {
  const [query, setQuery] = useState("");
  const profileStyle = {
    height: "200px",
  };

  return (
      <div className="profile-page">
        <form onSubmit={(event) => setQuery(event.target.value)}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="email">Mail Address</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email address..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+46..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="Sweden">Sweden</option>
                <option value="Denmark">Denmark</option>
                <option value="Norway">Norway</option>
                <option value="Finland">Finland</option>
                <option value="Spain">Spain</option>
                <option value="Austria">Austria</option>
                <option value="France">France</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={profileStyle}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>   
  );
}
