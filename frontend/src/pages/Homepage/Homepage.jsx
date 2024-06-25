import React, { useEffect, useState } from "react";
import "./homepage.css";
import location from "../../../public/assets/location.png";
import search from "../../../public/assets/search.png";
import Hospital from "../../../public/assets/Hospital.png";
import Clinic from "../../../public/assets/Clinic.jpg";
import Nursinghome from "../../../public/assets/Nursinghome.jpg";
import Pharmacy from "../../../public/assets/Pharmacy.jpg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Card from "../../components/Card/Card";

function Homepage() {
  const [cookies, setCookie] = useCookies(["token", "lat", "long"]);
  const [loading, setLoading] = useState(false);
  const [nearbyHospital, setNearybyHospital] = useState([]);
  useEffect(() => {
    fetchHospital();
  }, []);
  const fetchHospital = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8080/api/hospital/nearby?lat=${
        cookies["lat"] || 22.569859
      }&long=${cookies["long"] || 88.364241}`
    );
    if (response.data.success) {
      setLoading(false);
      console.log(nearbyHospital);
      setNearybyHospital(response.data.hospitals);
    } else {
      setLoading(false);
      toast.error("Something went wrong fetching hospital.");
    }
  };
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>MED & CARE</h1>
          <p>
           Transforming health through innovation
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
              <img src={Hospital} alt="" width={"100%"} />
              <p>Hospital</p>
            </li>

            <li>
              <img src={Clinic} alt="" width={"100%"} />
              <p>Clinics</p>
            </li>
            <li>
              <img src={Pharmacy} alt="" width={"100%"} />
              <p>Pharmacies</p>
            </li>
            <li>
              <img src={Nursinghome} alt="" width={"100%"} />
              <p>Nursing Homes</p>
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
        <div className="hospital-list">
          {loading ? (
            <p>Loading...</p>
          ) : nearbyHospital.length > 0 ? (
            nearbyHospital.map((hospital) => (
              <Card key={hospital._id} hospital={hospital} />
            ))
          ) : (
            <p>No hospitals found near your location.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;
