import React, { useState, useEffect, useMemo } from "react";
import { Input, Select, DatePicker, Button, Drawer } from "antd";
import { SearchOutlined, AreaChartOutlined } from "@ant-design/icons";

import TableWithFilter from "../../components/TableWithFilter";
import AggreationStatistic from "../../components/AggreationStatistic";

import "./index.less";

export default () => {
  const [statisticVisible, setStatisticVisible] = useState<boolean>(false);

  const formItems = useMemo((): Array<any> => {
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
  }, []);

  const tableColumns = useMemo((): Array<any> => {
    return [
      {
        key: "txid",
        title: "TxID",
        dataIndex: "txid",
      },
      {
        key: "from",
        title: "From",
        dataIndex: "from",
      },
      {
        key: "to",
        title: "To",
        dataIndex: "to",
      },
      {
        key: "blockchain",
        title: "Blockchain",
        dataIndex: "blockchain",
      },
      {
        key: "amount",
        title: "Current Amount",
        dataIndex: "amount",
      },
      {
        key: "lastAmount",
        title: "Last Amount",
        dataIndex: "lastAmount",
      },
      {
        key: "difference",
        title: "Difference",
        dataIndex: "difference",
      },
      {
        key: "rate",
        title: "Profit & Loss Rate",
        dataIndex: "rate",
      },
      {
        key: "time",
        title: "Time",
        dataIndex: "time",
      },
    ];
  }, []);

  const tableHeader = useMemo(() => {
    return (
      <div className="table_head">
        <Button
          icon={<AreaChartOutlined />}
          type="primary"
          onClick={() => setStatisticVisible(true)}
        >
          Statistic
        </Button>
      </div>
    );
  }, []);

  return (
    <div className="details">
      <TableWithFilter
        columns={tableColumns}
        dataSource={[]}
        formItems={formItems}
        tableHeader={tableHeader}
      />
      <Drawer
        title="Statistic"
        visible={statisticVisible}
        onClose={() => setStatisticVisible(false)}
        width="80%"
      >
        <AggreationStatistic />
      </Drawer>
    </div>
  );
};
