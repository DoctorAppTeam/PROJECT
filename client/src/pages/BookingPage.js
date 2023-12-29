import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { DatePicker, TimePicker, message } from "antd";
import moment from "moment";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertsSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        `/api/v1/doctor/getDoctorById`,
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //============ booking function ===============
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & time Required");
      }
      dispatch(showLoading());

      const formattedDate = moment(date, "DD-MM-YYYY").toISOString();
      const formattedTime = moment(time, "HH:mm").toISOString();
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: formattedDate,
          time: formattedTime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      message.error("Error booking appointment");
      dispatch(hideLoading());
      console.log(error);
    }
  };

  //============ availabilty function ===============
  const handleAvailabilty = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-availbility",
        {
          doctorId: params.doctorId,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <h1>BookingPage</h1>
      <div className="container m-2">
        {doctors ? (
          <div>
            <h5>
              Dr . {doctors.firstName} {doctors.lastName}
            </h5>
            <h5>Fees : {doctors.feePerCunsultation}</h5>
            {doctors.timings && (
              <h5>
                Timings: {doctors.timings[0]} - {doctors.timings[1]}
              </h5>
            )}
            <div className="d-flex flex-column w-50">
              <DatePicker
                aria-required={true}
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
              />

              <TimePicker
                aria-required={true}
                format="HH:mm"
                className="mt-3"
                onChange={(value) => {
                  setTime(moment(value).format("HH:mm"));
                }}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleAvailabilty}
              >
                Check Availability
              </button>
              {!isAvailable && (
                <button className="btn btn-dark mt-2" onClick={handleBooking}>
                  Book Now
                </button>
              )}
            </div>
          </div>
        ) : (
          <p>Loading doctor data...</p>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
