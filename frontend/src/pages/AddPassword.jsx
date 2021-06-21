import React, { useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import addNewPasswordAction from "../redux/password/addPasswordAction";

const AddPassword = () => {
  const passwordData = useSelector((state) => state.addPassword);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(addNewPasswordAction.resetForm());
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewPasswordAction.addNewPassword(
        passwordData.website,
        passwordData.password,
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
                onSubmit={handlePasswordSubmit}
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
                  {passwordData.isLoading ? "Loading..." : "Add"}
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

export default AddPassword;
