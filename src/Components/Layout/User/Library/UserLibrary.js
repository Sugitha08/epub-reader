import React from "react";
import "../UserDetails/UserDetail.css";
import { Book_list } from "../../../Datas";
import CustomButton from "../../../Core-Components/Button";
import ProductList from "./ProductList";
import { Gauge } from "@mui/x-charts/Gauge";

function UserLibrary() {
  return (
    <>
      <ProductList Book_list={Book_list} title="My Orders">
        <div
          className="mt-1 d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="float-right">
            <Gauge
              width={100}
              height={100}
              value={60}
              text={({ value }) => `${value}%`}
              sx={{ float: "right" }}
            />
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
            >
              <a href="/Headword Flipbook Sample/index.html" style={{textDecoration:"none",color:"#f6f6f6"}}>Continue Reading</a>
            </CustomButton>
          </div>
        </div>
      </ProductList>
    </>
  );
}

export default UserLibrary;
