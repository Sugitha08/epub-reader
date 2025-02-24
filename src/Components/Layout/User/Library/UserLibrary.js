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
    <div className="user-wishlist card" style={{ height: "100%" }}>
      <div>
        <h4>My Library</h4>
      </div>
      <div className="wishbook-list">
        {Book_list?.slice(0, 2)?.map((book) => (
          <div className="card wish-book" style={{ padding: "5px 20px" }}>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src={book?.Book_cover} width="100px" />
              </div>
              <div
                className="col-5 d-flex flex-column"
                style={{ rowGap: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <h4 className="mb-0">{book?.Book_title}</h4>
                  <span className="mb-0"> - {book?.Book_Author}</span>
                </div>
                <div>
                  <p className="mb-0">{book?.Book_Genre}</p>
                </div>
                <Review />
                <h5 className="mb-0">
                  <LuIndianRupee
                    size={16}
                    className="mb-1"
                    style={{ fontWeight: "bold" }}
                  />
                  {book?.Book_Price}
                </h5>
              </div>
              <div className="col-5 d-flex flex-column justify-content-between">
                <div className="mt-1 ">
                  <BorderLinearProgress variant="determinate" value={50} />
                  {/* <CustomButton
                    sx={{
                      backgroundColor: "#BA0E0E",
                      padding: "2px 8px", 
                      fontSize: "12px",
                    }}
                  >
                    Cancel
                  </CustomButton> */}
                </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserLibrary;
