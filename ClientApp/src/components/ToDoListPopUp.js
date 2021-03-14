import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";

function ToDoListPopUp() {
  const [form] = Form.useForm();

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "AddItems") {
            const { ToDoListItems } = forms;
            const items = ToDoListItems.getFieldValue("items") || [];
            ToDoListItems.setFieldsValue({
              items: [...items, values],
            });
          }
          form.resetFields();
        }}
      >
        <Checkbox>Meet Jun Quan</Checkbox>
        <Form name="ToDoListItems">
          <Form.Item
            shouldUpdate={(prevValues, curValues) =>
              prevValues.items !== curValues.items
            }
          >
            {({ getFieldValue }) => {
              const items = getFieldValue("items") || [];
              return (
                <>
                  {items.map((item, index) => (
                      <li>
                    <Checkbox key={index}>{item.name}</Checkbox>
                    </li>
                  ))}
                </>
              );
            }}
          </Form.Item>
        </Form>

        <Form name="AddItems" form={form}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="What needs to be done?" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Todo
          </Button>
        </Form>
      </Form.Provider>
    </>
  );
}

export default ToDoListPopUp;
