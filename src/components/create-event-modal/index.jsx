import { useState } from "react";
import { Button, Modal, Steps, Form, Input, Tag } from "antd";
import { EventFormOne, EventFormThree, EventFormTwo } from "./form-1";

export default function CreateEventModal() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({
    eventName: '',
    eventDescription: '',
  });

  const stepItems = [
    {
      title: "Event Details",
    },
    {
      title: "Date & Location",
    },
    {
      title: "Add Members",
    },
  ];

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 3000);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const customizeRequiredMark = (label, { required }) => (
    <>
      {required ? (
        <Tag color="error">Required</Tag>
      ) : (
        <Tag color="warning">Optional</Tag>
      )}
      {label}
    </>
  );

  return (
    <>
      <Button type="primary" onClick={() => setShowModal(true)} size="large">
        Create Event
      </Button>
      <Modal
        open={showModal}
        title="Create a event"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Steps
          size="small"
          current={currentStep}
          items={stepItems}
        />
        <br />
        <Form
          layout="vertical"
          variant="filled"
          initialValues={{
            requiredMarkValue: "customize",
          }}
          requiredMark={customizeRequiredMark}
        >
          <EventFormThree />
        </Form>
      </Modal>
    </>
  );
}
