import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import userLoginAction from "../redux/user/login/userLoginAction";

const Header = () => {
  const [pageURL, setPageURL] = useState("");
  const authUser = !!localStorage.getItem("accessToken");
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  const [urlProfile, setUrlProfile] = useState("/profile/" + userID);

  useEffect(() => {
    setPageURL(location.pathname);
  }, []);

  const handleLogout = () => {
    dispatch(userLoginAction.logout());
    history.push("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="ml-5">
          Password Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {authUser && (
              <>
                <Nav.Link href={urlProfile} className="mr-5">
                  Profile
                </Nav.Link>
                <Nav.Link className="mr-5" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            )}
            {!authUser && (
              <>
                {pageURL === "/register" || (
                  <Nav.Link href="/register" className="mr-5">
                    Register
                  </Nav.Link>
                )}
                {pageURL === "/login" || (
                  <Nav.Link href="/login" className="mr-5">
                    Login
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
