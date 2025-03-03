import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../Core-Components/Button";
import { TextField } from "@mui/material";

function NewCategory({ handleCategoryClose, openAddCategory }) {
  return (
    <Modal
      show={openAddCategory}
      onHide={handleCategoryClose}
      style={{ zIndex: "999999" }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{color:"#4b4363"}}>Add new Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column gap-3">
          <TextField
            fullWidth
            label="Enter Category Name"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            size="medium"
          />
          <TextField
            fullWidth
            label="Enter Discription"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            size="medium"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton
          type="button"
          className="mx-2"
          sx={{
            backgroundColor: "#BA0E0E",
            padding: "6px 12px",
            fontSize: "14px",
          }}
          onClick={handleCategoryClose}
        >
          Cancel
        </CustomButton>
        <CustomButton type="button" onClick={handleCategoryClose}   sx={{
            backgroundColor: "#22B16A",
            padding: "6px 12px",
            fontSize: "14px",
          }}>
          Add Category
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
}

export default NewCategory;
