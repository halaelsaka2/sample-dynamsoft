import React, { Component, useState } from "react";
import { Form, Tabs, Input, Col } from "antd";
import DWT from "./DynamsoftSDK";

const { TabPane } = Tabs;
const Sample = (props) => {
  const [activeKey, setActiveKey] = useState("1");

  const changeKey = (key) => {
    setActiveKey(key);
  };
  return (
    <>
      <Form>
        <Tabs activeKey={activeKey} onTabClick={changeKey} style={{ marginLeft: "2rem" }}>
          <TabPane tab="Inputs" key="1">
            <Col span={8}>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: `Please input Title`,
                  },
                ]}
                style={{ marginTop: "-15px" }}
              >
                <Input style={{ borderRadius: "8px" }} />
              </Form.Item>
            </Col>
          </TabPane>
          <TabPane tab="Scan" key="2">
            <DWT features={["scan", "camera", "load", "save", "upload", "barcode", "ocr", "uploader"]} />
          </TabPane>
        </Tabs>
      </Form>
    </>
  );
};

export default Sample;
