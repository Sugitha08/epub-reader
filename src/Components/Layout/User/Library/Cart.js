import React, { useEffect } from "react";
import { Book_list } from "../../../Datas";
import CustomButton from "../../../Core-Components/Button";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import { Tooltip, IconButton } from "@mui/material";
import { LuIndianRupee } from "react-icons/lu";
import "./Library.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCartItem_Request,
  RemoveCartitem_Request,
} from "../../../../Redux/Action/UserAction/CartBookAction";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.CartBook);
  useEffect(() => {
    dispatch(GetCartItem_Request());
  }, [dispatch]);

  const OrderFooter = (
    <div className="total-price">
      <div className="d-flex justify-content-between align-items-center p-2">
        <h6 className="mb-0">Total Price</h6>
        <h6 className="mb-0">
          <LuIndianRupee size={16} className="mb-1" />
          1000
        </h6>
      </div>
      <div className="mt-2" style={{ position: "relative", bottom: "0" }}>
        <div className="d-flex justify-content-end align-items-center p-2">
          <CustomButton
            sx={{
              backgroundColor: "#19701D",
              padding: "6px 12px",
              fontSize: "14px",
            }}
            onClick={() => navigate("/user/dash/detail/order/summary")}
          >
            Place Order
          </CustomButton>
        </div>
      </div>
    </div>
  );
  const navigate = useNavigate();
  const handleDeleteCartItem = (BookId) => {
    dispatch(RemoveCartitem_Request(BookId));
  };
  return (
    <>
      <ProductList title="My Cart" Book_list={cartItems} Footer={OrderFooter}>
        {(CartId) => (
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <div className="text-end">
              <Tooltip title="Delete">
                <IconButton>
                  <MdDelete
                    size={19}
                    onClick={() => handleDeleteCartItem(CartId)}
                  />
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
                  padding: "6px 12px",
                  fontSize: "14px",
                }}
                onClick={() => navigate("/user/dash/detail/order/summary")}
              >
                Rent Now
              </CustomButton>
            </div>
          </div>
        )}
      </ProductList>
    </>
  );
}

export default Cart;
