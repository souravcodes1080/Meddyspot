import React, { useEffect, useState } from "react";
import "./homepage.css";
import location from "../../../public/assets/location.png";
import search from "../../../public/assets/search.png";
import Hospital from "../../../public/assets/Hospital.png";
import Clinic from "../../../public/assets/Clinic.jpg";
import Nursinghome from "../../../public/assets/Nursinghome.jpg";
import Pharmacy from "../../../public/assets/Pharmacy.jpg";
import newsletter from "../../../public/assets/newsletter.jpg";
import email from "../../../public/assets/email.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Card from "../../components/Card/Card";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
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
      setNearybyHospital(response.data.hospitals);
    } else {
      setLoading(false);
      toast.error("Something went wrong fetching hospital.");
    }
  };

  
  return (
    <>
      <div className="hero-wrapper">
        <section className="hero">
          <div className="hero-content">
            <h1>MED & CARE</h1>
            <p>Transforming health through innovation</p>
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
      </div>

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
              <img src={Nursinghome} alt="" width={"100%"} />
              <p>Nursing Homes</p>
            </li>

            <li>
              <img src={Clinic} alt="" width={"100%"} />
              <p>Clinics</p>
            </li>
            <li>
              <img src={Pharmacy} alt="" width={"100%"} />
              <p>Pharmacies</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="container">
        <p className="sub-title-middle">Top Hospitals near you</p>
      </section>

      <div className="container">
        <div className="hospital-list">
          {loading ? (
            <p>Loading...</p>
          ) : nearbyHospital.length > 0 ? (
            nearbyHospital.map((hospital) => (
              <Link
                key={hospital._id}
                to={`/hospital/${hospital._id}`}
                className="link"
              >
                <Card hospital={hospital} />
              </Link>
            ))
          ) : (
            <p>No hospitals found near your location.</p>
          )}
        </div>
      </div>

      <div className="container">
        <div className="newsletter">
          <div className="newsletter-left">
            <img src={newsletter} alt="" />
          </div>
          <div className="newsletter-right">
            <h2>Subscribe to our Newsletter!</h2>
            <p>Subscribe to our news letter and stay updated.</p>
            <div className="email-box">
              <img src={email} alt="" width={"25px"} />
              <input type="email" placeholder="Your email" />
            </div>
            <div className="subscribe-btn">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
