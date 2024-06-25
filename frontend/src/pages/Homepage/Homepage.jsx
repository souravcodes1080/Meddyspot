import React, { useEffect, useState } from "react";
import "./homepage.css";
import location from "../../../public/assets/location.png";
import search from "../../../public/assets/search.png";
import hero from "../../../public/assets/hero.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function Homepage() {
  const [cookies, setCookie] = useCookies(["token", "lat", "long"]);
  const [loading, setLoading] = useState(false);
  const [nearbyHospital, setNearybyHospital] = useState([]);
  useEffect(() => {
    fetchHospital()
  }, []);
  const fetchHospital = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8080/api/hospital/nearby?lat=${cookies["lat"]}&long=${cookies["long"]}`
    );
    if (response.data.success) {
      setLoading(false)
      setNearybyHospital(response.data.hospitals)
    }else{
      setLoading(false)
      toast.error("Something went wrong fetching hospital.")
    }

  };
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
      <br />
      <br />
      <br />
      <section className="container">
        <p className="sub-title-left">Explore Category </p>
        <div className="category">
          <ul>
            <li>
              <img src={hero} alt="" width={"100%"} />
              <p>Hospital</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"} />
              <p>Nursing Homes</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"} />
              <p>Clinics</p>
            </li>
            <li>
              <img src={hero} alt="" width={"100%"} />
              <p>Pharmacies</p>
            </li>
          </ul>
        </div>
      </section>

      <br />
      <br />
      <br />
      <section className="container">
        <p className="sub-title-middle">Top Hospitals near you</p>
      </section>

      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          nearbyHospital.length > 0 ? (
            nearbyHospital.map((hospital) => (
              <div key={hospital._id} className="hospital-item">
                <p>{hospital.name}</p>
              </div>
            ))
          ) : (
            <p>No hospitals found near your location.</p>
          )
        )}
      </div>
    </>
  );
}

export default Homepage;
