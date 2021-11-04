import { ReactNode } from "react";
import {
  DashboardOutlined,
  BranchesOutlined,
  FilterOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import home from "./views/home";
import login from "./views/login";
import alerts from "./views/alerts";
import aggregationDetails from "./views/aggregationDetails";

// 路由项接口
export interface RouterIF {
  key: string | number;
  title?: string;
  path: string;
  exact: boolean;
  component: ReactNode;
}

// 菜单项接口
export interface MenuItemIF {
  key: string;
  name: string;
  icon?: ReactNode;
  path?: string;
  subItems?: Array<MenuItemIF>;
}

// 路由key枚举
export enum RouterKeys {
  login = "login",
  home = "home",
  treasuryAlert = "treasuryAlert",
  alerts = "alerts",
  aggregationDetails = "aggregationDetails",
  consoler = "consoler",
}

// 路由path枚举
export enum RouterPaths {
  login = "/login",
  home = "/",
  alerts = "/treasuryalert",
  aggregationDetails = "/aggregationdetails",
  consoler = "/console",
}

export const layoutRouters: Array<RouterIF> = [
  {
    key: RouterKeys.login,
    path: RouterPaths.login,
    exact: true,
    component: login,
  },
  {
    key: RouterKeys.home,
    path: RouterPaths.home,
    exact: false,
    component: home,
  },
];

export const homeSubRouters: Array<RouterIF> = [
  {
    key: RouterKeys.alerts,
    path: RouterPaths.alerts,
    exact: true,
    component: alerts,
  },
  {
    key: RouterKeys.aggregationDetails,
    path: RouterPaths.aggregationDetails,
    exact: true,
    component: aggregationDetails,
  },
];

export const menus: Array<MenuItemIF> = [
  {
    key: RouterKeys.treasuryAlert,
    icon: BranchesOutlined,
    name: "TreasuryAlert",
    subItems: [
      {
        key: RouterKeys.alerts,
        icon: DashboardOutlined,
        name: "Alerts",
        path: RouterPaths.alerts,
      },
      {
        key: RouterKeys.aggregationDetails,
        icon: FilterOutlined,
        name: "Aggregation & Details",
        path: RouterPaths.aggregationDetails,
      },
      {
        key: RouterKeys.consoler,
        icon: ProfileOutlined,
        name: "Console",
        path: RouterPaths.consoler,
      },
    ],
  },
];
