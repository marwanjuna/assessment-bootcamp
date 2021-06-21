import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import userLoginAction from "../redux/user/login/userLoginAction";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import allPasswordAction from "../redux/password/allPasswordAction";
import editNewPasswordAction from "../redux/password/editPasswordAction";
import detailPasswordAction from "../redux/password/deletePasswordAction";
import getUserAction from "../redux/user/get/getUserAction";
import updateUserAction from "../redux/user/update/updateUserAction";

const UpdateProfile = () => {
  const userData = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  const [urlUpdate, setUrlUpdate] = useState("/edit/" + userID);

  useEffect(() => {
    dispatch(getUserAction.fetchUser(userID));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm">
            <div className="d-flex justify-content-between mb-5">
              <h2>Profile Page</h2>
              <Button variant="primary" href={urlUpdate}>
                Update Profile
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Email</th>
                </tr>
              </thead>
              {userData.data && (
                <tbody>
                  <tr>
                    <td>{userData.data.full_name}</td>
                    <td>{userData.data.address}</td>
                    <td>{userData.data.email}</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfile;
