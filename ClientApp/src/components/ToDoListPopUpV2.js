import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Checkbox, Popconfirm, message } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { FormProvider } from "antd/lib/form/context";

function ToDoListPopUpV2(props) {
  const [items, setItems] = useState(["first", "second"]);

  const addNewItem = (e) => {
    e.preventDefault();
    let item = e.target.value;
    setItems([...items, item]);
    // e.target.reset();
  };

  const confirm = (index) => {
    setItems(items.filter((i) => i !== items[index]));
    message.success("Delete this task");
  };

  const cancel = () => {
    message.error("Not delete this task");
  };

  const handleEditItem = (index, item) => {
    console.log(item);
    items[index] = item;
    console.log(items);
  };

  return (
    <>
      <FormProvider onFormFinish={props.form(items)}>
        <Form name="ToDoListItems">
          <Form.Item>
            {
              <>
                {items.map((item, index) => (
                  <li key={index} className="to-do-list-item">
                    <Checkbox className="checkbox-item"></Checkbox>
                    <span
                      className="to-do-list-item-content"
                      contenteditable="true"
                      onBlur={(e) => handleEditItem(index, e.target.innerText)}
                    >
                      {item}
                    </span>

                    <Popconfirm
                      title="Are you sure to delete this task?"
                      onConfirm={() => confirm(index)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteTwoTone className="to-do-list-item-delete-button" />
                    </Popconfirm>
                  </li>
                ))}
              </>
            }
          </Form.Item>
        </Form>

        <Form name="AddItems">
          <Form.Item
            name="name"
            // rules={[{ required: true, message: "This field is required" }]}
          >
            <Input
              className="input-to-do-list-item"
              placeholder="What needs to be done?"
              onPressEnter={(e) => addNewItem(e)}
              allowClear
            />
          </Form.Item>
        </Form>
      </FormProvider>
    </>
  );
}

export default ToDoListPopUpV2;
