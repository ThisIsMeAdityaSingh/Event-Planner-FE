import { Table, Tag, Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

export default function DashBoardEventsGrid() {
  const columns = [
    {
      title: "Events",
      dataIndex: "event",
      key: "event",
      render: (text) => {
        return (
          <>
            <div>
              <a>{text.split("|")[0]}</a>
            </div>
            <div style={{ color: "darkgray" }}>{text.split("|")[1]}</div>
          </>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => {
        return (
          <>
            <div>{text.split("|")[0]}</div>
            <div style={{ color: "darkgray" }}>{text.split("|")[1]}</div>
          </>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text) => {
        return (
          <>
            <div>{text.split("|")[0]}</div>
            <div style={{ color: "darkgray" }}>{text.split("|")[1]}</div>
          </>
        );
      },
    },
    {
      title: "Organizers",
      dataIndex: "organizer",
      key: "organizer",
      render: () => {
        return (
          <Avatar.Group
            maxCount={2}
            size="medium"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{
                backgroundColor: "#1677ff",
              }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color = tag === "Ongoing" ? "green" : "geekblue";
            if (tag === "Pending") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = [
    {
      event: "Company Retreat|Annual company retreat",
      date: "May 15, 2024|3 days",
      location: "Napa Valley, CA|Vineyard Resort",
      organizer: ["Aditya", "Test User 1", "Test User 2"],
      status: ["Ongoing"],
    },
    {
      event: "Product Launch Party|Launch our new product line",
      date: "June 1, 2024|1 day",
      location: "San Francisco, CA|Ritz-Carlton Hotel",
      organizer: ["Aditya", "Test User 1", "Test User 2"],
      status: ["Pending"],
    },
    {
      event: "Holiday Party|Annual holiday celebration",
      date: "December 15, 2024|3 days",
      location: "New York City, NY|Waldorf Astoria Hotel",
      organizer: ["Aditya", "Test User 1", "Test User 2"],
      status: ["Ongoing"],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
