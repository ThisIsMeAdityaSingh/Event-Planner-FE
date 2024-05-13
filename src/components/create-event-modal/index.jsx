import { useState } from "react";
import { Button, Modal, Steps, Form, Tag } from "antd";
import { EventFormOne, EventFormThree, EventFormTwo } from "./form-1";

export default function CreateEventModal() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState({
    eventName: "",
    eventDescription: "",
    eventStartEndDate: "",
    eventVenue: "",
    members: [],
  });

  const [errorState, setErrorState] = useState({
    eventName: "",
    eventDescription: "",
    eventStartEndDate: "",
    eventVenue: "",
    members: [],
  });

  const validationForInput = {
    eventName: { minLength: 3, maxLength: 100, regex: /^[a-zA-Z]+$/ },
    eventDescription: { minLength: 3, maxLength: 150, regex: /^[a-zA-Z]+$/ },
    eventVenue: { minLength: 2, maxLength: 150, regex: /^[a-zA-Z]+$/ },
  };

  const handleOnInputChange = (event) => {
    const { value = "", name = "" } = event.target;

    if (validationForInput[name]) {
      const { minLength, maxLength, regex } = validationForInput[name];
      if (value.trim().length < minLength) {
        setErrorState((prevState) => {
          return {
            ...prevState,
            [name]: `Please enter a minimum of ${minLength} characters.`,
          };
        });
      }

      if (value.trim().length > maxLength) {
        setErrorState((prevState) => {
          return {
            ...prevState,
            [name]: `Please enter a maximum of ${maxLength} characters.`,
          };
        });
      }

      if (!regex.test(validationForInput[name])) {
        setErrorState((prevState) => {
          return {
            ...prevState,
            [name]: `Please enter a upper or lower case characters only.`,
          };
        });
      }

      setFormState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const stepItems = [
    {
      title: "Event Details",
      component: (
        <EventFormOne
          formState={formState}
          errorState={errorState}
          handleOnInputChange={handleOnInputChange}
        />
      ),
    },
    {
      title: "Date & Location",
      component: (
        <EventFormTwo
          formState={formState}
          errorState={errorState}
          handleOnInputChange={handleOnInputChange}
        />
      ),
    },
    {
      title: "Add Members",
      component: (
        <EventFormThree
          formState={formState}
          errorState={errorState}
          handleOnInputChange={handleOnInputChange}
        />
      ),
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

  const handleStepChange = (_, value = 1) => {
    if (currentStep === 0 && value === -1) {
      setCurrentStep(0);
      return;
    }

    if (currentStep === stepItems.length - 1 && value === 1) {
      setCurrentStep(stepItems.length - 1);
      return;
    }

    setCurrentStep((prev) => prev + value);
    return;
  };

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
          <>
            {currentStep !== 0 ? (
              <>
                <Button
                  key="back"
                  loading={loading}
                  onClick={(event) => handleStepChange(event, -1)}
                >
                  Back
                </Button>
              </>
            ) : (
              <></>
            )}
          </>,
          <>
            {currentStep === stepItems.length - 1 ? (
              <>
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                <Button
                  key="next"
                  type="primary"
                  loading={loading}
                  onClick={(event) => handleStepChange(event, 1)}
                >
                  Next
                </Button>
              </>
            )}
          </>,
        ]}
      >
        <Steps size="small" current={currentStep} items={stepItems} />
        <br />
        <Form
          layout="vertical"
          variant="filled"
          initialValues={{
            requiredMarkValue: "customize",
          }}
          requiredMark={customizeRequiredMark}
        >
          {stepItems[currentStep].component}
        </Form>
      </Modal>
    </>
  );
}
