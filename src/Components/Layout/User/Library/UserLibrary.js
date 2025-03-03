import React from "react";
import "../UserDetails/UserDetail.css";
import { Book_list } from "../../../Datas";
import { Review } from "../../../Core-Components/Highlight";
import { LuIndianRupee } from "react-icons/lu";
import CustomButton from "../../../Core-Components/Button";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ProductList from "./ProductList";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

function UserLibrary() {
  return (
    <>
      <ProductList Book_list={Book_list} title="My Library">
        <div
          className="mt-1 d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <BorderLinearProgress variant="determinate" value={50} />
          <div className="d-flex justify-content-end mb-2">
            <CustomButton
              sx={{
                backgroundColor: "#BA0E0E",
                padding: "2px 8px",
                fontSize: "12px",
              }}
            >
              Cancel
            </CustomButton>
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
              Continue Reading
            </CustomButton>
          </div>
        </div>
      </ProductList>
    </>
  );
}

export default UserLibrary;
