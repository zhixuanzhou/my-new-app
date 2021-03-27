import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Popconfirm, message } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

function ToDoListPopUp(props) {
  const [form] = Form.useForm();

  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

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
            props.form(items);
          }
          form.resetFields();
        }}
      >
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
                      <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteTwoTone />
                      </Popconfirm>
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
