import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "antd";
import { SendOutlined, ClearOutlined } from "@ant-design/icons";

import "./index.less";

export default (props) => {
  const { footer, formProps = {}, formItems = [] } = props;

  const [form] = Form.useForm();

  return (
    <div className="filter">
      <Form form={form} {...formProps}>
        <Row gutter={0}>
          {formItems.map((item, idx) => (
            <Col key={item.key || idx} span={item.span || 6}>
              <Form.Item {...item.props}>{item.element}</Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
      {footer !== null && !footer && (
        <div className="filter_footer">
          <div className="filter_footer_block">
            <Button type="primary" icon={<SendOutlined />}>
              Apply
            </Button>
          </div>
          <div className="filter_footer_block">
            <Button ghost type="primary" icon={<ClearOutlined />}>
              Reset
            </Button>
          </div>
        </div>
      )}
      {footer && <div className="filter_footer">{footer}</div>}
    </div>
  );
};
