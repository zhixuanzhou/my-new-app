import React, { useState } from "react";
// import ToDoListPopUp from "./ToDoListPopUp";
import ToDoListPopUpV2 from "./ToDoListPopUpV2";

import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import ItemApi from "../api/item";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [items, setItems] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const callbackForm = (items) => {
    setItems(items);
  };

  const handleSaveItems = () => {
    ItemApi.createItem(items);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    handleSaveItems();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Card
      </Button>
      <Modal
        title="To Do List"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ToDoListPopUpV2 form={(items) => callbackForm(items)} />
      </Modal>
    </div>
  );
}

export default Home;
