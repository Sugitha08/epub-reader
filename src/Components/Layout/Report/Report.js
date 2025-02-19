import React from "react";
import { IoAddOutline } from "react-icons/io5";
import Graph from "./Graph";
import Chart from "./Chart";
import "./Report.css";
import CardComponent from "../../Core-Components/Card";
import BookImg from "../../Assets/bookImg.jpg";
import { LuIndianRupee } from "react-icons/lu";

function Report() {
  const BookReport_List = [
    { title: "Book published", count: "500" },
    { title: "Book Sold", count: "400" },
    { title: "Book Rented", count: "500" },
    { title: "Total Revenue", count: "50000" },
  ];
  return (
    <div className="publisher-report">
      <div className="dash-header">
        <h4 className="mb-0">REPORT</h4>
        <button type="button" className="btn addnew-btn">
          <IoAddOutline className="me-1 mb-1" style={{ fontSize: "20px" }} />
          Add new
        </button>
      </div>
      <div className="report-card row mt-4">
        {BookReport_List?.map((book) => (
          <CardComponent
            className="col-sm-12 col-lg-3 col-md-3"
            style={{
              width: "280px",
              height: "150px",
            }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6>{book?.title}</h6>
                <div className="d-flex  align-items-center">
                  {book?.title === "Total Revenue" ? (
                    <LuIndianRupee size={25} className="mb-1" />
                  ) : (
                    ""
                  )}
                  <h2>{book?.count}</h2>
                </div>
              </div>
              <img src={BookImg} alt="img" width="100px" />
            </div>
          </CardComponent>
        ))}
        {/* <CardComponent
          className="col-sm-12 col-lg-3 col-md-3"
          style={{ width: "280px", height: "150px" }}
        >
          <p></p>
          <p></p>
        </CardComponent>
        <CardComponent
          className="col-sm-12 col-lg-3 col-md-3"
          style={{ width: "280px", height: "150px" }}
        >
          <p></p>
          <p></p>
        </CardComponent>
        <CardComponent
          className="col-sm-12 col-lg-3 col-md-3"
          style={{ width: "280px", height: "150px" }}
        >
          <p></p>
          <p></p>
        </CardComponent> */}
      </div>
      <div className="scale-report row mt-5">
        <h5 className="mb-3">BOOK SELL REPORT</h5>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <Graph />
        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Report;
