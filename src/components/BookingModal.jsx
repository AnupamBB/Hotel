import React from "react";
import { Modal, Form, Input, Button, DatePicker, Select } from "antd";
import businessData from "../config/business.json";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

const BookingModal = ({
  bookingModal,
  setBookingModal,
  rooms,
  form,
  handleBooking,
}) => {
  const { booking } = businessData;

  return (
    <Modal
      title={
        <span style={{ fontSize: "24px", fontWeight: "700" }}>
          {booking.title}
        </span>
      }
      open={bookingModal}
      onCancel={() => setBookingModal(false)}
      footer={null}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleBooking}
        style={{ marginTop: "20px" }}
      >
        {/* Name */}
        <Form.Item
          label={booking.fields.name.label}
          name="name"
          rules={[
            {
              required: true,
              message: booking.fields.name.requiredMessage,
            },
          ]}
        >
          <Input
            size="large"
            placeholder={booking.fields.name.placeholder}
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label={booking.fields.email.label}
          name="email"
          rules={[
            {
              required: true,
              message: booking.fields.email.requiredMessage,
            },
            {
              type: "email",
              message: booking.fields.email.invalidMessage,
            },
          ]}
        >
          <Input
            size="large"
            placeholder={booking.fields.email.placeholder}
          />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          label={booking.fields.phone.label}
          name="phone"
          rules={[
            {
              required: true,
              message: booking.fields.phone.requiredMessage,
            },
          ]}
        >
          <Input
            size="large"
            placeholder={booking.fields.phone.placeholder}
          />
        </Form.Item>

        {/* Dates */}
        <Form.Item
          label={booking.fields.dates.label}
          name="dates"
          rules={[
            {
              required: true,
              message: booking.fields.dates.requiredMessage,
            },
          ]}
        >
          <RangePicker size="large" style={{ width: "100%" }} />
        </Form.Item>

        {/* Room Type */}
        <Form.Item
          label={booking.fields.room.label}
          name="room"
          rules={[
            {
              required: true,
              message: booking.fields.room.requiredMessage,
            },
          ]}
        >
          <Select
            size="large"
            placeholder={booking.fields.room.placeholder}
          >
            {rooms.map((room, idx) => (
              <Option key={idx} value={room.title}>
                {room.title} - {room.price}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Guests */}
        <Form.Item
          label={booking.fields.guests.label}
          name="guests"
          rules={[
            {
              required: true,
              message: booking.fields.guests.requiredMessage,
            },
          ]}
        >
          <Select
            size="large"
            placeholder={booking.fields.guests.placeholder}
          >
            {booking.fields.guests.options.map((num) => (
              <Option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Special Requests */}
        <Form.Item
          label={booking.fields.requests.label}
          name="requests"
        >
          <TextArea
            rows={3}
            placeholder={booking.fields.requests.placeholder}
          />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            style={{
              background: booking.buttonGradient,
              border: "none",
              height: "50px",
              fontWeight: "600",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            {booking.submitText}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;
