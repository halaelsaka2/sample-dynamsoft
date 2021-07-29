import React, { Component, useState } from "react";
import { Form, Tabs, Input, Col, Row, Button } from "antd";
import DWT from "./DynamsoftSDK";

const { TabPane } = Tabs;
const Sample = (props) => {
  const [activeKey, setActiveKey] = useState("1");

  const changeKey = (key) => {
    setActiveKey(key);
  };
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };
  return (
    <>
      <Form {...formItemLayout}>
        <Tabs activeKey={activeKey} onTabClick={changeKey} style={{ marginLeft: "2rem" }}>
          <TabPane tab="Inputs" key="1">
            <Row>
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
              <Col span={8}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: `Please input name`,
                    },
                  ]}
                  style={{ marginTop: "-15px" }}
                >
                  <Input style={{ borderRadius: "8px" }} />
                </Form.Item>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Scan" key="2">
            <DWT features={["scan", "camera", "load", "save", "upload", "barcode", "ocr", "uploader"]} />
          </TabPane>
        </Tabs>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item style={{ margin: "1.5rem" }} wrapperCol={{ span: 4 }}>
              <Button type="primary" ghost={true} htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Sample;
