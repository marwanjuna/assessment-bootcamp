import React, { useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import userLoginAction from "../redux/user/login/userLoginAction";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import addNewPasswordAction from "../redux/password/addPasswordAction";
import editPasswordAction from "../redux/password/editPasswordAction";

const EditPassword = () => {
  const passwordData = useSelector((state) => state.addPassword);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const passID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    dispatch(editPasswordAction.resetForm());
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);

  const handleEditPassword = (e) => {
    e.preventDefault();
    dispatch(
      editPasswordAction.editPassword(
        passwordData.website,
        passwordData.password,
        passID,
        history
      )
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div
            className="col-sm-6"
            style={{ backgroundColor: "#eaeaea", padding: "2rem" }}
          >
            {passwordData.errorMessage && (
              <Alert variant="danger">
                <Alert.Heading>{passwordData.errorMessage}</Alert.Heading>
              </Alert>
            )}
            {!passwordData.successMessage && (
              <Form
                onSubmit={handleEditPassword}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <Form.Group controlId="formBasicText" className="p-2 w-100">
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    required
                    value={passwordData.website}
                    onChange={(e) =>
                      dispatch(addNewPasswordAction.setWebsite(e.target.value))
                    }
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicText" className="p-2 w-100">
                  <Form.Control
                    type="text"
                    placeholder="Website"
                    required
                    value={passwordData.password}
                    onChange={(e) =>
                      dispatch(addNewPasswordAction.setPassword(e.target.value))
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={passwordData.isLoading ? true : false}
                >
                  {passwordData.isLoading ? "Loading..." : "Update"}
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditPassword;
