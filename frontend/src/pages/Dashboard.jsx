import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import allPasswordAction from "../redux/password/allPasswordAction";
import editNewPasswordAction from "../redux/password/editPasswordAction";

const Dashboard = () => {
  const userPasswordList = useSelector((state) => state.allPassword);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  useEffect(() => {
    dispatch(allPasswordAction.fetchAllPassword(userID));
  }, []);

  const handleDeletePass = (passID) => {};

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm">
            <div className="d-flex justify-content-between mb-5">
              <h2>Home Page</h2>
              <Button variant="primary" href="/password/add">
                Add New Password
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Website</th>
                  <th>Password</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th colSpan="2" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              {userPasswordList.data &&
                userPasswordList.data.map((data, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.website}</td>
                        <td>{data.password}</td>
                        <td>{data.created_at}</td>
                        <td>{data.updated_at}</td>
                        <td>
                          <Link to={`/password/edit/${data.id}`}>
                            <Button>Update</Button>
                          </Link>
                        </td>
                        <td>
                          <Button onClick={handleDeletePass(data.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
