/* eslint-disable react/prop-types */
import { useState, useRef, useMemo } from "react";
import { Form, Input, DatePicker, Spin, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce";

export function EventFormOne({ formState, errorState, handleOnInputChange }) {
  return (
    <>
      <Form.Item
        label="Event Name"
        required
        tooltip="For example, 'Company Retreat' or 'Holi Party' etc."
        name="eventName"
      >
        <Input
          status={errorState["eventName"] ? "error" : ""}
          placeholder="Enter you event name"
          onChange={handleOnInputChange}
          value={formState["eventName"] || ""}
        />
      </Form.Item>
      <Form.Item
        label="Event Description"
        name="eventDescription"
        required
        tooltip={{
          title: "Description of the event you are organizing.",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input
          placeholder="Enter you event description"
          onChange={handleOnInputChange}
          value={formState["eventDescription"] || ""}
        />
      </Form.Item>
    </>
  );
}

export function EventFormTwo({ formState, errorState, handleOnInputChange }) {
  const { RangePicker } = DatePicker;
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <>
      <Form.Item
        label="Event Start and end date"
        required
        tooltip="Calander is in 24-Hour format"
        name="eventStartEndDate"
      >
        <RangePicker
          showTime={{
            format: "HH:mm",
          }}
          format="dddd, MMMM D, YYYY h:mm A"
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
      </Form.Item>
      <Form.Item
        label="Event Venure"
        name="eventVenue"
        required
        tooltip={{
          title: "Example: Pheonix Mall, Lower Parel, Mumbai",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input
          status={errorState["eventVenue"] ? "error" : ""}
          placeholder="Enter you event venue"
          value={formState["eventVenue"]}
          onChange={handleOnInputChange}
        />
      </Form.Item>
    </>
  );
}

async function fetchUserList(username) {
  console.log("fetching user", username);
  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      }))
    );
}

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

export function EventFormThree({ formState, errorState, handleOnInputChange }) {
  const [value, setValue] = useState([]);
  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: "100%",
      }}
    />
  );
}
