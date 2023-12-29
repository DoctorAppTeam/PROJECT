import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";

function DoctorForm({ onFinish, initialValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initialValues,
        ...(initialValues && {
          timings: [
            moment(initialValues?.timings[0], "HH:mm"),
            moment(initialValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
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

        <Col xs={24} md={24} lg={8}>
          <Form.Item label="timings" name="timings" required>
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Col>

        <Col xs={24} md={24} lg={8}></Col>
        <Col xs={24} md={24} lg={8}>
          <button className="btn btn-primary form-btn">Submit</button>
        </Col>
      </Row>
    </Form>
  );
}

export default DoctorForm;
