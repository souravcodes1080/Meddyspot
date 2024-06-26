import React, { useEffect, useState } from "react";
import "./hospitalDetails.css";
import location from "../../../public/assets/location.png";
import call from "../../../public/assets/call.png";
// import topRated from "../../../public/assets/topated.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
function HospitalDetails() {
  const { id } = useParams();
  const [hospitalDetails, setHospitalDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookie] = useCookies("token")

  useEffect(() => {
    fetchHospitalDetails();
  }, []);

  const fetchHospitalDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/hospital/getById/${id}`
      );

      if (response.data.success) {
        setLoading(false);
        setHospitalDetails(response.data.hospital);
        console.log(response.data.hospital);
      } else {
        setLoading(false);
        toast.error("Error fetching hospital details.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching hospital details.");
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!hospitalDetails) {
    return <div className="container">No details available.</div>;
  }

  const {
    name,
    email,
    phoneNumber,
    image,
    type,
    desc,
    specialized,
    facilities,
    doctor,
    lat,
    long,
    address,
    city,
    state,
    pincode,
    gmapLink,
    website,
    rating,
  } = hospitalDetails;
  return (
    <>
      <div className="container">
        <section>
          <strong className="title">{name}</strong>
          <div className="flex">
            <div className="rating">
              <p>{rating}</p>
              <p>⭐⭐⭐⭐</p>
              <p>160 Ratings</p>
              <p>☑️ Verified</p>
            </div>
            <div className="type">
              {type &&
                type.length > 0 &&
                type.map((t, index) => (
                  <span key={index} className="type-item">
                    {t}
                  </span>
                ))}
            </div>{" "}
          </div>
          <div className="location">
            <img src={location} alt="" width={"18px"} />
            <p>{city}, </p>
            <p>{state},</p>
            <p>{pincode}</p>
          </div>
          <div className="flex">
            <div className="phone">
              <div className="call">
                <img src={call} alt="" width={"22px"} />
                {phoneNumber}
              </div>

              <div className="whatsapp">💬 Chat</div>
              <div className="top-rated">🌠 Top rated</div>
              <div className="share">🔗 Share</div>
              <div className="heart">💓</div>
            </div>
         
            {cookie["token"] ? (
              <div className="booknow">
                <button>Enquire Now</button>
                <p>Get free details instantly via email</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className="page-main">
          <div className="photo">
            <p className="sub-title">Photos</p>
            <div className="gallery">
              {image &&
                image.length > 0 &&
                image.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/${img}`}
                    alt={`${name} image ${index + 1}`}
                    className=""
                  />
                ))}
            </div>
          </div>
          <div className="details">
            <p className="sub-title">Address</p>
            <p>{address}</p>
            <div className="address-flex">
              {" "}
              <img src={location} alt="" width={"18px"} />
              <p>
                {city}, {state}, {pincode}
              </p>
            </div>
            <p> 📧 Email: {email}</p>
            <p> 📞 Phone number: {phoneNumber}</p>
            <p>
              {" "}
              ↗️{" "}
              <a href="https://googlemaps.com" target="_blank">
                Get Direction
              </a>
            </p>
            <p>
              {" "}
              🌐{" "}
              <a href={website} target="_blank">
                Visit Website
              </a>
            </p>
          </div>
        </section>

        <section className="page-main">
          <div className="specialization">
            <p className="sub-title">💬 Specialiaztion</p>
            <div className="type">
              {specialized &&
                specialized.length > 0 &&
                specialized.map((s, index) => (
                  <span key={index} className="type-item">
                    {s}
                  </span>
                ))}
            </div>
            <p className="sub-title">👨🏻‍⚕️ Doctors</p>
            <div className="doctor">
              {doctor && doctor.length > 0 ? (
                doctor.map((d, index) => (
                  <div key={index}>
                    <img src={`http://localhost:8080/${d.profilePic}`} alt="" />
                    <p>{d.name}</p>
                    <p className="specialized">{d.specialized}</p>
                  </div>
                ))
              ) : (
                <p>No doctors listed.</p>
              )}
            </div>
          </div>
        </section>

        <section className="page-main">
          <div className="desc">
            <p className="sub-title">Description</p>
            <p>{desc}</p>
          </div>
        </section>
        <section className="call-banner">
          <div className="banner-left">
            <strong className="title">{name}</strong>
            <p>
              {city}, {state}, {pincode}
            </p>
          </div>
          <div className="banner-right">
            <div className="booknow">
              <button>Book an Appointment</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HospitalDetails;
