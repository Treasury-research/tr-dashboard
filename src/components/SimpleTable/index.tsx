import React, { useState, useEffect, useMemo } from "react";
import { Table } from "antd";

import "./index.less";

export default (props) => {
  const {
    columns = [],
    dataSource = [],
    tableProps = {},
    operation,
    tableHeader,
  } = props;

  const tableColumns = useMemo(() => {
    if (operation && typeof operation === "function") {
      const operationColumn = {
        key: "operation",
        title: "",
        render: (...args) => operation(...args),
      };
      return columns.concat(operationColumn);
    }
    return columns;
  }, [columns]);

  return (
    <div className="simple_table">
      {tableHeader && <div className="simple_table_head">{tableHeader}</div>}
      <Table
        columns={tableColumns}
        dataSource={dataSource}
        size="middle"
        {...tableProps}
      />
    </div>
  );
};
