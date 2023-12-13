import React from "react";
import Layout from "./../components/Layout";
import { Col, Form, Input, Row, TimePicker } from "antd";

const ApplyDoctor = () => {
  //handle Finish
  const handleFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      <hr />
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
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

          <Col xs={24} md={24} lg={8}>
            <Form.Item label="timings" name="timings" required>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Submit</button>
        </div>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
