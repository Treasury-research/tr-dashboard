import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import SimpleTable from "../SimpleTable";

import "./index.less";

export default (props) => {
  const {
    formProps,
    formItems,
    filterFooter,
    columns,
    dataSource,
    tableProps,
    tableOperation,
    tableHeader,
  } = props;

  return (
    <div className="table_with_filter">
      <Filter
        formProps={formProps}
        formItems={formItems}
        footer={filterFooter}
      />
      <div className="twf_table">
        <SimpleTable
          columns={columns}
          dataSource={dataSource}
          tableProps={tableProps}
          operation={tableOperation}
          tableHeader={tableHeader}
        />
      </div>
    </div>
  );
};
