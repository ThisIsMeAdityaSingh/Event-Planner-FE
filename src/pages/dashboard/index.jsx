import { useState } from "react";
import { Menu, Button, Space, Table, Tag } from "antd";
import {
  TeamOutlined,
  GlobalOutlined,
  ProfileOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import "./styles.css";

export default function Dashboard() {
  const items = [
    {
      label: "Events",
      key: "mail",
      icon: <GlobalOutlined />,
    },
    {
      label: "Oraganizers",
      key: "app",
      icon: <TeamOutlined />,
    },
    {
      label: "Tasks",
      key: "SubMenu",
      icon: <ProfileOutlined />,
    },
    {
      label: "My Account",
      key: "user-account",
      icon: <HomeOutlined />,
      children: [
        {
          label: "Settings",
          key: "setting:1",
        },
        {
          label: "Support",
          key: "setting:2",
        },
        {
          label: "Logout",
          key: "setting:3",
        },
      ],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <main className="dashboard-container">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: "100vh",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <section className="dashboard-view-section">
        <div className="dashboard-hero-section">
          <p>Upcoming Events</p>
          <Button type="primary" size={"large"}>
            Create Event
          </Button>
        </div>
        <div className="dashboard-events-table">
          <Table columns={columns} dataSource={data} />
        </div>
      </section>
    </main>
  );
}
