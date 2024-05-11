import { Suspense } from "react";
import { Menu } from "antd";
import {
  TeamOutlined,
  GlobalOutlined,
  ProfileOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import "./styles.css";
import { DashboardEventGrid, DashboardTasksGrid } from "../../components/index";
import Loader from "../loading-page";
import {CreateEventModal} from "../../components/index";

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

  const onClick = (e) => {
    console.log("click ", e);
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
          <Suspense fallback={<Loader />}>
            <CreateEventModal />
          </Suspense>
        </div>
        <div className="dashboard-events-table">
          <Suspense fallback={<Loader />}>
            <DashboardEventGrid />
          </Suspense>
        </div>
        <div className="dashboard-events-table">
          <Suspense fallback={<Loader />}>
            <DashboardTasksGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
