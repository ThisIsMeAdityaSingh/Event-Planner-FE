import { Table, Tag } from "antd";

export default function DashBoardTasksGrid() {
  const columns = [
    {
      title: "Tasks",
      dataIndex: "tasks",
      key: "tasks",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
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
    }
  ];

  const data = [
    {
      tasks: "John Brown",
      assignedTo: 32,
      dueDate: "New York No. 1 Lake Park",
      status: ["nice", "developer"],
    },
    {
      tasks: "John Brown",
      assignedTo: 32,
      dueDate: "New York No. 1 Lake Park",
      status: ["nice", "developer"],
    },
    {
      tasks: "John Brown",
      assignedTo: 32,
      dueDate: "New York No. 1 Lake Park",
      status: ["nice", "developer"],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
