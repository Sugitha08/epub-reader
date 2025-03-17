import React from "react";
import "../UserDetails/UserDetail.css";
import { Book_list } from "../../../Datas";
import CustomButton from "../../../Core-Components/Button";
import ProductList from "./ProductList";
import { Gauge } from "@mui/x-charts/Gauge";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function UserLibrary() {
  const navigate = useNavigate();
  const handlePreviewOpen = () => {
    navigate("/book/preview");
  };
  return (
    <>
      <ProductList Book_list={Book_list} title="My Orders">
        <div
          className="mt-1 d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="float-right">
            <Box sx={{ position: "relative", zIndex: "0" }}>
              <Gauge
                width={100}
                height={100}
                value={60}
                text={({ value }) => `${value}%`}
                sx={{ float: "right" }}
              />
            </Box>
          </div>
          <div className="d-flex justify-content-end mb-2">
            {/* <CustomButton
              sx={{
                backgroundColor: "#BA0E0E",
                padding: "2px 8px",
                fontSize: "12px",
              }}
            >
              Cancel
            </CustomButton> */}
            <CustomButton
              className="mx-2"
              sx={{
                backgroundColor: "#22B16A",
                padding: "2px 8px",
                fontSize: "12px",
              }}
            >
              Purchased
            </CustomButton>
            <CustomButton
              sx={{
                backgroundColor: "#4B4363",
                padding: "2px 8px",
                fontSize: "12px",
              }}
              onClick={handlePreviewOpen}
            >
              Continue Reading
            </CustomButton>
          </div>
        </div>
      </ProductList>
    </>
  );
}

export default UserLibrary;
