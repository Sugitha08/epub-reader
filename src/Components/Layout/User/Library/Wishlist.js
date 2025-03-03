import React from "react";
import { Book_list } from "../../../Datas";
import CustomButton from "../../../Core-Components/Button";
import { MdDelete } from "react-icons/md";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import {Tooltip , IconButton} from "@mui/material";

function Wishlist() {
  const navigate = useNavigate();
  return (
    <>
      <ProductList title="My Wishlist" Book_list={Book_list}>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="text-end">
            <Tooltip title="Remove from Wishlist">
              <IconButton>
                <MdDelete size={19} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="d-flex justify-content-end mb-2">
            <CustomButton
              className="mx-2"
              sx={{
                backgroundColor: "#098446",
                padding: "6px 12px",
                fontSize: "14px",
              }}
              onClick={() => navigate("/user/dash/detail/order/summary")}
            >
              Buy Now
            </CustomButton>
            <CustomButton
             sx={{
              // backgroundColor: "#098446",
              padding: "6px 12px",
              fontSize: "14px",
            }}
              onClick={() => navigate("/user/dash/detail/order/summary")}
            >
              Rent Now
            </CustomButton>
          </div>
        </div>
      </ProductList>
    </>
  );
}

export default Wishlist;
