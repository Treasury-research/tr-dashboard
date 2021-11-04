import React, { useState, useEffect, useMemo } from "react";
import { Column } from "@ant-design/charts";

export default (props) => {
  const config = useMemo(() => ({
    data: [
      {
        name: "name1",
        month: "1",
        avg: 18.9,
      },
      {
        name: "name2",
        month: "2",
        avg: 28.8,
      },
      {
        name: "name3",
        month: "3",
        avg: 28.8,
      },
      {
        name: "name4",
        month: "4",
        avg: 8.8,
      },
      {
        name: "name5",
        month: "5",
        avg: 38.8,
      },
      {
        name: "name6",
        month: "6",
        avg: 18,
      },
      {
        name: "name7",
        month: "7",
        avg: 48.8,
      },
      {
        name: "name8",
        month: "8",
        avg: 68.8,
      },
      {
        name: "name9",
        month: "9",
        avg: 10.8,
      },
      {
        name: "name10",
        month: "20",
        avg: 28.8,
      },
    ],
    isGroup: true,
    xField: "month",
    yField: "avg",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  }));

  return <Column {...config} />;
};
