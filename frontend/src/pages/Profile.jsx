import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getUserAction from "../redux/user/get/getUserAction";

const Profile = () => {
  const userData = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  const [urlUpdate, setUrlUpdate] = useState("/profile/edit/" + userID);

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

export default Profile;
