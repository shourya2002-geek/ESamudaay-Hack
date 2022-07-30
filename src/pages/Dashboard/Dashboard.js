import React, { useState, useParams, useEffect } from "react";
import "./Dashboard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import EllipseWhite from "../../assets/EllipseWhite.svg";
import RectangleLeft from "../../assets/RectangleLeft.svg";
import { BsSearch } from "react-icons/bs";
import Card from "../../assets/card.svg";
import axios from "axios";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const var1 = true;
  function getEvents() {
    axios
      .get(
        "https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report"
      )
      .then((response) => console.log(response));
  }
  useEffect(() => {
    getEvents();
  }, [var1]);

  return (
    <>
      <div className="outer-cont">
        <div className="left-cont">
          <div className="rev">Revada Stores</div>

          <div className="boxes">
            <div className="box">
              Total Products
              <span className="data">25</span>
             
            </div>

            <div className="box">
              Total Products ;<span className="data">25</span>
            </div>
            <div className="box">
              Total Products
              <span className="data">25</span>
            </div>
          </div>

          <div className="boxes">
            <div className="box-errors">
              <div className="error-1">
                Types of errors
                <span className="span-div">4</span>
              </div>
              <div className="error-2">
                Total error
                <span style={{ marginLeft: "17rem", color: "red" }}>4</span>
              </div>

              <div></div>
            </div>
            <div className="graph"></div>
          </div>

          <div className="boxes">
            <div className="box-2">Div1</div>
            <div className="box-2">Div1</div>
            <div className="box-2">Div1</div>
          </div>
        </div>

        <div className="right-cont"></div>
      </div>
    </>
  );
};

export default Dashboard;
