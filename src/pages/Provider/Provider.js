import React, { useState, useParams, useEffect } from "react";
import "./Provider.css";
import axios from "axios";  

              
const Provider = () => {
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
       
      </div>
    </>
  );
};

export default Dashboard;
