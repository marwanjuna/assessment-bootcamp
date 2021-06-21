import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import allPasswordAction from "../redux/password/allPasswordAction";
import editNewPasswordAction from "../redux/password/editPasswordAction";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm">
              <h2>Home Page</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
