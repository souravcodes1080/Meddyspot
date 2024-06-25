import React from "react";
import "./homepage.css";
import location from "../../../public/assets/location.png";
import search from "../../../public/assets/search.png";
import hero from "../../../public/assets/hero.png";

function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>MED & CARE</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            sapiente!
          </p>
        </div>
        <form action="" className="hero-search">
          <div className="location">
            <img src={location} alt="" width={"16px"} />
            <input type="text" name="" placeholder="Location" />
          </div>
          <div className="search">
            <img src={search} alt="" width={"18px"} />
            <input
              type="text"
              name=""
              placeholder="Search for hospitals, pharmacy near you"
            />
          </div>
        </form>
      </section>
    <br /><br /><br />
      <section className="container">
        <p className="sub-title-left">Explore Category </p>
        <div className="category">
          <ul>
            <li>
              <img src={hero} alt="" width={"100%"}/>
              <p>Hospital</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"}/>
              <p>Nursing Homes</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"}/>
              <p>Clinics</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"}/>
              <p>Pharmacies</p>
            </li>
           
          </ul>
        </div>
      </section>

      <br /><br /><br />
      <section className="container">
        <p className="sub-title-middle">Top Hospitals near you</p>
      </section>
    </>
  );
}

export default Homepage;
