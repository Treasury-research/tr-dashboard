import React, { useState, useEffect, useMemo } from "react";
import { Input, Select, DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import TableWithFilter from "../../components/TableWithFilter";

export default (props) => {
  const formItems = useMemo(() => {
    return [
      {
        key: "items_keywords",
        props: {
          label: "Keywords",
          name: "keywords",
          labelCol: { span: 2 },
          wrapperCol: { span: 10 },
        },
        element: (
          <Input
            placeholder="Search by Chain,Address,Symbol,Project's name"
            addonAfter={<SearchOutlined />}
          />
        ),
        span: 24,
      },
      {
        key: "items_chain",
        props: {
          label: "Blockchain",
          name: "blockchain",
          labelCol: { span: 8 },
        },
        element: <Select placeholder="Blockchain" />,
      },
      {
        key: "items_project",
        props: {
          label: "Project",
          name: "project",
          labelCol: { span: 8 },
        },
        element: <Select placeholder="Project" />,
      },
      {
        key: "items_token",
        props: {
          label: "Token",
          name: "token",
          labelCol: { span: 8 },
        },
        element: <Select placeholder="Token" />,
      },
      {
        key: "items_range",
        props: {
          label: "TimeInterval",
          name: "timeInterval",
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
        },
        element: <DatePicker.RangePicker style={{ width: "100%" }} />,
        span: 12,
      },
      {
        key: "items_aggreation",
        props: {
          label: "Aggreation",
          name: "aggreation",
          labelCol: { span: 8 },
        },
        element: <Select placeholder="Aggreation" />,
      },
    ];
  });

  const tableColumns = useMemo(() => {
    return [
      {
        key: "project",
        title: "Project",
        dataIndex: "project",
      },
      {
        key: "symbol",
        title: "Symbol",
        dataIndex: "symbol",
      },
      {
        key: "blockchain",
        title: "Blockchain",
        dataIndex: "blockchain",
      },
      {
        key: "amount",
        title: "Amount",
        dataIndex: "amount",
      },
      {
        key: "rate",
        title: "Change Rate",
        dataIndex: "rate",
      },
      {
        key: "time",
        title: "Time",
        dataIndex: "time",
      },
    ];
  });

  const dataSource = [
    {
      key: "1",
      project: "111",
      symbol: "2222",
      blockchain: "33333",
      amount: "4444",
      rate: "555555",
      time: "666666",
    },
    {
      key: "2",
      project: "111",
      symbol: "2222",
      blockchain: "33333",
      amount: "4444",
      rate: "555555",
      time: "666666",
    },
    {
      key: "3",
      project: "111",
      symbol: "2222",
      blockchain: "33333",
      amount: "4444",
      rate: "555555",
      time: "666666",
    },
    {
      key: "4",
      project: "111",
      symbol: "2222",
      blockchain: "33333",
      amount: "4444",
      rate: "555555",
      time: "666666",
    },
    {
      key: "5",
      project: "111",
      symbol: "2222",
      blockchain: "33333",
      amount: "4444",
      rate: "555555",
      time: "666666",
    },
  ];

  return (
    <TableWithFilter
      columns={tableColumns}
      dataSource={dataSource}
      formItems={formItems}
      tableOperation={() => (
        <Button size="small" type="primary" ghost>
          check
        </Button>
      )}
    />
  );
};
