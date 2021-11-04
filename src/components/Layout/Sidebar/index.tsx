import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { menus, MenuItemIF } from "../../../routers";

import "./index.less";

const MenuItem = ({ item, children }) => {
  return (
    <div className="layout_menu_item">
      {item.subItems?.length ? (
        <>
          <div className="menu_root">
            {item.icon && (
              <span className="item_menu">
                <item.icon />
              </span>
            )}
            {item.name}
          </div>
          <div className="menu_sub_items">{children}</div>
        </>
      ) : (
        <NavLink
          className="menu_item"
          to={item.path}
          activeClassName="menu_item_active"
        >
          {item.icon && (
            <span className="item_menu">
              <item.icon />
            </span>
          )}
          {item.name}
        </NavLink>
      )}
    </div>
  );
};

export default (props) => {
  return (
    <div className="layout_sider">
      {menus.map((item: MenuItemIF) => (
        <MenuItem key={item.key} item={item}>
          {(item.subItems || []).map((subItem: MenuItemIF) => (
            <MenuItem key={subItem.key} item={subItem} />
          ))}
        </MenuItem>
      ))}
    </div>
  );
};
