import React, { useState } from "react";
import ToDoListPopUp from "./ToDoListPopUp";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

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
        <ToDoListPopUp />
      </Modal>
    </div>
  );
}

export default Home;
