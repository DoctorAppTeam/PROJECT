import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertsSlice";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import moment from "moment";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

  //***********update doc
  //handle Finish

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
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
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  //***********update doc

  //getDoc Details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        {
          userId: params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <h1 className="page-title">Doctor Profile</h1>
      <hr />
      {doctor && (
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            ...doctor,
            timings: [
              moment(doctor.timings[0]).format("HH:mm"),
              moment(doctor.timings[1]).format("HH:mm"),
            ],
          }}
          className="m-3"
        >
          <h6 className="">Personal Details</h6>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your first Name" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Last Name"
                name="lastName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your last Name" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Phone number"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your Phone number" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your email" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="website"
                name="website"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your website" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="address"
                name="address"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your address" />
              </Form.Item>
            </Col>
          </Row>

          <h6 className="">Professional Details</h6>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="experience"
                name="experience"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your experience" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="specialization"
                name="specialization"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your specialization" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="fee Per Cunsultation"
                name="feePerCunsultation"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your fee Per Cunsultation" />
              </Form.Item>
            </Col>

            {
              <Col xs={24} md={24} lg={8}>
                <Form.Item label="timings" name="timings" required>
                  <TimePicker.RangePicker format="HH:mm" />
                </Form.Item>
              </Col>
            }

            <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
              <button className="btn btn-primary form-btn">Submit</button>
            </Col>
          </Row>
        </Form>
      )}
    </Layout>
  );
}

export default Profile;
