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

const Profile = () => {
  const userData = useSelector((state) => state.userDetail);
  const userUpdate = useSelector((state) => state.updateUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  useEffect(() => {
    dispatch(getUserAction.fetchUser(userID));
  }, []);

  const handleUpdateUser = () => {};

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm">
            <div className="d-flex justify-content-between mb-5">
              <h2>Update Profile Page</h2>
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
            <Form
              onSubmit={handleUpdateUser}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Form.Group controlId="formBasicText" className="p-2 w-100">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  value={userUpdate.name}
                  onChange={(e) =>
                    dispatch(updateUserAction.setName(e.target.value))
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicText" className="p-2 w-100">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  required
                  value={userUpdate.address}
                  onChange={(e) =>
                    dispatch(updateUserAction.setAddress(e.target.value))
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={userUpdate.isLoading ? true : false}
              >
                {userUpdate.isLoading ? "Loading..." : "Update"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
