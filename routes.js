//backend api

//user
const register = "http://localhost:8080/api/user/register";
const verify = "http://localhost:8080/api/user/verify";
const resend = "http://localhost:8080/api/user/resend";
const login = "http://localhost:8080/api/user/login";

const user = {
  name: "John Doe",
  gender: "male",
  age: 21,
  email: "john2003@gmail.com",
  phoneNumber: 9999999999,
  password: "john123",
  lat: 22.569859,
  long: 88.364241,
  height: 180,
  weight: 70,
  bloodGroup: "A+",
};

//hospital
const addHospital = "http://localhost:8080/api/hospital/add";
const getAllHospital = "http://localhost:8080/api/hospital/";
const getHospitalByid = "http://localhost:8080/api/hospital/getbyId/:id";
const searchHospital = "http://localhost:8080/api/hospital/search?query=";
const nearbyHospital = "http://localhost:8080/api/hospital/nearby?lat=&long=";
const nearbyOnlyHospital = "http://localhost:8080/api/hospital/nearbyonlyhospital?lat=&long=";
const nearbyOnlyNursingHomes = "http://localhost:8080/api/hospital/nearbyonlynursinghome?lat=&long=";
const nearbyOnlyClinic = "http://localhost:8080/api/hospital/nearbyonlyclinic?lat=&long=";
const updateHospital = "http://localhost:8080/api/hospital/update/:id";
//do not update picture, its bugged rn

const hospital = {
  name: "City Hospital",
  email: "cityhospital@example.com",
  phoneNumber: 1234567890,
  image: ["image1.jpg", "image2.jpg"],
  type: ["General", "Specialized"],
  specialized: ["Cardiology", "Neurology"],
  facilities: ["Emergency", "ICU", "Pharmacy"],
  doctor: [
    "60d5ec49f16e1e000f5c4371", // Dummy ObjectId for doctor
    "60d5ec49f16e1e000f5c4372",
  ],
  lat: 22.5726,
  long: 88.3639,
  address: "123, Park Street",
  city: "Kolkata",
  state: "West Bengal",
  pincode: 700017,
  gmapLink: "https://goo.gl/maps/example",
  website: "http://www.cityhospital.com",
};

//doctor
const addDoctor = "http://localhost:8080/api/doctor/add";
const updateDoctor = "http://localhost:8080/api/doctor/update/:id";
//do not update picture, its bugged rn

//pharmacy
const addPharmacy = "http://localhost:8080/api/pharmacy/add";
const getPharmacyByid = "http://localhost:8080/api/pharmacy/getbyId/:id";
const searchPharmacy = "http://localhost:8080/api/pharmacy/search?query=";
const nearbyPharmacy = "http://localhost:8080/api/pharmacy/nearby?lat=&long=";
const updatePharmacy = "http://localhost:8080/api/pharmacy/update/:id";
//do not update picture, its bugged rn

const pharmacy = {
  name: "HealthPlus Pharmacy",
  email: "healthplus@example.com",
  phoneNumber: 9876543210,
  storePic: ["storePic1.jpg", "storePic2.jpg"],
  lat: 22.5726,
  long: 88.3639,
  address: "456, Main Road",
  city: "Kolkata",
  state: "West Bengal",
  pincode: 700018,
  gmapLink: "https://goo.gl/maps/example",
  website: "http://www.healthpluspharmacy.com",
  rating: 4.2,
  location: {
    type: "Point",
    coordinates: [88.3639, 22.5726],
  },
};

//appointment
const bookAppointment = "http://localhost:8080/api/appointment/book";
const updateAppointmentStatus = "http://localhost:8080/api/appointment/update/:id";
const appointment = {
  user: "66785033d356960cc1f31044",
  hospital: "66791d686c82436c2b7c941b",
  doctor: "6679369d83ba3e6384f3d758",
  appointmentDate: "2024-06-30T10:00:00Z",
  appointmentTime: "10:00 AM",
  userContact: {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: 1234567890,
    address: "123 Main St, City, Country",
  },
};

//order
const placeOrder = "http://localhost:8080/api/order/place"
const getUserOrderDetail = "http://localhost:8080/api/order/getUserOrders"


const order = {
  user: "66785033d356960cc1f31044",
  prescription: ["photo"],
  pharmacy: "66785033d356960cc1f31044",
  customerDetails: "Only 1 tablet",
  name:"sourav",
  email: "sourav@gmail.com",
  phoneNumber: "987876566",
  address: "13 Cornelia Street"
}